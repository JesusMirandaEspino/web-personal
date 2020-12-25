class Menufixed {
    constructor(
        private  menufixed: HTMLElement | null = document.getElementById('menufixed') as HTMLElement,
        private  header: HTMLElement | null = document.getElementById('header') as HTMLElement,
        private btnup: HTMLElement | null = document.getElementById('btnup') as HTMLElement,
        private show: boolean = true
    ){
        
    }

    desplegar(){
        const listfixed:  HTMLElement | null = document.getElementById('listfixed') as HTMLElement;

        
        let bodyTop:   HTMLElement | null | number  = window.pageYOffset;
        let headerTop:    number | undefined  = this.header?.offsetHeight;



        if ( bodyTop >= headerTop ) {
                    this.menufixed.style.opacity = '1';
                    this.menufixed.style.top = '0px';
                    this.btnup.style.right='0px';
            }
            
        else {
                this.menufixed.style.opacity = '0';
                this.menufixed.style.top = '-200px';
                this.btnup.style.right='-80px';
                listfixed.style.display = 'none';
                listfixed.style.opacity = '0';
                this.show = true;
                
            }
    }


    showmenufixed(){
        const listfixed:  HTMLElement | null = document.getElementById('listfixed') as HTMLElement;
        const listfixedlement: NodeListOf<HTMLElement> = document.querySelectorAll('.menumovefixed'); 

            if( this.show === undefined ){ 
                this.show = true;
                listfixed.style.display = 'block';
                listfixed.style.opacity = '1';
                this.show = false;

            }else if ( this.show === false ) {
                    listfixed.style.display = 'none';
                    listfixed.style.opacity = '0';
                    this.show = true;   
                }

            else {
                listfixed.style.display = 'block';
                listfixed.style.opacity = '1';
                this.show = false;
            }

            for ( let d = 0; d < listfixedlement.length; d++ ) {
                
                let listfixedelementselect = (listfixedlement[d] as HTMLElement);

                listfixedelementselect.addEventListener( 'click', () => {
                    listfixed.style.display = 'none';
                    listfixed.style.opacity = '0';
                    this.show = true;   
                });

            }





        }

    
}



const menuFunction = new Menufixed;