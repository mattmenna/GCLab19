var cart = new Array();
var itemName = new Array();
var itemPrice = new Array();
var cartlist;
var grandTotal = 0;
var i;
cart[0] = itemName;
cart[1] = itemPrice;


function addtocart(name, price) {
    cart[0].push(name);
    cart[1].push(price);
    listCart();
    totalCart();
}

function listCart() {
    cartlist += "<li>" + cart[0] + "<li>" + cart[1];
    totalCart();
}

function totalCart(){
    document.getElementById("cart").innerHTML = cartlist + "</ul";
    grandTotal = 0 ;
    for(i=0;i<cart[1].length;i++){
       grandTotal += parseInt([1][i]);
    }
    document.getElementById("grandTotal").innerHTML = grandTotal;
}
