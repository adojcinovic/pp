function Person(name, surname) {
    this.name = name;
    this.surname = surname
}

function Seat(number = Math.floor(Math.random * 90 + 10), category = 'E') {
    this.number = number;
    this.category = category.toUpperCase();
}


function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
}

function Flight(relation, date) {
    this.relation = relation;
    this.date = new Date(date);
    this.paxList = []
}

function Airport() {
    this.name = 'Nikola Tesla';
    this.flights = []
}



Person.prototype.getData = function () {
    return this.name + ' ' + this.surname
}


Seat.prototype.getData = function () {
    return this.number + ', ' + this.category
}


Passenger.prototype.getData = function () {
    return this.seat.getData() + ', ' + this.person.getData()
}


Flight.prototype.addPassenger = function (passenger) {
    this.paxList.push(passenger)
}

Airport.prototype.addFlight = function (flight) {
    this.flights.push(flight)
}

Flight.prototype.getData = function () {
    var output = '';
    output += this.date + ', ' + this.relation + '\n';
    for (var i = 0; i < this.paxList.length; i++) {
        output += '\t \t' + this.paxList[i].getData()
        output += '\n'
    }
    return output
}


function createFlight(relation, date) {
    return new Flight(relation, date)
}

function createPassenger(firstName, lastName, seatNumber, seatCategory) {
    var person = new Person(firstName, lastName)
    var seat = new Seat(seatNumber, seatCategory)
    return new Passenger(person, seat)
}





var putnik = createPassenger('Aleksandar', 'Dojcinovic', 15, 'b')
var putnik2 = createPassenger('Igor', 'Dulovic', 16, 'b')

var let1 = createFlight('Prag - Doha', '08 Mar 2020')

var aerodrom = new Airport()



let1.addPassenger(putnik)
let1.addPassenger(putnik2)


aerodrom.addFlight(let1)



console.log(aerodrom.flights);

console.log(let1.paxList);



