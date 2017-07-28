function Person(fname, lname,age ,model, year){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age
    Car.call(this,model,year);
}

Person.prototype.fullDetails = function(){
            console.log(this.firstName + this.lastName);
        }
Person.prototype = Object.create(Car.prototype);
Person.prototype.constructor = Person;

var emp1 = new Person("ravi","kumar","25","sedan","2017");
var emp2 = new Person("raj","kumar");

emp1.fullDetails = function(){
    console.log(this.firstName + this.lastName + this.age);