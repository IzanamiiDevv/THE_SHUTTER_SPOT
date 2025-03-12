import items from "./items.js";
import { addToWishlist, getURI, updateLinks } from "./global.js";

let rawData = getURI('v');
updateLinks(rawData);
let data = JSON.parse(atob(rawData));

console.log(data);

function renderWishlist(data){
    for(let i = 0; i < items.length; i++){
        for(let j = 0; j < data.length; j++){
            if(items[i].name == data[j].name && data[j].wishlist != 0){
                addToWishlist(items[i],data[j].wishlist);
            }
        }
    }
}

function setGrandTotal(){
    let total = 0;
    document.querySelectorAll('.total').forEach(value => {
        total += value.innerHTML - 0;
    });

    document.getElementById('total-display').innerText = `₱${total}`;
}

function removeAllItem(){
    const remover = document.getElementById('remove-all');

    remover.addEventListener('click',()=>{
        document.getElementById('total-display').innerText = `₱${0}`;
        document.getElementById('item-container').innerHTML = "";
        for(let i = 0; i < data.length; i++){
            data[i].wishlist = 0;
        }
        updateLinks(btoa(JSON.stringify(data)));
    })
}

renderWishlist(data);
setGrandTotal();
removeAllItem();