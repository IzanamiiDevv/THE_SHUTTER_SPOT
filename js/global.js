function addItem({img, name, price}) {
    const temp = `
        <div class="box">
            <a href="" class="fas fa-eye"></a>
            <div class="price">₱${price}</div>
            <img src="../${img}" class="image">
            <div class="name">${name}</div>
            <input type="number" name="product_quantity" value="1" min="0" class="qty">
            <input type="submit" value="add to wishlist" name="add_to_wishlist" class="option-btn add-to-wishlist">
            <input type="submit" value="add to cart" name="add_to_cart" class="btn add-to-cart">
        </div>
    `;

    const itemContainer = document.getElementById('item-container');
    itemContainer.innerHTML += temp;

    const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToWishlistButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const quantity = button.parentElement.querySelector('.qty').value - 0;
            const name = button.parentElement.querySelector('.name').innerHTML;
            updateQuantity(name, 'wishlist', quantity);
        });
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantity = button.parentElement.querySelector('.qty').value - 0;
            const name = button.parentElement.querySelector('.name').innerHTML;
            updateQuantity(name, 'cart', quantity);
        });
    });
}

function addToWishlist({img, name, price}, count){
    const temp = `
    <div class="box">
        <div class="fas fa-times remove-btn"></div>
        <a class="fas fa-eye"></a>
        <img src="../${img}" class="image">
        <div class="name"><span class="item-name">${name}</span> x <span class="quantity">${count}</span></div>
        <div class="price">₱<span class="total">${getTotal(price, count)}</span></div>
        <input type="submit" value="add to cart" name="add_to_cart" class="btn"> 
    </div>
    `;

    const itemContainer = document.getElementById('item-container');
    itemContainer.innerHTML += temp;

    const remover = document.querySelectorAll(".remove-btn");
    const addToCart = document.querySelectorAll(".btn");

    remover.forEach(element =>{
        element.addEventListener('click',()=>{
            const itemName = element.parentElement.querySelector('.item-name').innerText;
            updateQuantity(itemName, 'wishlist', 0);
            element.parentElement.remove();
        });
    });

    addToCart.forEach(element => {
        element.addEventListener('click',()=>{
            const itemName = element.parentElement.querySelector('.item-name').innerText;
            const quantity = element.parentElement.querySelector('.quantity').innerHTML;
            updateQuantity(itemName, 'wishlist', 0);
            updateQuantity(itemName, 'cart', quantity);
            element.parentElement.remove();
        });
    })
}

function addToCart({img, name, price}, count){
    const temp = `
    <div class="box">
        <div class="fas fa-times remove-btn"></div>
        <a class="fas fa-eye"></a>
        <img src="../${img}" class="image">
        <div class="name"><span class="item-name">${name}</span> x ${count}</div>
        <div class="price">₱<span class="total">${getTotal(price, count)}</span></div>
    </div>
    `;

    const itemContainer = document.getElementById('item-container');
    itemContainer.innerHTML += temp;

    const remover = document.querySelectorAll(".remove-btn");

    remover.forEach((element)=>{
        element.addEventListener('click',()=>{
            const itemName = element.parentElement.querySelector('.item-name').innerText;
            updateQuantity(itemName, 'cart', 0);
            element.parentElement.remove();
        });
    });
}


function getTotal(price, count){
    return price * count;
}

let data = [];

try {
    data = JSON.parse(atob(getURI('v')))
} catch (error) {
    data = [];
}

function updateQuantity(itemName, type, quantity) {
    const existingItem = data.find(item => item.name === itemName);

    if (existingItem) {
        if(type == 'cart'){
            existingItem.cart = quantity;
        }else {
            existingItem.wishlist = quantity;
        }
    } else {
        if(type == 'cart'){
            data.push({
                name: itemName,
                wishlist: 0,
                cart: quantity
            });
        }else {
            data.push({
                name: itemName,
                wishlist: quantity,
                cart: 0
            });
        }
    }

    const hashed = btoa(JSON.stringify(data));
    console.log(hashed)
    updateLinks(hashed);
}

function updateLinks(data){
    const pageUrls = [
        'home.html',
        'about.html',
        'wishlist.html',
        'cart.html',
        'shop.html',
        'search_page.html'
    ];

    pageUrls.forEach(url => {
        const links = document.querySelectorAll(`a[href*="${url}"]`);
        links.forEach(link => {
            let clear = "";

            const index = link.href.indexOf('?');
            if (index !== -1) {
                clear = link.href.substring(0, index);
            } else {
                clear = link.href;
            }

            const query = `${clear}?v=${data}`;
            link.setAttribute('href', query);
        });
    });
}



function getURI(name='v', url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export { addToCart, addToWishlist, addItem, getURI, updateLinks };