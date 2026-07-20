
// forEach()

const employees = [
    "Kittu",
    "Rahul",
    "John",
    "David"
];

employees.forEach((employee) => {
    console.log(`Offer letter sent to ${employee}`);
});

// Map()

const prices = [500, 1200, 2500, 4000];
const updatedPrices = prices.map((price) => price + price * 0.18);
console.log(updatedPrices);

// filter()

const experience = [1, 5, 2, 7, 4, 0];
const eligibleCandidates = experience.filter((year) => year >= 3);
console.log(eligibleCandidates);

// find()

const accounts = [
    { name: "Kittu", balance: 45000 },
    { name: "Rahul", balance: 150000 },
    { name: "John", balance: 200000 }
];

const account = accounts.find((item) => item.balance > 100000);
console.log(account);

// some()

const students = [
    { name: "Kittu", completed: false },
    { name: "Rahul", completed: true },
    { name: "John", completed: false }
];
const hasCompletedStudent = students.some((student) => student.completed);
console.log(hasCompletedStudent);

// flat()

const courses = [
    ["HTML", "CSS"],
    ["JavaScript", "React"],
    ["Node.js", "MongoDB"]
];

const allModules = courses.flat();
console.log(allModules);

// flatMap()

const customers = [
    {
        name: "Kittu",
        products: ["Laptop", "Mouse"]
    },
    {
        name: "Rahul",
        products: ["Keyboard", "Monitor"]
    }
];
const allProducts = customers.flatMap((customer) => customer.products);
console.log(allProducts);

