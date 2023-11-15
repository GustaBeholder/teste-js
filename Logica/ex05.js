

function isPalindrome(string){
    let reverseString = string.split('').reverse().join('')

    if(string.toLowerCase() === reverseString.toLowerCase()) return true
    
    return false
}


const palindrome = 'radar'

const notPalindrome = 'avião'


if(isPalindrome(palindrome)){
    console.log("É palindromo")
}else{
    console.log("Não é palindromo")
}

if(isPalindrome(notPalindrome)){
    console.log("É palindromo")
}else{
    console.log("Não é palindromo")
}

