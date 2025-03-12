import items from "./items.js";
import { addItem, getURI, updateLinks } from "./global.js";

const data = getURI('v');
updateLinks(data);

const search = document.getElementById('search');

search.addEventListener('input',function(){
    update(search.value);
})

function update(value){
    document.getElementById('item-container').innerHTML = '';
    for(let i = 0; i < items.length; i++){
        if(items[i].name.includes(value.toLowerCase())){
            addItem(items[i]);
        }
    }
}

for(let i = 0; i < items.length; i++){
    addItem(items[i]);
}