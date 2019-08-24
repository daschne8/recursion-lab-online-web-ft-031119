function printString(string){
  if (string.length > 1) {
    console.log(string[0])
    printString(string.substring(1,string.length))
  } else {
    console.log(string[0])
  }
}

function reverseString(string){
  if (string.length > 1) {
    console.log(string[string.length-1])
    reverseString(string.substring(0,string.length-1))
  } else {
    console.log(string[0])
  }
}
