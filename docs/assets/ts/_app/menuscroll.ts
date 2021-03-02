
//menu fixed
const listmenufixed : NodeListOf<HTMLElement>  = document.querySelectorAll('.menumovefixed');

// menu principal
const listmenuprincipal : NodeListOf<HTMLElement>  = document.querySelectorAll('.movemenuprincipal');


//menu smartphone version movemenusmarthphone
const listmenusmathphone : NodeListOf<HTMLElement>  = document.querySelectorAll('.movemenusmarthphone');


// section on page
const sectionpage: NodeListOf<HTMLElement>  = document.querySelectorAll('.section-page');



const moveScroll = ( listmenu: NodeListOf<HTMLElement>,   ) => {

    for ( let i = 0; i < listmenu.length; i++ ) {

    // transform node elements in html elements    
    let listmenuselect =  (listmenu[i] as HTMLElement);
    let listsectionpage = (sectionpage[i] as HTMLElement);

    listsectionpage.style.transition = 'none';

        // click event for each element of menu list
        listmenuselect.addEventListener( 'click', (e) => {
            e.preventDefault();
            listsectionpage.style.opacity = '0';

            // element lick on offsettop
            let windowtopcroll = listsectionpage.offsetTop;


            setTimeout( (  ) => {
                listsectionpage.style.opacity = '1';
                //transition: all 0.5s ease;
                listsectionpage.style.transition = 'all 0.5s ease';
            }, 200 );

            listsectionpage.style.transition = 'none';

            // go to windows scroll to element select
            window.window.scrollTo( 0 ,  windowtopcroll - 20 );

            


        } );
    
    }
}

moveScroll( listmenufixed );
moveScroll( listmenuprincipal );
moveScroll( listmenusmathphone );


