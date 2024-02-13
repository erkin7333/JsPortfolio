window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.offer__slide'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesFielsd = document.querySelector('.offer__slider-inner'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        width = getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;


    slidesFielsd.style.width = 100 * slides.length + '%';
    slidesFielsd.style.display = 'flex';
    slidesWrapper.style.overflow = 'hidden';
    slidesFielsd.style.transition = 'all 1s, ease';

    slides.forEach(slide => {
        slide.style.width = width
    })

    next.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2)
        }
        slidesFielsd.style.transform = `translateX(-${offset}px)`
    })

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = (+width.slice(0, width.length - 2) * (slides.length - 1))
        } else {
            offset -= +width.slice(0, width.length - 2)
        }
        slidesFielsd.style.transform = `translateX(-${offset}px)`
    })
})