//menu fixed
var listmenufixed = document.querySelectorAll('.menumovefixed');
// menu principal
var listmenuprincipal = document.querySelectorAll('.movemenuprincipal');
//menu smartphone version movemenusmarthphone
var listmenusmathphone = document.querySelectorAll('.movemenusmarthphone');
// section on page
var sectionpage = document.querySelectorAll('.section-page');
var moveScroll = function (listmenu) {
    var _loop_1 = function (i) {
        // transform node elements in html elements    
        var listmenuselect = listmenu[i];
        var listsectionpage = sectionpage[i];
        listsectionpage.style.transition = 'none';
        // click event for each element of menu list
        listmenuselect.addEventListener('click', function (e) {
            e.preventDefault();
            listsectionpage.style.opacity = '0';
            // element lick on offsettop
            var windowtopcroll = listsectionpage.offsetTop;
            setTimeout(function () {
                listsectionpage.style.opacity = '1';
                //transition: all 0.5s ease;
                listsectionpage.style.transition = 'all 0.5s ease';
            }, 200);
            listsectionpage.style.transition = 'none';
            // go to windows scroll to element select
            window.window.scrollTo(0, windowtopcroll - 20);
        });
    };
    for (var i = 0; i < listmenu.length; i++) {
        _loop_1(i);
    }
};
moveScroll(listmenufixed);
moveScroll(listmenuprincipal);
moveScroll(listmenusmathphone);
