const products = [
    {id: 1, title: 'Notebook', price: 1000, oldPrice: 1200, category: 'Notebooks', needPriceSuf: 1},
    {id: 2, title: 'Mouse', price: 15, oldPrice: 20, category: 'Manipulators', needPriceSuf: 1},
    {id: 3, title: 'Keyboard', price: 50, category: 'Keyboards', needPriceSuf: 1},
    {id: 4, title: 'Gamepad', price: 45, category: 'Manipulators', needPriceSuf: 1},
];

const renderProduct = (id, title, price, oldPrice, img='./img/imgnotfound.png', category, needPriceSuf) => {
    let currency = '€';
    let discount = 0;
    let priceSuffix = 0;
    if(needPriceSuf){
        priceSuffix = 'inkl. 19% MwSt.';
    }
    if(oldPrice&&price){
        discount = Math.floor((oldPrice - price)*100/oldPrice);
    }
    return `<div class='product col-1'>
            <div class='product__wrapper'>
                <a href='/' class='product__link'>
                    <div class='product__img-wrapper'>
                        <img src='${img}' alt='${title}'>
                         ${(discount > 0 ? `<div class="discount">${discount}%</div>` : '')}
                    </div>
                </a>
                <a href='/' class='product__category'>${category}</a>
                <a href='' class='product__title'>
                    <h3>${title}</h3>
                </a>
                <div class='product__prices'>
                    <span class='price'>${currency}${price}</span>
                    ${((oldPrice) ? `<span class='old-price'>${currency}${oldPrice}</span>` : '')}
                    ${((priceSuffix) ? `<div class=\'price-suffix\'>${priceSuffix}</div>` : '')}                    
                </div>
                <button class='addToCart primary-btn' data-productId='${id}'>В корзину</button>
            </div>
        </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((good) => {
        console.dir(good);
        return renderProduct(good.id, good.title, good.price, good.oldPrice, good.img, good.category, good.needPriceSuf);
    });
    //логически правильный, имхо, способ избавиться от запятых - выводить каждый товар в цикле
    //innerHTML тут не подоойдёт, потому что будет всё время перезаписывать содержимое, а insertAdjacentHTML в самый раз :3
    const productsWrap = document.querySelector('.products-list');
    productList.forEach(el => {
        productsWrap.insertAdjacentHTML('beforeend', el);
    });
    //простой способ - вывести всё с помощью метода join.
    //document.querySelector('.products-list').innerHTML = productList.join('');
};

renderProducts(products);