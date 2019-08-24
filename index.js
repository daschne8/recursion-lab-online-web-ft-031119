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
     return string[string.length-1] + reverseString(string.substring(0,string.length-1))
  } else {
    return string[0]
  }
}

function isPalindrome(string){
  if(string.length <= 2){
    return string[0] === string[string.length-1]
  }else if (string[0] === string[string.length-1]) {
    return isPalindrome(string.substring(1,string.length-1))
  }else{
    return false
  }
}
