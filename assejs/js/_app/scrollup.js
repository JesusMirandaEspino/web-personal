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
