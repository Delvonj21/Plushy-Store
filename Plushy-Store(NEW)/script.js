let buyCount = 0;
let addCart = document.querySelector("#cart");

function callAlert(){
alert("Contact us at 555-5555");
} 

function buy(){
buyCount++;
addCart.innerText = buyCount;
}

function valueChange() {
let change = document.getElementById("sort-items").value;
document.getElementById("text").innerText = change;
}


