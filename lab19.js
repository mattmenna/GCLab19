var cart = new Array();
var itemName = new Array();
var itemPrice = new Array();
var cartlist;
var grandTotal;
var i;
cart[0] = itemName;
cart[1] = itemPrice;


function addtocart(name, price) {
    var cartString;
    cart[0].push(name);
    cart[1].push(price);
    document.getElementById("cart").innerHTML = cart[0] + " " + "<br>";

    for(i=0; i<cart[1].length; i++) {
        cartString += parseInt([1][i]);
    }
    document.getElementById("grandTotal").innerHTML = cartString;
    //document.getElementById("cart").innerHTML = "<ul>"+cartlist + "</ul>";

    //totalCart();

}

function listCart() {

}

function totalCart() {
    grandTotal = 0;
    for (i = 0; i < cart[1].length; i++) {
        grandTotal += cart[1][i];
    }
    document.getElementById("grandTotal").innerHTML = cart[1][i];
}
