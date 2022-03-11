//hay que añadir las formulas (carrito, etc)

// total de la compra

var total = 0;


// Exercici 0 : mostrar cartList


function ShowCartList() {
    //console.table(products);
    console.table(cartList);
}

function showPrices() {
    console.table(subtotal);
}

function ShowCart() {
    console.table(cart);
}


// Exercici 1: afegir producte a l'array de la cartlist


function buy(id) {
    // 1) opció 1 : id corresponde con la posicion del array
    //cartList.push(products[id - 1]);
    //console.log("element afegit");

    // opció 2 : buscar el id del objecte del producte amb l'id
    productBuy = products.find(function(element){
        if (element.id== id){
            return element;
        }
    })
    cartList.push(productBuy)
    console.table(cart); 


    // opció 3 simplificar con arrow funcions =>
    //cartList.push(products.find((element) => element.id == id))
}


// exercici 2 eliminar tots els productes de la CartList
function cleanCart() {

    //eliminar uno por uno los elementos
    
}

