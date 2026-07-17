//

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const p1 = new Person("Kittu",21);
p1.introduce();



//counter

function Counter() {
    this.count = 0;
}

Counter.prototype.increment = function(){

    this.count++;
}

const c1 = new Counter();
const c2 = new Counter();

c1.increment();
c1.increment();

c2.increment();

console.log(c1.count); // ?
console.log(c2.count); // ?