// const car = {
//     model: "Spark",
//     color: "Black"
// }
//
// console.log(car)
// console.log(JSON.stringify(car))



// =====PROMISE=====//

// let isMeetingOkay = false;
// const twoFriendsMeeting = new Promise(
//     function (resolve, reject) {
//         if (isMeetingOkay) {
//             const msg = "Nima gap Developer!!!!!!!"
//             resolve(msg)
//         }else {
//             const errorMsg = "Uzur kechirasiz~~~~~~~~"
//             reject(errorMsg)
//         }
//     }
// )
//
// twoFriendsMeeting
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Alooooo!"))


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))