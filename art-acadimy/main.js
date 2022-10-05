

function addByX(x) {

   function addInputTox(input) {
      return input + x
   }

   return addInputTox
}

/*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

function once(func) {
   let counter = 0
   let outPut;

 const innerfank = (val) =>{
   if( counter === 0 ){
      outPut = func(val)
      counter ++
     
    
 }
 return outPut
 }
     
    return innerfank
 }

   // /*** Uncomment these to check your work! ***/
   const onceFunc = once(addByTwo);
   console.log(onceFunc(4));  // => should log 6
   console.log(onceFunc(10));  // => should log 6
   console.log(onceFunc(9001));  // => should log 6