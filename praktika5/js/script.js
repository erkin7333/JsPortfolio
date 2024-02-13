window.addEventListener('DOMContentLoaded', () => {
    class MenuCard{
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 12.469;
            this.changeToUSD()
        }
        changeToUSD() {
            this.price = this.price / this.transfer
        }
        render()  {
            const element = document.createElement('div')
            if (this.classes.length === 0) {
                this.classes = 'menu__item'
                element.classList.add(this.classes)
            } else {
                this.classes.forEach(className => {
                    return element.classList.add(className)
                })
            }
            element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Narxi:</div>
                        <div class="menu__item-total"><span>${this.price}</span> $</div>
                    </div>
                </div>
            `
            this.parent.append(element)
        }
    }

    new MenuCard(
        'img/tabs/audi.jpg',
        'audi',
        'Audi',
        'Volkswagen guruhi tarkibidagi nemis avtomobil ishlab chiqaruvchisi, Audi brendi ostida avtomobillar ishlab chiqarishga ixtisoslashgan. Bosh ofisi Ingolshtadtda (Germaniya) joylashgan.',
        150.000000,
        '.menu .container'
    ).render()
    new MenuCard(
        'img/tabs/merc.jpg',
        'merc',
        'Mercedes',
        "Nemis konsernining bir qismi bo'lgan premium avtomobillar, yuk mashinalari, avtobuslar va boshqa transport vositalarini ishlab chiqaruvchi nemis. Dunyodagi eng taniqli avtomobil brendlaridan biri",
        300000000,
        '.menu .container'
    ).render()
    new MenuCard(
        'img/tabs/bmw.jpg',
        'bmw',
        'Bmw',
        "Nemis avtomobillar, mototsikllar, dvigatellar va velosipedlar ishlab chiqaruvchisi. 2006 yildan 2015 yilgacha kompaniya raisi Norbert Raythofer, 2015 yil may oyidan Xarald Kryuger, 2019 yil 18 iyuldan esa Oliver Zipse bo'lgan.",
        3,
        '.menu .container'
    ).render()
})