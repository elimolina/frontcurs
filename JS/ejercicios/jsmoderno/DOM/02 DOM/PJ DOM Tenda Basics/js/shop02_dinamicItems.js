function addToCart(id) {
    alert("add to cart")
}


function removeFromCart(id) {
    alert("remove to cart")
}

// de manera dinámica

document.querySelectorAll(".cardProduct").forEach(function (element) {
    element.addEventListener('click', function (e) {
        var dataID = element.getAttribute('data-id');
        alert(dataID);
        if (e.target.classList.contains('cardAdd')) {
            addToCart(dataID);
        }
        if (e.target.classList.contains('cardRemove')) {
            removeFromCart(dataID);
        }
    })
});