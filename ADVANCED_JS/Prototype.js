//Prototype
class Student {
    constructor(name) {
        this.name = name;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}


const student1 = new Student("Kittu");
const student2 = new Student("Rahul");

student1.study();
student2.study();