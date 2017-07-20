var cart = new Array();
var itemName = new Array();
var itemPrice = new Array();
var cartlist;
cart[0] = itemName;
cart[1] = itemPrice;


function addtocart(name, price) {
    cart[0].push(name);
    cart[1].push(price);
    listCart();
    totalCart();
}

function listCart() {
    cartlist += "<ul> <li>" + cart[0].pop() + "<li>" + cart[1].pop();
    totalCart();
}

function totalCart(){
    document.getElementById("cart").innerHTML = cartlist;
}
