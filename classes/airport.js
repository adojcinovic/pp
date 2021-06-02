'use strict'

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getData() {
        return `${this.name} ${this.surname}`
    }
}

class Seat {
    constructor(number = Math.floor(Math.random * 90 + 10), category = 'E') {
        this.number = number;
        this.category = category.toUpperCase();
    }
    getData() {
        return `${this.number}, ${this.category}`
    }
}

class Passenger {
    constructor(Person, Seat) {
        this.person = Person;
        this.seat = Seat;
    }
    getData() {
        return `${this.seat.getData()}, ${this.person.getData()}`
    }
}

class Flight {
    constructor(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPax = []
    }
}

class Airport {
    constructor() {
        this.name = 'Nikola Tesla'
        this.listOfFlights = []
    }
}

function createPassenger(firstName, lastName, seatNumber, category) {
    var person = new Person(firstName, lastName)
    var seat = new Seat(seatNumber, category)
    return new Passenger(person, seat)
}

var pera = createPassenger('Pera', 'Peric', 10, 'e')


console.log(pera.getData());

