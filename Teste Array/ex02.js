const products = [
    {
        name: "Produto A",
        price: 4.55,
        storage: 3
    },
    {
        name: "Produto B",
        price: 14.00,
        storage: 10
    },
    {
        name: "Produto C",
        price: 76.99,
        storage: 6
    },
]



function returnAllProductsAbovePriceTreshold(productList, price){
    let result = productList.filter((product) => product.price > price)

    return result
}


const priceA = 3.00

const priceB = 15.00

const priceC = 77.00


console.log("---Caso 1 todos os produto---")
console.log(returnAllProductsAbovePriceTreshold(products, priceA))

console.log("---Caso 2 um produto---")
console.log(returnAllProductsAbovePriceTreshold(products, priceB))

console.log("---Caso 3 nenhum produto---")
console.log(returnAllProductsAbovePriceTreshold(products, priceC))