
// function objFilter(obj, callback) {
//     let newObj = {}
//     for (const key in obj) {
//         if (callback(key) === obj[key]) {
//            newObj[key] = obj[key]
//         }
//     }
//     return newObj
// }

function rating(arrOfFuncs, value) {
    let numOfTrue = 0
    for (let i = 0; i < arrOfFuncs.length; i++) {
        if(arrOfFuncs[i](value)){
            numOfTrue++
        }
    }

    const percentage  = numOfTrue / arrOfFuncs.length * 100
    return percentage
}

/*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75