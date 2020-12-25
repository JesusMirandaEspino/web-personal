var Menumovil = /** @class */ (function () {
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
