const containerLightBox :  HTMLElement | null = document.getElementById('about-me-light-box') as HTMLElement;

const btnLightBox :  HTMLElement | null = document.getElementById('btn-light-box') as HTMLElement;

//aboutme-photo
const photoClickLightBox :  HTMLElement | null = document.getElementById('aboutme-photo') as HTMLElement;


//container-aboutme-lightbox
const listElementLightBox: NodeListOf<HTMLElement>  = document.querySelectorAll('.container-aboutme-lightbox');

//select-Element-Light-Box
const selectElementLightBox: NodeListOf<HTMLElement>  = document.querySelectorAll('.select-Element-Light-Box');



btnLightBox.addEventListener( 'click', () => {
    containerLightBox.style.display="none";
} );


photoClickLightBox.addEventListener( 'click', () => {
    containerLightBox.style.display="flex";
} );


const lightboxselection = () => {
    for( let c = 0; c <  selectElementLightBox.length; c++ ){

    let  thisSelectElementLightBox = (selectElementLightBox[c] as HTMLInputElement);
    let thisContainerLightBox = (listElementLightBox[c] as HTMLInputElement);

    thisSelectElementLightBox.addEventListener( 'click', (e) => {
        e.preventDefault();
        
        for( let d = 0; d < listElementLightBox.length; d++ ){
            let  AllSelectElementLightBox = (selectElementLightBox[d] as HTMLInputElement);
            let AllContainerLightBox = (listElementLightBox[d] as HTMLInputElement);

            AllSelectElementLightBox.classList.remove( 'active' );
            AllContainerLightBox.classList.remove( 'active' );
        }

        thisSelectElementLightBox.classList.add( 'active' );
        thisContainerLightBox.classList.add( 'active' ); 
            


        
    } );

    }
}


lightboxselection();