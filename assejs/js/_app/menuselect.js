//  selector de los input de experience y las cajas contenedores de las imagenes y texto
var inputexperiencecheked = document.querySelectorAll('.input-experience');
var experiencebox = document.querySelectorAll('.experience-type');
var btnexperiencecheked = document.querySelectorAll('.btn-experience');
//  selector de los input de las skill y de las cajas contenedoras de las imagenes y texto
var inputskillcheked = document.querySelectorAll('.inputskill');
var skillbox = document.querySelectorAll('.boxskill');
var btnskillcheked = document.querySelectorAll('.btn-skill');
//  selector de los select input y de las cajas contenedoras de las imagenes y texto
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
