

function reverseStringOrderReverseMethod(string){
    return string.split('').reverse().join('')
}


function reverseStringOrderForLoop(string){
    let result = ''
    for(let i = string.length - 1; i >= 0; i --){
        result += string[i]
    }

    return result
}

const test = "Hello"


console.log(reverseStringOrderReverseMethod(test))

console.log(reverseStringOrderForLoop(test))
