function printString(string){
  if (string.length > 1) {
    console.log(string[0])
    return string[0] + printString(string[1])
  } else {
    console.log(string[0])
    return string[0]
  }
}
