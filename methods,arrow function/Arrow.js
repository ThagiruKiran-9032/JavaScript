
//Discount Calculation

const calculateDiscount = (price,discountPercentage) => {

    let Discount_Amount = (price * discountPercentage) / 100;
    let Final_Price = price - Discount_Amount;
    return Final_Price;
}
console.log(calculateDiscount(5000, 20)); 

// Student Registration Portal

const createStudent = (id,name,course) => ({
    id,
    name,
    course
});
console.log(createStudent(101, "Kittu", "Computer Science"));


// E-Commerce Price Update

const prices = [1000, 2500, 5000, 8000];
const updatedPrices = prices.map((price) => price + price * 0.10);
console.log(updatedPrices);

//Rest Parameter

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}
console.log(sum(1,2));