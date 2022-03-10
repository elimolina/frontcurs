//hay que añadir las formulas (carrito, etc)

var removeCartItemButtons = document.getElementsByClassName(`btn-danger`)
console.log(removeCartItemButtons);
for (var i=0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener(`click`, function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

function updateCartToTotall() {
    var cartItemContainer = document.getElementsByClassName(`cart-items`)[0]
    var cartRows = cartItemContainer.getElementsByClassName(`cart-row`)
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
    }
}