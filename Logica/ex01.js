

function isPrimeNumber(number){
    if(number < 2) return false

    for(let i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0) {
            return false;
          }
    }
    return true
}


const primeNumber = 97

if(isPrimeNumber(primeNumber)){
    console.log("É primo")
}else {
    console.log("Não é primo")
}