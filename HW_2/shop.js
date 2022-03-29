const catalog = [
    { id: 1, 
      name: 'Рубашка', 
      description: 'Синяя',
      sizes: [1, 2,],
      price: 10,
      available: true,
    },
    { id: 2, 
      name: 'Джинсы', 
      description: 'Зеленые',
      sizes: [3, 4,],
      price: 15,
      available: true,
      },
    { id: 4, 
      name: 'Кеды', 
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
      name: 'Куртка', 
      description:   'Бежевая',
      sizes: [65, 70,],
      price: 45,
      available: false,
    },
]

const bucket = [
    {good: 5, amount: 3},
    {good: 2, amount: 4},
]


function clearBucket() {
    bucket.length = 0;
}

function addGood(a, b) {
    bucket.push({good: a, amount: b});    
}


function delGood(a) {
  bucket.forEach(function(item, index) {
    if (a == item.good) {
      bucket.splice(index, 1);
    }
  });
}

function AmountSum() {
  let totalAmount = 0;
  let totalSumm = 0;
  bucket.forEach(function(item) {
    totalAmount += item.amount;
  catalog.forEach(function(product){
    if (item.good == product.id) {
      totalSumm += product.price*item.amount;      
    }
  })
  });
  return {'totalAmount': totalAmount, 'totalSumm': totalSumm,};
}


console.log(bucket);

delGood(5);
console.log(bucket);

clearBucket();
console.log(bucket);

addGood(1, 5);
addGood(4, 7);
console.log(bucket);

console.log(AmountSum());