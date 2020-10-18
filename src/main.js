export default () => {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2000,
        },
        loop: true
    });

    // Back To Top Btn

    const backToTopBtn = document.querySelector("#backToTopBtn");
    const THRESHOLD_SCROLL_VALUE = 100;
    let currentScrollPosition;

    window.onscroll = () => {
        scrollToTop();
    }

    const scrollToTop = () => {
        currentScrollPosition = document.documentElement.scrollTop;

        if(backToTopBtn && currentScrollPosition > THRESHOLD_SCROLL_VALUE) {
            backToTopBtn.classList.add("-show");
        } else {
            backToTopBtn.classList.remove("-show");
        }
    }

    backToTopBtn.addEventListener('click',() => {
        currentScrollPosition = 0;
    });
};