function verifyChangesOnObjects() {
    let eternalLoop = 0
    while (eternalLoop < 1) {
        listCart()
    }
}

// protitipo da função pesquisar.
const products = [
    {
        id: 0,
        nome: 'Bolo fofo'
    }, {
        id: 1,
        nome: 'Doce de chocolate'
    }, {
        id: 2,
        nome: 'Bolo de cenoura'
    }
]
let productsOnCart = []

function listProducts(value) {
    if (value == undefined || value == "") {
        return products;
    } else if (value != undefined && value != "") {
        let resultados = products.filter(product => product.nome.toLowerCase().includes(value.toLowerCase()))
        if (resultados.length == 0) {
            console.log("Nao houve retorno")
        } else if (resultados.length > 0) {
            console.log(`Houve ${resultados.length} retorno(s)`)
        }
    }
}



function unlistProducts() {
    document.querySelector('main').innerHTML = '<center><h1>Produto(s) não encontrados!</h1><p>Tente pesquisar por algo diferente</p></center>';
}
// Prototipo da função de Carrinho
function addToCard(id) {
    productsOnCart.push(id)
}
function removeFromCard(id) {
    productsOnCart.splice(productsOnCart.indexOf(id), 1)
}

function listCart() {
    if (productsOnCart.length == 0) {
        console.log('carrinho vazio')
    } else if (productsOnCart.length > 0) {
        console.log(`${productsOnCart.length} produto(s) no carrinho`)
    }
}

addToCard.push(1)
addToCard.push(0)