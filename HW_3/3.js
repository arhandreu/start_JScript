
class Good {
    constructor (id, name, description, sizes, price, available) {
        this.id = id;            
        this.name = name;          
        this.description = description;  
        this.sizes = sizes;        
        this.price = price;        
        this.available = available;
    }

    setAvailable (av) {
        this.available = av;
    }
}

class GoodList {   
    
    constructor () {
        this._goods = []
        this.filter = /^[a-zA-Z]+$/;
        this.sortPrice = true;
        this.sortDir = true;
    }

    get list() {
        if (this.sortPrice && this.sortDir) {
            return this._goods.filter(good => this.filter.test(good.name)).sort((good1, good2) => good1 > good2 ? 1 : -1);
        }
        else if (this.sortPrice){
            return this._goods.filter(good => this.filter.test(good.name)).sort((good1, good2) => good1 > good2 ? -1 : 1);
        }
        else {
            return this._goods.filter(good => this.filter.test(good.name));
        }
        
    }

    add(good) {
        if (this._goods.indexOf(good) != -1) {
            console.log("Товар уже добавлен!");
        }
        else {
            this._goods.push(good);
        }
    }

    remove(id) {
        this._goods.forEach(function(good, index) {
            if (good.id === id) {
                this._goods.splice(index, 1);
            }
        });      
    }    
}

class BasketGood extends Good {
    constructor (good, amount) {
        super(good.id, good.name, good.description, good.sizes, good.price, good.available);
        this.amount = amount;
    }
}

class Basket {    
    constructor ()  {
        this.goods = []
    }
    

    add(good, amount) {
        let index = this.goods.indexOf(good);
        if ( index === -1) {
            this.goods.push(new BasketGood(good, amount));
        }
        else {
            this.goods[index].amount += amount;
        }

    }

    remove(good, amount) {
        let index = this.goods.indexOf(good);
        if ( index === -1) {
            console.log('Такого товаре нет в корзине');
        }
        else {
            this.goods[index].amount -= amount;
            if (this.goods[index].amount <= 0) {
                this.goods.splice(index, 1);
            }
        }
    }

    clear() {
        this.goods.length = 0;
    }

    removeUnavailable() {
        this.goods = this.goods.filter(good => good.available);
    }

    get totalAmount() {
        let totalAmount = 0;
        this.goods.forEach(function(good) {
            totalAmount += good.amount;
        });
        return totalAmount;
    }

    get totalSum() {
        let totalSum = 0;
        this.goods.forEach(function(good){
            totalSum += good.price*good.amount;      
        });
        return totalSum;
    }
}

const catalog = [
    { id: 1, 
      name: 'Рубашка', 
      description: 'Синяя',
      sizes: [1, 2,],
      price: 10,
      available: true,
    },
    { id: 2, 
      name: 'Jins', 
      description: 'Зеленые',
      sizes: [3, 4,],
      price: 15,
      available: true,
      },
    { id: 4, 
      name: 'Shoes', 
      description: 'Красные',
      sizes: [6, 7,],
      price: 5,
      available: true,
    },
    { id: 4, 
      name: 'Пальто', 
      description: 'Коричневое',
      sizes: [43, 50,],
      price: 100,
      available: true,
    },
    { id: 5, 
      name: 'Sweater', 
      description:   'Бежевая',
      sizes: [65, 70,],
      price: 45,
      available: false,
    },
]

const good1 = new Good(catalog[0].id, catalog[0].name, 
                               catalog[0].description, catalog[0].sizes, 
                               catalog[0].price, catalog[0].available);
 

const good2 = new Good(catalog[1].id, catalog[1].name, 
                               catalog[1].description, catalog[1].sizes, 
                               catalog[1].price, catalog[1].available);                               



const good3 = new Good(catalog[2].id, catalog[2].name, 
                               catalog[2].description, catalog[2].sizes, 
                               catalog[2].price, catalog[2].available);


const good4 = new Good(catalog[3].id, catalog[3].name, 
                               catalog[3].description, catalog[3].sizes, 
                               catalog[3].price, catalog[3].available);


const good5 = new Good(catalog[4].id, catalog[4].name, 
                        catalog[4].description, catalog[4].sizes, 
                        catalog[4].price, catalog[4].available);


const goodList = new GoodList();

goodList.add(good1);
goodList.add(good2);
goodList.add(good3);
goodList.add(good5);
console.log(goodList.list);
goodList.add(good4);
goodList.add(good4);
console.log(goodList.list);

const basket = new Basket();
basket.add(good1, 5);
basket.add(good2, 6);
basket.add(good1, 2);
console.log(basket);

console.log(basket.totalAmount);
console.log(basket.totalSum);