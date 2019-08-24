function printString(string){
  if (string.length > 1) {
    return string[0] + printString(string[1])
  } else {
    return string[0]
  }
}
