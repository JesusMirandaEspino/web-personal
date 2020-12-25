var Menufixed = /** @class */ (function () {
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
