
const up = () => {

    let btnUpScroll: HTMLElement | null = document.getElementById('btnup') as HTMLElement;

    btnUpScroll.addEventListener('click', () => {

        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 8);

    });
}


up();
