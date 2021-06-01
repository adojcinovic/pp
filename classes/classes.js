class Person {
    constructor(ime, godine) {
        this.name = ime;
        this.age = godine;
    }
    sayName() {
        console.log(this.name);
    }
}



var petar = new Person('pera', 26)


class Student extends Person {
    constructor(ime, godine, skola) {
        super(ime, godine)
        this.school = skola
    }
}



// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student

var ucenik = new Student('pera', 25, 'BIT')

ucenik.sayName()


