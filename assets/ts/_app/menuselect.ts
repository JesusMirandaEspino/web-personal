//  selector de los input de experience y las cajas contenedores de las imagenes y texto
const inputexperiencecheked: NodeListOf<HTMLElement>  = document.querySelectorAll('.input-experience');
const experiencebox: NodeListOf<HTMLElement>  = document.querySelectorAll('.experience-type');
const btnexperiencecheked: NodeListOf<HTMLElement>  = document.querySelectorAll('.btn-experience');

//  selector de los input de las skill y de las cajas contenedoras de las imagenes y texto
const inputskillcheked: NodeListOf<HTMLElement>  = document.querySelectorAll('.inputskill');
const skillbox: NodeListOf<HTMLElement>  = document.querySelectorAll('.boxskill');
const btnskillcheked: NodeListOf<HTMLElement>  = document.querySelectorAll('.btn-skill');

//  selector de los select input y de las cajas contenedoras de las imagenes y texto
const inputselectcheked: NodeListOf<HTMLElement>  = document.querySelectorAll('.type-contact');
const selectbox: NodeListOf<HTMLElement>  = document.querySelectorAll('.type-service');


const selectinputfunction =  (  input:  NodeListOf<HTMLElement>,  box: NodeListOf<HTMLElement>  ) => {

    for( let i = 0; i < input.length; i++ ){

        let select =  (input[i] as HTMLInputElement);

        select.addEventListener( 'change', () => {

            for( let a = 0; a < input.length; a++ ){
            box[a].style.display = 'none';
            box[a].style.opacity = '0';
            }
            box[i].style.display = 'flex';
            box[i].style.opacity = '1';
        } );
    }
}


const selectbtnfunction =  (  btn:  NodeListOf<HTMLElement>,  box: NodeListOf<HTMLElement>  ) => {

    for( let i = 0; i < btn.length; i++ ){

        let select =  (btn[i] as HTMLInputElement);

        select.addEventListener( 'click', () => {

            for( let a = 0; a < btn.length; a++ ){
            box[a].style.display = 'none';
            box[a].style.opacity = '0';
            btn[a].classList.remove('active');
            
            }
            box[i].style.display = 'flex';
            box[i].style.opacity = '1';
            btn[i].classList.add('active');
        } );
    }
}


selectinputfunction( inputexperiencecheked,  experiencebox );
selectinputfunction( inputskillcheked,  skillbox );
selectinputfunction( inputselectcheked,  selectbox );

selectbtnfunction( btnexperiencecheked,  experiencebox );
selectbtnfunction( btnskillcheked,  skillbox );


