function printString(string){
  if (string.length > 1) {
    console.log(string[0])
    printString(string.substring(1,string.length))
  } else {
    console.log(string[0])
  }
}
