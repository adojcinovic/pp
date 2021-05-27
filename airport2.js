(function () {
  function Person(ime, prezime) {
    this.name = ime;
    this.surname = prezime;
  }
  Person.prototype.getData = function () {
    return this.name + " " + this.surname;
  };

  function Seat(broj = Math.round(Math.random() * 90 + 10), kategorija = "E") {
    this.number = broj;
    this.category = kategorija;
  }
  Seat.prototype.getData = function () {
    return this.number + ", " + this.category;
  };

  function Passenger(osoba, sediste) {
    this.person = osoba;
    this.seat = sediste;
  }
  Passenger.prototype.getData = function () {
    return this.seat.getData() + ", " + this.person.getData();
  };

  function Flight(relacija, datum) {
    this.relation = relacija;
    this.date = new Date(datum);
    this.listOfPassengers = [];
  }
  Flight.prototype.addPassenger = function (putnik) {
    this.listOfPassengers.push(putnik);
  };
  Flight.prototype.getData = function () {
    var output = "";
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    output += day + "." + month + "." + year + ", " + this.relation + "\n";
    for (var i = 0; i < this.listOfPassengers.length; i++) {
      output +=
        "\t\t" + (i + 1) + ". " + this.listOfPassengers[i].getData() + "\n";
    }
    return output;
  };

  function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
  }
  Airport.prototype.addFlight = function (let) {
    this.listOfFlights.push(let);
  };
  Airport.prototype.getData = function () {
    var output = "";
    var flightsOutput = "";
    var numOfPassenger = 0;
    for (var i = 0; i < this.listOfFlights.length; i++) {
      flightsOutput += "\t" + this.listOfFlights[i].getData();
      numOfPassenger += this.listOfFlights[i].listOfPassengers.length;
    }

    output +=
      "Airport: " + this.name + ", total passengers: " + numOfPassenger + "\n";
    output += flightsOutput;
    console.log(output);
  };

  function createFlight(relacija, datum) {
    return new Flight(relacija, datum);
  }

  function createPassenger(ime, prezime, brojSedista, kateorija) {
    var person = new Person(ime, prezime);
    var seat = new Seat(brojSedista, kateorija);
    return new Passenger(person, seat);
  }

  var aerodrom = new Airport();
  var let1 = createFlight("Belgrade - New York", "Oct 25 2017");
  var let2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

  var p1 = createPassenger("John", "Snow", 1, "B");
  var p2 = createPassenger("Cersei", "Lannister", 2, "B");
  var p3 = createPassenger("Daeneris", "Targaryen", 14);
  var p4 = createPassenger("Tyrion", "Lannister");

  let1.addPassenger(p1);
  let1.addPassenger(p2);
  let2.addPassenger(p3);
  let2.addPassenger(p4);

  aerodrom.addFlight(let1);
  aerodrom.addFlight(let2);

  aerodrom.getData();
})();
