const allInputs: NodeListOf<HTMLElement>  = document.querySelectorAll('.input-send');
const allLabels: NodeListOf<HTMLElement> = document.querySelectorAll('.label-send');
const btnSubmit: HTMLElement | null = document.getElementById('btn-submit');


//let  AllSelectElementLightBox = (selectElementLightBox[d] as HTMLInputElement);



btnSubmit?.addEventListener( 'click', (e) => {
    e.preventDefault();
    
    for( let i = 0; i < allInputs.length; i++  ) {

        let inputElement = (allInputs[i] as HTMLInputElement);
        let labelElement = (allLabels[i] as HTMLLabelElement);

        if ( inputElement.value == '' ){
            labelElement.innerText =  `Por Favor Ingresa Tu ${ inputElement.name } `;
        }else {
            labelElement.innerText = `${ inputElement.name }`;
        }

    }


    for( let i = 0; i < allInputs.length; i++  ) {
        let inputElement = (allInputs[i] as HTMLInputElement);
        let labelElement = (allLabels[i] as HTMLLabelElement);
        if ( inputElement.value.length > 3 ){
            labelElement.innerText = `${ inputElement.name }`;
        }
    }


} );