var cart = new Array();


function addtocart(name, price){
    cart.push(price);
    updateCart();
}

function updateCart(){
    document.getElementById("cart").innerHTML = cart.pop();
}

