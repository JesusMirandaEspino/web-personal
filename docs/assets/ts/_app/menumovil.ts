class Menumovil {


    constructor( private menumovil: HTMLElement | null = document.getElementById('menumovil') as HTMLElement,
                private   header: HTMLElement | null | undefined = document.getElementById('header') as HTMLElement,
                private showlateral: boolean = true   ) {


    }


    showmenu() {
        const menulist: HTMLElement | null = document.getElementById('menulateral') as HTMLElement;
        let bodyTop = window.pageYOffset;
        let headerTop = this.header?.offsetHeight;

        if ( bodyTop >= headerTop ) {
            this.menumovil.style.top = '0';

        }else{
            this.menumovil.style.top = '-100px';
            menulist.style.right = '-400px';
        }
    }

    lateralmenu() {

    const menulist: HTMLElement | null = document.getElementById('menulateral') as HTMLElement;
    const menulistelementphone: NodeListOf<HTMLElement> = document.querySelectorAll('.movemenusmarthphone');

        if( this.showlateral === undefined ){
            this.showlateral = true;
            menulist.style.right = '0';

        }else  if ( this.showlateral === true  ) {
            this.showlateral = false;
            menulist.style.right = '-400px';
            
        }else{
            menulist.style.right = '0';
            this.showlateral = true;
        }


        for( let c = 0; c <  menulistelementphone.length; c++  ){
            let menulistphonehiden = (menulistelementphone[c] as HTMLElement);

            menulistphonehiden.addEventListener( 'click', () => {
                    this.showlateral = false;
                    menulist.style.right = '-400px';
            }  );
        }
        
    }


}






const menumovilshow = new Menumovil(); 