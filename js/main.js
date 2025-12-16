const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelectorAll('#navMobile .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor jump
        const targetId = this.getAttribute('href').slice(1); // Remove #
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
            // Scroll smoothly 100px above the target
            window.scrollTo({
                top: targetEl.offsetTop - 100,
                behavior: 'smooth'
            });
        }

        // Close the menu
        menuToggle.checked = false;
    });
});

const swiperDienstleistungen = new Swiper(".swiper-dienstleistungen", {
    slidesPerView: 'auto', // default (mobile)
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
        // Makes the Scrollbar Draggable
        draggable: true,
        // Snaps slider position to slides when you release Scrollbar
        snapOnRelease: true,
        // Size (Length) of Scrollbar Draggable Element in px
        dragSize: 'auto',
    },
    slidesOffsetAfter: 40,
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

const swiperProjekte = new Swiper(".swiper-projekte", {
    slidesPerView: 'auto', // default (mobile)
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        // Makes the Scrollbar Draggable
        draggable: true,
        // Snaps slider position to slides when you release Scrollbar
        snapOnRelease: false,
        // Size (Length) of Scrollbar Draggable Element in px
        dragSize: 'auto',
    },
    slidesOffsetAfter: 40,
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

const swiperTeam = new Swiper(".swiper-team", {
    slidesPerView: 'auto', // default (mobile)
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
        // Makes the Scrollbar Draggable
        draggable: true,
        // Snaps slider position to slides when you release Scrollbar
        snapOnRelease: true,
        // Size (Length) of Scrollbar Draggable Element in px
        dragSize: 'auto',
    },

    // breakpoints: {
    //     0: {
    //         slidesOffsetAfter: 40,
    //     },
    // },
    slidesOffsetAfter: 40,
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

(function(){
    const track = document.querySelector('#loop .track');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    // duplicate items so the loop has something to wrap into
    track.innerHTML += track.innerHTML;

    track.addEventListener('touchstart', () => window._marqueeTween?.pause());
    track.addEventListener('touchend', () => window._marqueeTween?.play());

    let speed = 120; // px per second

    function makeAnimation(){
        if (window._marqueeTween) window._marqueeTween.kill();

        const singleWidth = track.scrollWidth / 2 + 20; // one full set of items + the grid gap at 1rem (20px)

        window._marqueeTween = gsap.to(track, {
            x: `-=${singleWidth}`,                // move continuously to the left
            duration: singleWidth / speed,
            ease: "none",
            repeat: -1,
            modifiers: {
                // wrap the x value so it never “snaps” back
                x: gsap.utils.unitize(x => (parseFloat(x) % singleWidth))
            }
        });
    }

    // rebuild on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(makeAnimation, 150);
    });

    makeAnimation();

    window.addEventListener('orientationchange', () => {
        makeAnimation();
    });

    // pause animation if tab is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) window._marqueeTween?.pause();
        else window._marqueeTween?.play();
    });
})();


gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add("(min-width: 768px)", () => {
    // GSAP code for screens >= 768px

    gsap.to(".a", {
        yPercent: 40,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#parallax-a",
            start: "top center",
            end: "bottom",
            scrub: true
        }
    });

    gsap.to(".b", {
        y: -100,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#parallax-a",
            start: "top+=800 center",
            end: "bottom+=600",
            scrub: true

        }
    });

    gsap.to(".c", {
        y: -150,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#parallax-a",
            start: "top+=400 center",
            end: "bottom+=200",
            scrub: true
        }
    });

    return () => {
        // optional cleanup when leaving this media query
        ScrollTrigger.getAll().forEach(st => st.kill());
    };
});



