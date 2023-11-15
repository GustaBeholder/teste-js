

const objectA = { a: 1, b: 2, c: 3, e: 7 };
const objectB = { b: 4, c: 5, d: 6, h: 8 };

const objectC = {name: "Gustavo", sameProprety: "BBBBBB"}
  
const objectD = {heigth: "183cm", sameProprety: "AAAAAA"}

function mergeObjects(firstObject, secondObject){
    let result = { ...firstObject}

    for (let key in secondObject) {
        result[key] = secondObject[key];
    }
  
    return result
}

console.log("--- Teste 1 ---")
const firstMergedObject = mergeObjects(objectA, objectB); 
console.log(firstMergedObject);

console.log("--- Teste 2 ---")
const secondMergedObject = mergeObjects(objectC, objectD); 
console.log(secondMergedObject);