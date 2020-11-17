//Conexión con el json con un fetch

const serverUrl = 'http://127.0.0.1:5500/';
const itemsPath = 'mock/items.json';
const imagesPath = 'img/';

window.onload = getData();

const items = document.querySelector('.items');

function getData() {
    fetch(`${serverUrl}${itemsPath}`)
        .then((res) => res.json())
        .then((data) => printData(data));
}

//Se pintan los artículos de forma dinámica

function printData(data) {
    const itemContainer = document.createElement('div')
    itemContainer.className = 'row';

    data.forEach(item => {
        itemContainer.innerHTML += createDomElemnt(item)
        items.append(itemContainer)
    });
}

function createDomElemnt(item) {
    const itemHtml = ` 
    <div class="col-12 col-md-6">
        <div class="item shadow mb-4 card">
            <h3 class="item-title">${item.title}</h3>
            <img class="item-image col-md-10 mx-auto d-block" src=${serverUrl}${imagesPath}${item.image}>

            <div class="item-details p-4">
                <h4 class="item-price">$${item.price}</h4>
                <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
            </div>
        </div>
    </div>`
    return itemHtml;
}