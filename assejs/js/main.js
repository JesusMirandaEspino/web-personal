///<reference path="./_app/menufixed.ts"/>
///<reference path="./_app/menumovil.ts"/>
///<reference path="./_app/menutable.ts"/>
///<reference path="./_app/menuselect.ts"/>
///<reference path="./_app/scrollup.ts"/>
///<reference path="./_app/menuscroll.ts"/>
///<reference path="./_app/mouseover.ts"/>
///<reference path="./_app/lightboxselect.ts"/>
///<reference path="./_app/formulario.ts"/>
var btnmenufixed = document.getElementById('btnmenufixed');
var btnmenumovil = document.getElementById('btnmenumovil');
var b = document.querySelector('.input-experience');
window.addEventListener('scroll', menuFunction.desplegar);
window.addEventListener('scroll', menumovilshow.showmenu);
btnmenufixed.addEventListener('click', menuFunction.showmenufixed);
btnmenumovil.addEventListener('click', menumovilshow.lateralmenu);
