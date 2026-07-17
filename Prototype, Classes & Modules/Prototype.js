function Student(name) {
    this.name = name;
}

Student.prototype.study = function () {
    console.log(this.name + " Studying...");
};

const s1 = new Student("Kittu");
//s1.study();
console.log(Object.getPrototypeOf(name));
