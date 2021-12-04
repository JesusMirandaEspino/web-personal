"use strict";
var Menufixed = (function () {
    function Menufixed(menufixed, header, btnup, show) {
        if (menufixed === void 0) { menufixed = document.getElementById('menufixed'); }
        if (header === void 0) { header = document.getElementById('header'); }
        if (btnup === void 0) { btnup = document.getElementById('btnup'); }
        if (show === void 0) { show = true; }
        this.menufixed = menufixed;
        this.header = header;
        this.btnup = btnup;
        this.show = show;
    }
    Menufixed.prototype.desplegar = function () {
        var _a;
        var listfixed = document.getElementById('listfixed');
        var bodyTop = window.pageYOffset;
        var headerTop = (_a = this.header) === null || _a === void 0 ? void 0 : _a.offsetHeight;
        if (bodyTop >= headerTop) {
            this.menufixed.style.opacity = '1';
            this.menufixed.style.top = '0px';
            this.btnup.style.right = '0px';
        }
        else {
            this.menufixed.style.opacity = '0';
            this.menufixed.style.top = '-200px';
            this.btnup.style.right = '-80px';
            listfixed.style.display = 'none';
            listfixed.style.opacity = '0';
            this.show = true;
        }
    };
    Menufixed.prototype.showmenufixed = function () {
        var _this = this;
        var listfixed = document.getElementById('listfixed');
        var listfixedlement = document.querySelectorAll('.menumovefixed');
        if (this.show === undefined) {
            this.show = true;
            listfixed.style.display = 'block';
            listfixed.style.opacity = '1';
            this.show = false;
        }
        else if (this.show === false) {
            listfixed.style.display = 'none';
            listfixed.style.opacity = '0';
            this.show = true;
        }
        else {
            listfixed.style.display = 'block';
            listfixed.style.opacity = '1';
            this.show = false;
        }
        for (var d = 0; d < listfixedlement.length; d++) {
            var listfixedelementselect = listfixedlement[d];
            listfixedelementselect.addEventListener('click', function () {
                listfixed.style.display = 'none';
                listfixed.style.opacity = '0';
                _this.show = true;
            });
        }
    };
    return Menufixed;
}());
var menuFunction = new Menufixed;
var Menumovil = (function () {
    function Menumovil(menumovil, header, showlateral) {
        if (menumovil === void 0) { menumovil = document.getElementById('menumovil'); }
        if (header === void 0) { header = document.getElementById('header'); }
        if (showlateral === void 0) { showlateral = true; }
        this.menumovil = menumovil;
        this.header = header;
        this.showlateral = showlateral;
    }
    Menumovil.prototype.showmenu = function () {
        var _a;
        var menulist = document.getElementById('menulateral');
        var bodyTop = window.pageYOffset;
        var headerTop = (_a = this.header) === null || _a === void 0 ? void 0 : _a.offsetHeight;
        if (bodyTop >= headerTop) {
            this.menumovil.style.top = '0';
        }
        else {
            this.menumovil.style.top = '-100px';
            menulist.style.right = '-400px';
        }
    };
    Menumovil.prototype.lateralmenu = function () {
        var _this = this;
        var menulist = document.getElementById('menulateral');
        var menulistelementphone = document.querySelectorAll('.movemenusmarthphone');
        if (this.showlateral === undefined) {
            this.showlateral = true;
            menulist.style.right = '0';
        }
        else if (this.showlateral === true) {
            this.showlateral = false;
            menulist.style.right = '-400px';
        }
        else {
            menulist.style.right = '0';
            this.showlateral = true;
        }
        for (var c = 0; c < menulistelementphone.length; c++) {
            var menulistphonehiden = menulistelementphone[c];
            menulistphonehiden.addEventListener('click', function () {
                _this.showlateral = false;
                menulist.style.right = '-400px';
            });
        }
    };
    return Menumovil;
}());
var menumovilshow = new Menumovil();
var MenuTable = (function () {
    function MenuTable() {
    }
    return MenuTable;
}());
var menutable = new MenuTable();
var inputexperiencecheked = document.querySelectorAll('.input-experience');
var experiencebox = document.querySelectorAll('.experience-type');
var btnexperiencecheked = document.querySelectorAll('.btn-experience');
var inputskillcheked = document.querySelectorAll('.inputskill');
var skillbox = document.querySelectorAll('.boxskill');
var btnskillcheked = document.querySelectorAll('.btn-skill');
var inputselectcheked = document.querySelectorAll('.type-contact');
var selectbox = document.querySelectorAll('.type-service');
var selectinputfunction = function (input, box) {
    var _loop_1 = function (i) {
        var select = input[i];
        select.addEventListener('change', function () {
            for (var a = 0; a < input.length; a++) {
                box[a].style.display = 'none';
                box[a].style.opacity = '0';
            }
            box[i].style.display = 'flex';
            box[i].style.opacity = '1';
        });
    };
    for (var i = 0; i < input.length; i++) {
        _loop_1(i);
    }
};
var selectbtnfunction = function (btn, box) {
    var _loop_2 = function (i) {
        var select = btn[i];
        select.addEventListener('click', function () {
            for (var a = 0; a < btn.length; a++) {
                box[a].style.display = 'none';
                box[a].style.opacity = '0';
                btn[a].classList.remove('active');
            }
            box[i].style.display = 'flex';
            box[i].style.opacity = '1';
            btn[i].classList.add('active');
        });
    };
    for (var i = 0; i < btn.length; i++) {
        _loop_2(i);
    }
};
selectinputfunction(inputexperiencecheked, experiencebox);
selectinputfunction(inputskillcheked, skillbox);
selectinputfunction(inputselectcheked, selectbox);
selectbtnfunction(btnexperiencecheked, experiencebox);
selectbtnfunction(btnskillcheked, skillbox);
var up = function () {
    var btnUpScroll = document.getElementById('btnup');
    btnUpScroll.addEventListener('click', function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 8);
    });
};
up();
var listmenufixed = document.querySelectorAll('.menumovefixed');
var listmenuprincipal = document.querySelectorAll('.movemenuprincipal');
var listmenusmathphone = document.querySelectorAll('.movemenusmarthphone');
var sectionpage = document.querySelectorAll('.section-page');
var moveScroll = function (listmenu) {
    var _loop_3 = function (i) {
        var listmenuselect = listmenu[i];
        var listsectionpage = sectionpage[i];
        listsectionpage.style.transition = 'none';
        listmenuselect.addEventListener('click', function (e) {
            e.preventDefault();
            listsectionpage.style.opacity = '0';
            var windowtopcroll = listsectionpage.offsetTop;
            setTimeout(function () {
                listsectionpage.style.opacity = '1';
                listsectionpage.style.transition = 'all 0.5s ease';
            }, 200);
            listsectionpage.style.transition = 'none';
            window.window.scrollTo(0, windowtopcroll - 20);
        });
    };
    for (var i = 0; i < listmenu.length; i++) {
        _loop_3(i);
    }
};
moveScroll(listmenufixed);
moveScroll(listmenuprincipal);
moveScroll(listmenusmathphone);
var mouseOverSelect = document.querySelectorAll('.expierence-text');
var mouseOveropacity = document.querySelectorAll('.experence-photo');
var Elementover = function () {
    var _loop_4 = function (x) {
        var elementOver = mouseOverSelect[x];
        var elementOpacity = mouseOveropacity[x];
        elementOver.addEventListener('mouseover', function () {
            elementOpacity.style.opacity = '0.2';
        });
        elementOver.addEventListener('mouseout', function () {
            elementOpacity.style.opacity = '1';
        });
    };
    for (var x = 0; x < mouseOverSelect.length; x++) {
        _loop_4(x);
    }
};
Elementover();
var containerLightBox = document.getElementById('about-me-light-box');
var btnLightBox = document.getElementById('btn-light-box');
var photoClickLightBox = document.getElementById('aboutme-photo');
var listElementLightBox = document.querySelectorAll('.container-aboutme-lightbox');
var selectElementLightBox = document.querySelectorAll('.select-Element-Light-Box');
btnLightBox.addEventListener('click', function () {
    containerLightBox.style.display = "none";
});
photoClickLightBox.addEventListener('click', function () {
    containerLightBox.style.display = "flex";
});
var lightboxselection = function () {
    var _loop_5 = function (c) {
        var thisSelectElementLightBox = selectElementLightBox[c];
        var thisContainerLightBox = listElementLightBox[c];
        thisSelectElementLightBox.addEventListener('click', function (e) {
            e.preventDefault();
            for (var d = 0; d < listElementLightBox.length; d++) {
                var AllSelectElementLightBox = selectElementLightBox[d];
                var AllContainerLightBox = listElementLightBox[d];
                AllSelectElementLightBox.classList.remove('active');
                AllContainerLightBox.classList.remove('active');
            }
            thisSelectElementLightBox.classList.add('active');
            thisContainerLightBox.classList.add('active');
        });
    };
    for (var c = 0; c < selectElementLightBox.length; c++) {
        _loop_5(c);
    }
};
lightboxselection();
var allInputs = document.querySelectorAll('.input-send');
var allLabels = document.querySelectorAll('.label-send');
var btnSubmit = document.getElementById('btn-submit');
btnSubmit === null || btnSubmit === void 0 ? void 0 : btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    for (var i = 0; i < allInputs.length; i++) {
        var inputElement = allInputs[i];
        var labelElement = allLabels[i];
        if (inputElement.value == '') {
            labelElement.innerText = "Por Favor Ingresa Tu " + inputElement.name + " ";
        }
        else {
            labelElement.innerText = "" + inputElement.name;
        }
    }
    for (var i = 0; i < allInputs.length; i++) {
        var inputElement = allInputs[i];
        var labelElement = allLabels[i];
        if (inputElement.value.length > 3) {
            labelElement.innerText = "" + inputElement.name;
        }
    }
});
var btnCvEs = document.getElementById('btncv');
var dataUrl = 'assets/documents/Jose de Jesus Miranda Espino.pdf';
var filename = 'Jose de Jesus Miranda Espino';
function downloadDataUrlFromJavascript() {
    var link = document.createElement("a");
    link.download = filename;
    link.target = "_blank";
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
btnCvEs === null || btnCvEs === void 0 ? void 0 : btnCvEs.addEventListener('click', function () {
    console.log('hola');
    downloadDataUrlFromJavascript();
});
var btnCvEn = document.getElementById('btncvEn');
var dataUrlEn = 'assets/documents/Jose de Jesus Miranda Espino..pdf';
var filenameEn = 'Jose de Jesus Miranda Espino';
function downloadDataUrlFromJavascriptEn() {
    var linkEn = document.createElement("a");
    linkEn.download = filenameEn;
    linkEn.target = "_blank";
    linkEn.href = dataUrlEn;
    document.body.appendChild(linkEn);
    linkEn.click();
    document.body.removeChild(linkEn);
}
btnCvEn === null || btnCvEn === void 0 ? void 0 : btnCvEn.addEventListener('click', function () {
    downloadDataUrlFromJavascriptEn();
});
var btnmenufixed = document.getElementById('btnmenufixed');
var btnmenumovil = document.getElementById('btnmenumovil');
var b = document.querySelector('.input-experience');
window.addEventListener('scroll', menuFunction.desplegar);
window.addEventListener('scroll', menumovilshow.showmenu);
btnmenufixed.addEventListener('click', menuFunction.showmenufixed);
btnmenumovil.addEventListener('click', menumovilshow.lateralmenu);
