const books = [
    {
        title: "Livro A",
        autor: "Autor A",
        ano: "2023"
    },
    {
        title: "Livro B",
        autor: "Autor B",
        ano: "1976"
    },
    {
        title: "Livro C",
        autor: "Autor C",
        ano: "2014"
    }
]

function findBookByTitle(bookArray,title){
    let result = bookArray.find(book => book.title === title)

    if(result != undefined) return result

    return null
}

const titleExempleFailure = "Livro D"

console.log("-----Exemplo Falha-----")
console.log(findBookByTitle(books, titleExempleFailure))

const titleExempleSuccess = "Livro B"

console.log("-----Exemplo Sucesso-----")
console.log(findBookByTitle(books, titleExempleSuccess))