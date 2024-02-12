window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector('.loader')
    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 200)
    }, 3000)
})




// setTimeout( function () {
//     alert("Salom")
// }, 1000)
//
//
// setInterval( function () {
//     alert("Salom  Erkin")
// }, 2000 )