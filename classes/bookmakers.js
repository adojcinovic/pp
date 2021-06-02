
const continent = {
    ASIA: 'ASIA',
    EUROPE: 'EUROPE',
    AFRICA: 'AFRICA',
    NORTH_AMERICA: 'NORTH AMERICA',
    SOUTH_AMERICA: 'SOUTH AMERICA',
    AUSTRALIA: 'AUSTRAILA'
}


Object.freeze(continent);

const people = [];
const countries = []

class Country {
    constructor(ime, kvota, kontinent) {
        this.name = ime;
        this.odds = kvota;
        this.continent = kontinent
    }
}

class Person {
    constructor(ime, prezime, datum) {
        this.name = ime;
        this.surname = prezime;
        this.dateOfBirth = moment(datum)
    }
    getInfo() {
        const day = this.dateOfBirth
        return `${this.name} ${this.surname} ${this.dateOfBirth.format('DD.MM.YY')}`
    }
}

class Player {
    constructor(osoba, ulog, zemlja) {
        this.person = osoba;
        this.betAmount = ulog;
        this.country = zemlja;
    }
    getInfo() {
        const age = moment(Date.now()).diff(this.person.dateOfBirth, 'years')
        return `${this.country.name}, ${this.betAmount * this.country.odds}, ${this.person.name} ${this.person.surname}, ${age} years old.`
    }
}

class Addres {
    constructor(zemlja, grad, postanskiBroj, ulica, broj) {
        this.country = zemlja;
        this.city = grad;
        this.postalCode = postanskiBroj;
        this.street = ulica;
        this.number = broj;
    }
    getInfo() {
        return `${this.street} ${this.number}, ${this.postalCode} ${this.city} ${this.country.name}`
    }
}

class BettingPlace {
    constructor() {
        this.addres = adresa;
        this.listOfPlayers = []
    }
    getInfo() {
        const total = this.listOfPlayers.reduce((sum, player) => sum + player.betAmount, 0);
        return `${this.addres.street} ${this.addres.postalCode} ${this.addres.city}, sum of all bets: ${total} eur`
    }
    addPlayer() {
        this.listOfPlayers.push(igrac)
    }
}

class BettingHouse {
    constructor(konkurencija) {
        this.competition = konkurencija;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = 0;
    }
}

function napraviIgraca(ime, prezime, datum, zemlja, continent, ulog) {
    people.find(e => e.name === ime && e.surname === prezime)
    let country = countries.find((e) => e.name === zmelja)
    if (!person) {
        person = new Person(ime, prezime, datum)
        people.push(person)
    }
    if (!country) {
        country = new Country(zemlja, Math.random() * 2 + 1, Object.values(continet)[Math.floor(Math.random() * Object.values(continent).length)])
        countries.push(country)
    }
    return new Player(person, ulog, country)
}

function napraviKladionicu(adresa) {
    return new BettingPlace(adresa)
}


var pera = new Person('petar', 'petrovic', '1813 11 13')

console.log(pera.getInfo());

const sada = moment(Date.now());
const juce = moment('2021-01-06');

const razlika = sada.diff(juce, 'years')

const kladionica = new BettingHouse('Marina')

const player1 = napraviIgraca('Dacha', 'Jovanovic', '1986 03 28')

console.log(razlika);

console.log(player1);