import items from "./items.js";
import { addItem, getURI, updateLinks } from "./global.js";


const data = getURI('v');
updateLinks(data);

for(let i = 0; i < 3; i++){
    addItem(items[i]);
}