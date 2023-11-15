const array = [3, 5, 2, 4, 1, 6, 2, 3, 4, 1];

function removeDuplicatesFromArray(array) {
    
    let arrayWithoutDuplicates = []

    for(let i = 0; i < array.length; i++){
        if(!arrayWithoutDuplicates.includes(array[i])){
            arrayWithoutDuplicates.push(array[i])
        }
    }

    return arrayWithoutDuplicates
}

console.log("---Array sem duplicatas---")
console.log(removeDuplicatesFromArray(array))