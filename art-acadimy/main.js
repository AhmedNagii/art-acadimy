





























// function blackjack(array) {



// function dealer (num1 , num2 ){
// let numOfInvovations = 0


// let player1Val ;

// function player1(){
//   numOfInvovations++
//   if(dealer === 'bust' ) return  'you are done!'
//   if(numOfInvovations === 1) return num1 + num2

// if(numOfInvovations === 2){
//   const total = array[0] + num1 + num2
//   if(total <= 21){
//     return total
//   }else{
//     player1Val = 'bust'
//     return player1Val
//   }
  
 
// }

// }



// return player1

// } 


// return dealer

// }

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

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


























// function makeHistory(limit) {
//  let historyOf =[];

//   return (word) => {
//         if(word !== "undo"){

//      historyOf.length < limit && historyOf.push(word) 
//       return word + " done"

//     }else if (word === "undo" && historyOf.length === 0){
    
//       return "nothing to undo"
      
//     }else{
     
//       let action = historyOf[0] + " undone"
//        historyOf.shift() 
//       return action
//     }
   
//   }
// }

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'










// function censor() {
   
//    let obj = {}
//    function someThing (string1 , string2) {
     

//      if(string1 && string2){
//       obj [ string1] = string2
         
//      }else{
//       for(const key in obj){
        
//       string1 =    string1.replace(key, obj[key]);
//       }
//        return string1
//      }
     
//    }
   
//  return someThing
//  }
 
//  /*** Uncomment these to check your work! ***/
//  const changeScene = censor();
//  changeScene('dogs', 'cats');
//  changeScene('quick', 'slow');
//  console.log(changeScene('The quick, brown fox jumps over the lazy dogs.'));
 // => should log 'The slow, brown fox jumps over the lazy cats.'