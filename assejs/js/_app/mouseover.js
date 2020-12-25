// let select =  (input[i] as HTMLInputElement);
// experience-type
// Variables de elementos seleccionados
var mouseOverSelect = document.querySelectorAll('.expierence-text');
var mouseOveropacity = document.querySelectorAll('.experence-photo');
var Elementover = function () {
    var _loop_1 = function (x) {
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
        _loop_1(x);
    }
};
Elementover();
