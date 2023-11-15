const array = [3, 5, 2, 4, 1, 6, 2, 3, 4, 1];


function countFrequency(array) {

  let frequency = {};

  for (let i = 0; i < array.length; i++) {

    let value = array[i];

    if (frequency[value]) {
      frequency[value]++;
    }else {

      frequency[value] = 1;
    }
  }
    return frequency;
}
  

const result = countFrequency(array);

console.log("---Para o Array [3, 5, 2, 4, 1, 6, 2, 3, 4, 1]--- ")  
console.log(result);