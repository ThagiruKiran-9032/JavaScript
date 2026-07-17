class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(`I am ${this.name},am ${this.age} years old!`);
    }
}

const student = new Student("Kittu", 20);
student.study();

