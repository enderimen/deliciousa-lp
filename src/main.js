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
    const header = document.querySelector("#header");

    const THRESHOLD_SCROLL_VALUE = 100;

    window.onscroll = () => {
        scrollToTop();
    }

    const scrollToTop = () => {
        const currentScrollPosition = document.documentElement.scrollTop;

        if(backToTopBtn && currentScrollPosition > THRESHOLD_SCROLL_VALUE) {
            backToTopBtn.classList.add("-show");
            header.classList.add("-fixed");
        } else {
            backToTopBtn.classList.remove("-show");
            header.classList.remove("-fixed");
        }
    }

    backToTopBtn.addEventListener('click',() => {
        document.documentElement.scrollTop = 0;
    });


    // Navigation Active Menu - Event Delegation

    const navMenu = document.querySelector(".m-navigationList");
    const navMenuItemList = document.querySelectorAll(".m-navigationItem a");

    const setActive = (menuItem) => {

        if(!isActive(menuItem)) {

            navMenuItemList.forEach((menuItem) => {
                menuItem.classList.remove("-active");
            });

            menuItem.classList.add("-active");
        }
    }

    const isActive = (menuItem) => {
        return menuItem.classList.contains("-active");
    }

    navMenu.addEventListener("click", (event) => {
        setActive(event.target);
    });



};