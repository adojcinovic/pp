function Product(ime, cena, istekRoka) {
    this.productID = Math.floor(Math.random * 90000 + 10000),
        this.name = ime,
        this.price = Number(cena.toFixed(2)),
        this.expirationDate = new Date(istekRoka)
}

function ShoppingBag() {

}