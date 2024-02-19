window.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('#slider'),
        active = document.querySelector('#active'),
        line1 = document.querySelector('#line1'),
        line2 = document.querySelector('#line2'),
        line3 = document.querySelector('#line3'),
        line4 = document.querySelector('#line4'),
        container = document.querySelector('.container');

    console.log(line2)
    if (!slider || !active || !line2) {
        console.log("Slayder, faol element yoki line2 elementi topilmadi.");
        return;
    }

    line1.addEventListener('click', function () {
        slider.style.transform = "translateX(0)";
        active.style.top = '0px';
    });

    line2.addEventListener('click', function () {
        slider.style.transform = "translateX(-25%)";
        active.style.top = "80px";
    });

    line3.addEventListener('click', function () {
        slider.style.transform = "translateX(-50%)";
        active.style.top = '160px';
    });

    line4.addEventListener('click', function () {
        slider.style.transform = "translateX(-75%)";
        active.style.top = '240px';
    });
})

