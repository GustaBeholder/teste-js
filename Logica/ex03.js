const array = [3, 5, 2, 4, 1, 6, 2, 3, 4, 1];

function SumEvenNumbersOnArray(array){

    let result = array.filter(i => !(i % 2)).reduce((a, b) => a + b)

    return result
}


console.log("---Resultado esperado 18---")
console.log(SumEvenNumbersOnArray(array))