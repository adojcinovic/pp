function Product(ime, cena, istekRoka) {
    this.productID = Math.floor(Math.random() * 90000 + 10000)
    this.name = ime,
        this.price = Number(cena.toFixed(2)),
        this.expirationDate = new Date(istekRoka)
}

function ShoppingBag() {
    this.products = []
}


function PaymentCard(balance, ifActive, validity) {
    this.balance = Number(balance.toFixed(2)),
        this.ifActive = ifActive,
        this.validity = validity
}

// METHODS DOWNSTAIRS



Product.prototype.getInfo = function () {
    var output = '';
    output += this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    output += this.productID;
    output += ', ';
    output += this.name;
    output += ', ';
    output += this.price;
    return output
}




ShoppingBag.prototype.addProduct = function (Product) {
    if (Product.expirationDate > new Date()) {
        this.products[this.products.length] = Product
    }
}


ShoppingBag.prototype.getMostExpensive = function () {
    var maxPrice = this.products[0].price
    for (var i = 1; i < this.products.length; i++) {
        if (this.products[i].price > maxPrice) {
            maxPrice = this.products[i].price
        }
    } return maxPrice

}


ShoppingBag.prototype.calculateTotalPrice = function () {
    var total = 0;
    for (var i = 0; i < this.products.length; i++) {
        total += this.products[i].price
    } return total
}





var mleko = new Product('mleko', 25, '29 May 2022');
var jogurt = new Product('jogurt', 30, '22 Jan 2022')
var janje = new Product('jaganje', 3500, '22 Feb 2023')

var vrecica = new ShoppingBag()

var kartica = new PaymentCard(3600, true, '22 Feb 2025')
var drugaKartica = new PaymentCard(3550, true, '22 Feb 2025')

vrecica.addProduct(mleko)
vrecica.addProduct(jogurt)
vrecica.addProduct(janje)

console.log(vrecica);
console.log(mleko.getInfo());
console.log(jogurt.getInfo());
console.log(janje.getInfo());

console.log(vrecica.getMostExpensive());
console.log(vrecica.calculateTotalPrice());
console.log(kartica);

function checkOutAndBuy(basket, card) {
    var amountMissing = 0
    if (card.balance >= basket.calculateTotalPrice()) {
        console.log('Purchase successful!');
    } else {
        amountMissing = basket.calculateTotalPrice() - card.balance;
        console.log('you are short of ' + amountMissing + ' $');
    }
}

checkOutAndBuy(vrecica, kartica)
checkOutAndBuy(vrecica, drugaKartica)

//moje ime je Aleksandar Dojcinovic, i ja sam danas postao programer