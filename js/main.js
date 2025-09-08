const swiper = new Swiper(".swiper", {
    slidesPerView: 1.2, // default (mobile)
    spaceBetween: 20,
    slidesOffsetAfter: (window.innerWidth - 72 * 20) / 2,
    breakpoints: {
        640: {
            slidesPerView: 2.2,
            slidesOffsetAfter: (window.innerWidth - 40 * 20) / 2, // example smaller container
        },
        1024: {
            slidesPerView: 3.5,
            slidesOffsetAfter: (window.innerWidth - 72 * 20) / 2,
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        // Makes the Scrollbar Draggable
        draggable: true,
        // Snaps slider position to slides when you release Scrollbar
        snapOnRelease: true,
        // Size (Length) of Scrollbar Draggable Element in px
        dragSize: 'auto',
    },

    navigation: {
        nextEl: '.swiper-button-next',
    },
});