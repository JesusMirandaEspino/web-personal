// let select =  (input[i] as HTMLInputElement);

// experience-type

// Variables de elementos seleccionados

const mouseOverSelect: NodeListOf<HTMLElement>  = document.querySelectorAll('.expierence-text');
const mouseOveropacity: NodeListOf<HTMLElement>  = document.querySelectorAll('.experence-photo');


const Elementover = () => {

    for ( let x = 0; x < mouseOverSelect.length; x++ ) {
        let elementOver = (mouseOverSelect[x] as HTMLInputElement);
        let elementOpacity = (mouseOveropacity[x] as HTMLInputElement);
    
        elementOver.addEventListener( 'mouseover', () => {
            elementOpacity.style.opacity = '0.2' ;
        }  );

        elementOver.addEventListener( 'mouseout', () => {
            elementOpacity.style.opacity = '1' ;
        }  );
    }
}


Elementover();