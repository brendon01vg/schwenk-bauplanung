const swiperDienstleistungen = new Swiper(".swiper-dienstleistungen", {
    slidesPerView: 'auto', // default (mobile)
    spaceBetween: 20,
    slidesOffsetAfter: (window.innerWidth - 72 * 20) / 2,
    breakpoints: {
        640: {
            slidesOffsetAfter: (window.innerWidth - 40 * 20) / 2, // example smaller container
        },
        1024: {
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

const swiperProjekte = new Swiper(".swiper-projekte", {
    slidesPerView: 'auto', // default (mobile)
    spaceBetween: 20,
    slidesOffsetAfter: (window.innerWidth - 72 * 20) / 2,
    breakpoints: {
        640: {
            slidesOffsetAfter: (window.innerWidth - 40 * 20) / 2, // example smaller container
        },
        1024: {
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

const swiperTeam = new Swiper(".swiper-team", {
    slidesPerView: 'auto', // default (mobile)
    spaceBetween: 20,
    slidesOffsetAfter: (window.innerWidth - 72 * 20) / 2,
    breakpoints: {
        640: {
            slidesOffsetAfter: (window.innerWidth - 40 * 20) / 2, // example smaller container
        },
        1024: {
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

const swiperImpressions = new Swiper(".swiper-impressions", {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: false,
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
