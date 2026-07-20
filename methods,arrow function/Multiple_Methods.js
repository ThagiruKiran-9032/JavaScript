const employees = [
    { id: 1, name: "Kittu", salary: 40000, active: true },
    { id: 2, name: "Rahul", salary: 65000, active: false },
    { id: 3, name: "John", salary: 55000, active: true },
    { id: 4, name: "David", salary: 80000, active: true }
];

const updatedSalaries = employees.map((employee) => ({
    ...employee,
    salary: employee.salary + employee.salary * 0.10
}));

const activeEmployees = employees.filter((employee) => employee.active);

const firstHighEarner = employees.find((employee) => employee.salary > 60000);

const johnIndex = employees.findIndex((employee) => employee.name === "John");

const hasHighEarner = employees.some((employee) => employee.salary > 75000);

const allActive = employees.every((employee) => employee.active);

const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);

console.log("Updated Salaries:", updatedSalaries);
console.log("Active Employees:", activeEmployees);
console.log("First Employee earning > ₹60,000:", firstHighEarner);
console.log("Index of John:", johnIndex);
console.log("Any employee earning > ₹75,000?", hasHighEarner);
console.log("Are all employees active?", allActive);
console.log("Total Salary:", totalSalary);
