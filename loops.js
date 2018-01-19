function forLoop (array){
 var newArray = [];
 for (let i = 0; i < array; i++){
  if (i === 1){
    newArray.push("I am 1 strange loop.")
  } else {
    newArray.push("I am " + i + " strange loops.")
  }
 }
 return newArray; 
}

forLoop(25)