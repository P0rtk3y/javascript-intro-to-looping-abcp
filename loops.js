function forLoop (array){
 for (var i =0; i < array; i++){
  if (i === 1){
    console.log("I am 1 strange loop");
  } else {
    console.log("I am " + i + " strange loops.");
  }
 }
}

forLoop(25)