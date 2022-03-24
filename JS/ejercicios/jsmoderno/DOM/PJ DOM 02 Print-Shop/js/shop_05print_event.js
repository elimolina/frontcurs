// Ara, anem a afegir els events en el codi maquetat
// Aprenentges:
//  Per reconeixer l'event, e.target.classList.contains('cardAdd'))
//  pq fem servir el e.stopPropagation()

const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    pintarCardsProducts();
});

cards.addEventListener('click', e => {   
    if (e.target.classList.contains('cardAdd')) {       
        addCarrito(e.target.id);
    }
    if (e.target.classList.contains('cardRemove')) {       
        removeFromCart(e.target.id);
    }
    e.stopPropagation()
});

// Pintar tots els productes
function pintarCardsProducts() {
    products.forEach(item => {     
        templateCard.querySelector('.cardAdd').setAttribute('id', item.id)
        templateCard.querySelector('.cardRemove').setAttribute('id', item.id)
        templateCard.querySelector('img').setAttribute('src', item.img);
        templateCard.querySelector('h5').textContent = item.name
        templateCard.querySelector('p').textContent = item.price
        templateCard.querySelector('h6').textContent = item.type
        const clone = templateCard.cloneNode(true)
        // se guarda en memoria, de momento no se printa
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}



function calculateTotal() {
    // Calculate total price of the cart either using the "cart" array
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price
    }
    console.log("Total:" + total);
    console.log("\n");
}


function applyPromotionsCart(id) {
    // Apply promotions to each item in the array "cart"
    /* Per a ser un bon e-commerce, ens falta implementar promocions, apartat importantíssim en qualsevol botiga.
    Per a això, el client ens ha transmès dos tipus de promocions que vol per a la seva e-commerce:    
    - Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.    
    - En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.            
    En aquest exercici has de completar la funció applyPromotionsCart(), la qual rep el array cart, modificant el camp subtotalWithDiscount en cas que es s'apliqui promoció. D'aquesta manera les promocions apareixeran per producte, no sols en els subtotales!
    */

    /* Si l'usuari compra 3 o més ampolles d'oli (id:1), el preu del producte descendeix a 10 euros. */
    if ((cart[id].quantity >= 3) && (cart[id].id == 1)) {
        cart[id].subtotalWithDiscount = cart[id].quantity * 10;
        console.log("ha comprat 3 o més ampolles d'oli. Preu total amb descompte:" + cart[id].subtotalWithDiscount);
        console.log("\n");
    }
    /* En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3. */
    if ((cart[id].quantity >= 10) && (cart[id].id == 3)) {
        cart[id].subtotalWithDiscount = cart[id].quantity * ((cart[id].price) * 2) / 3;
        console.log("ha comprat 10 o més mescles de pastis. Preu total amb descompte:" + cart[id].subtotalWithDiscount);
        console.log("\n");
    }
}


function addCarrito(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    console.table(cart);
    // El findIndex el fem servir pq ens torni l'id del objecte trobat. No ho he sabut fer amb el vanilla javascript 
    // Amb findIndex busquem totes les vegades que ho troba dins l'array
    let objIndex = cart.findIndex((obj => obj.id == products[id - 1].id));

    if (objIndex == -1) {
        //Si no està a la cart, l'afegim
        // no podem agafar la i, pq sinó se'ns desborda .. agafem l'ultim element.
        cart.push(products[id - 1]);
        cart[cart.length - 1].quantity = 1;
        cart[cart.length - 1].subtotal = products[id - 1].price;
        console.log("Afegit nou producte " + products[id - 1].name);
        alert("Afegit nou producte " + products[id - 1].name)
    } else {
        // Si està a la cart, actualitzem
        cart[objIndex].quantity = cart[objIndex].quantity + 1;
        cart[objIndex].subtotal = cart[objIndex].subtotal + cart[objIndex].price;
        console.log("Modificat producte de la llista " + cart[objIndex].name);
        alert("Modificat producte de la llista " + cart[objIndex].name)
    }

    calculateSubtotals();
    calculateTotal();
    if (objIndex != -1) applyPromotionsCart(objIndex);
}


function removeFromCart(id) {
    // Estic passant com a paràmtre el producte 1
    // Busquem si el producte està a la cart
    let objIndex = cart.findIndex((obj => obj.id == id));
    if (objIndex != -1) {
        cart.splice(objIndex, 1);
        console.log("Eliminat producte de la cart: " + products[id - 1].name);
        alert("Eliminat producte de la cart: " + products[id - 1].name)
    } else {
        alert("Aquest element no el tens al carret")
    }
}