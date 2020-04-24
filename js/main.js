class Cart {
  /*
  * Корзина - это по сути тот же список товаров с дополнительными методами,
  * так что для создания корзины я бы отнаследовала класс со списком товаров
  * (в таком случае его, наверное, нужно переименовать во что-то более общее?)
  *
  * Дополнительное поле: количество товаров
  *
  * Дополительные методы:
  *
  * - подсчёт суммы (checkSum)
  * - подсчёт общей суммы (с помощью checkSum) и количества единиц товаров
  * - поиск, не было ли такого элемента в списке
  * - добавление нового товара
  * - удаление товара
  * - перерендер после каждой операции?
  *
  * */
}

class CartItem{
  /*
  * Так же по сути это просто отрендеренный товар
  * с несколькими дополнительными свойствами и методами,
  * так что я отнаследовала бы его от класса ProductItem
  *
  * дополнительные свойства: количество каждого товара
  * дополнительные методы:
  * - подсчёт суммы каждого товара в строке (так же стоит использовать метод checkSum)
  *
  * */
}

/*
* Или, может, стоит сделать отдельный класс со статическими методами, типа либы
* Чтобы с помощью этих методов получить данные, получить шаблон, выплюнуть
* А, соответственно, классы с товарами и корзиной тогда уже между собой можно особо и не связывать?
*
* Рендер объекта или списка объектов можно потом будет так же использовать для категорий,
* для списка фильтров, для много чего ещё.
*
* Или это уже получается велосипед?
*
* */

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ]
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}
new ProductList();
// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => document.querySelector('.products')
//     .insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
//
// renderProducts(products);
