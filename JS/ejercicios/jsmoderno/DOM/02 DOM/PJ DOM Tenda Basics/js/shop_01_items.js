
function addToCart(id) {
   alert("add to cart")
}


function removeFromCart(id) {
    alert("remove to cart")
}


// una por una


let card1= document.getElementById("card1");
var cardId1 = card1.getAttribute("data-id");

card1.addEventListener("click" , e=> {
    if (e.target.classList.contains("cardAdd")) {
        alert("afegim: " + cardId1);
        addToCart(cardId1);
    }
    if(e.target.classList.contains("cardRemove")){
        removeFromCart(cardId1);
    }
});

let card2= document.getElementById("card2");
var cardId2 = card2.getAttribute("data-id");

card2.addEventListener("click" , e => {
    if (e.target.classList.contains("cardAdd")) {
        alert("afegim:" + cardId2);
        addToCart(cardId2);
    }
    if (e.target.classList.contains("cardRemove")){
        removeFromCart(cardId2);
    }
});

let card3= document.getElementById("card3");
var cardId3 = card3.getAttribute("data-id");

card3.addEventListener("click" , e => {
    if (e.target.classList.contains("cardAdd")) {
        alert("afegim: " + cardId3);
        addToCart(cardId3);
    }
    if (e.target.classList.contains("cardRemove")){
        removeFromCart(cardId3);
    }
});

// de manera dinámica

document.querySelectorAll(".cardProduct").forEach(function (element){
    element.addEventListener(`click`), function (e) {
        var dataID = element.getAttribute(`data-id`);
        alert(dataID);
        if (e.target.classList.contains(`cardAdd`)) {
            addToCart(dataID);
        }
        if (e.target.classList.contains(`cardRemove`)){
            removeFromCart(dataID);
        }
       
    });
});


