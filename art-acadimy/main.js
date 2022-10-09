// function blackjack(array) {
//   let arrayIndex = 0;
//   function dealer(num1, num2) {
//     let numOfInvovations = 0;
//     let playerVal;

//     let total = array[arrayIndex] + num1 + num2;

//     function player() {
//       numOfInvovations++;
//       if (numOfInvovations === 1) {
//         return num1 + num2;
//       } else if (numOfInvovations === 2) {
//         if (total <= 21) {
//           return total;
//         } else {
//           playerVal = "bust";
//           return playerVal;
//         }
//       } else if (playerVal === "bust") {
//         return "you are done!";
//       } else if (numOfInvovations > 2) {
//         arrayIndex++;
//         // console.log("three or more: "+ numOfInvovations + " "+ "index: "+ arrayIndex + " total: "+ total)
//         total = total + array[arrayIndex];
//         if (total <= 21) {
//           return total;
//         } else {
//           playerVal = "bust";
//           return playerVal;
//         }
//       }
//     }
//     return player;
//   }
//   return dealer;
// }

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([
//   2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
// ]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!

/////////////

//
// function delayCounter(target, wait) {
//     let counter = 1
//    return () => {
//      if(counter < target){
//        console.log('sssss')
//       // const myInterval = setInterval(() => console.log(counter++ ) ,wait)
//         }
//    }
//    }setTimeout

//    //UNCOMMENT THESE TO TEST YOUR WORK!
//    const countLogger = delayCounter(3, 1000)
//    countLogger();
//    After 1 second, log 1
//    After 2 seconds, log 2
//    After 3 seconds, log 3

// function promised (val) {
//   const myPromies = new Promise((resolve) => {
//         setTimeout(()=> resolve(val), 2000)
//   })

//   return myPromies
//   }

//   //UNCOMMENT THESE TO TEST YOUR WORK!
//   const createPromise = promised('wait for it...');
//   createPromise.then((val) => console.log(val));
//   //will log "wait for it..." to the console after 2 seconds

// class SecondClock {
//   constructor(cb) {
//     this.cb = cb;
// this.myIntern
//   }

// inter (){
//  return 
// }

//   start() {
//     this.myIntern =  setInterval(() => { this.cb("tic");}, 1000);

//   }

//   reset() {
//     clearInterval(this.myIntern)
//   }
// }
// //UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => {
//   console.log(val);
// });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//   clock.reset();
//   console.log("Stopped Clock after 6 seconds.");
// }, 6000);

// function debounce(callback, Interval) {

//   let timeOut;
 
//   return function (...args) {
// //    console.log("prev ID : ",timeOut)
//     if (timeOut) {clearTimeout(timeOut)} 
   
//       timeOut = setTimeout(() => {
//         callback(...args);
//       }  , Interval)
//   }
// }




// // UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'Hi'  }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function () { console.log(giveHiSometimes() ); }, 2000); // -> undefined
// setTimeout(function () { console.log(giveHiSometimes() ); }, 4000); // -> undefined
// setTimeout(function () { console.log(giveHiSometimes() ); }, 8000); // -> 'hi'