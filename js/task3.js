class Hamburger {
    constructor(size, stuffing) {
    }

    addTopping(topping) {
    }

    removeTopping(topping) {
    }

    getToppings(topping) {
    }

    getSize() {
    }

    getStuffing() {
    }

    calculatePrice() {
    }

    calculateCalories() {
    }
}
/*
*
* Маленький (50 рублей, 20 калорий).
Большой (100 рублей, 40 калорий).
Гамбургер может быть с одним из нескольких видов начинок (обязательно):
С сыром (+10 рублей, +20 калорий).
С салатом (+20 рублей, +5 калорий).
С картофелем (+15 рублей, +10 калорий).
Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
*/
const goods = {
    'food' : {
        'hamb-small' : {
            id: 'hm-sm',
            price: 50,
            calories: 20
        },
        'hamb-big' : {
            id: 'hm-big',
            price: 100,
            calories: 40
        }
    },
    'toppings' : {
        'topping-cheeze' : {
            id: 'tp-1',
            price: 10,
            calories: 20
        },
        'topping-salad' : {
            id: 'tp-2',
            price: 20,
            calories: 5
        },
        'topping-cartoffel' : {
            id: 'tp-3',
            price: 15,
            calories: 10
        }
    },
    'stuffings' : {
        'stuffing-seasoning' : {
            id: 'st-1',
            price: 15,
            calories: 0
        },
        'stuffing-mayonnaise' : {
            id: 'st-2',
            price: 20,
            calories: 5
        }

    }
};

