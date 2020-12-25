var allInputs = document.querySelectorAll('.input-send');
var allLabels = document.querySelectorAll('.label-send');
var btnSubmit = document.getElementById('btn-submit');
//let  AllSelectElementLightBox = (selectElementLightBox[d] as HTMLInputElement);
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
