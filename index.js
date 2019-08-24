function printString(string){
  if (string.length > 0) {
    console.log(string[0])
    printString(string[1])
  } else {
    return true
  }
}
