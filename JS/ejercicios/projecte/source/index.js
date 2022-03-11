//hay que añadir las formulas (carrito, etc)

// total de la compra



// Exercici 0 : mostrar cartList


function ShowCartList() {
    //console.table(products);
    console.table(cartList);
}

ShowCartList();

function showPrices() {
    console.table(subtotal);
}

function ShowCart() {
    console.table(cartList);
}

ShowCart();


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
     


    // opció 3 simplificar con arrow funcions =>
    //cartList.push(products.find((element) => element.id == id))
}


// exercici 2 eliminar tots els productes de la CartList
function cleanCart() {

    


    console.log(cartList.length);

    cartList.splice(0, cartList.length)


    //Més eficient

    cartList.length = 0;

    cartList= [];
}




//eliminar uno por uno los elementos
    /*while (carList.length > 0) {
        cartList.pop();
    }*/


// crear un for loop en la array cartList
/* calcula el subtotal  dependiendo del tipo de compra*/

function subtotal (){
    for(var i=0; i < cartList.length; i++){
        switch(cartList[i].type){
            case "clothes":
                SubTotal.clothes.value += cartList[i].price;
                break;
            case "jewell":
                SubTotal.jewell.value += cartList[i].price;
                break;
            case "beauty":
                SubTotal.beauty.value += cartList[i].price;
                break;
            default:
                console.log("hi ha un error"); 
        }
    }
}


// eliminar
