function reverseString(string){
  if (string.length > 1) {
     return reverseString(string.substring(0,string.length-1)) + string[string.length-1]
  } else {
    return string[0]
  }
}
