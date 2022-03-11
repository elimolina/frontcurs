var total = 0;


var cart = [];
var cartList = []; 
var cleancart= [];

var products = [{
        id: 1,
        name: "blue ring",
        price: 10.9,
        type: `jewell`,
    },

    {
        id: 2,
        name: "purple ring",
        price: 11,
        type: `jewell`,
    },
    {
        id: 3,
        name: "collar red",
        price: 20,
        type: `jewell`,
    },
    {
        id: 4,
        name: "fular verde",
        price: 32,
        type: `clothes`
    },
    {
        id: 5,
        name: "fular naranja",
        price: 34,
        type: `clothes`,
    },
    {
        id: 6,
        name: "red lipstick",
        price: 15,
        type: `beauty`,
    },
    {
        id: 7,
        name: "garne lipstick",
        price: 15,
        type: `beauty`,
    },
    {
        id: 8,
        name: "black mascara",
        price: 18,
        type: `beauty`,
    },
    {
        id: 9,
        name: "blue mascara",
        price: 20,
        type: `beauty`,
    },
]

var SubTotal = {
    beauty:{
        value:0,
        discount: 0
    },
    jewell: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount:0 
    },
}