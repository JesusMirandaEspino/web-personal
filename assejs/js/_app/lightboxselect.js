var containerLightBox = document.getElementById('about-me-light-box');
var btnLightBox = document.getElementById('btn-light-box');
//aboutme-photo
var photoClickLightBox = document.getElementById('aboutme-photo');
//container-aboutme-lightbox
var listElementLightBox = document.querySelectorAll('.container-aboutme-lightbox');
//select-Element-Light-Box
var selectElementLightBox = document.querySelectorAll('.select-Element-Light-Box');
btnLightBox.addEventListener('click', function () {
    containerLightBox.style.display = "none";
});
photoClickLightBox.addEventListener('click', function () {
    containerLightBox.style.display = "flex";
});
var lightboxselection = function () {
    var _loop_1 = function (c) {
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
        _loop_1(c);
    }
};
lightboxselection();
