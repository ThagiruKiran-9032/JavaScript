//Closure
function outer(){
    let count = 0;

    function inner(){
    count++;
    console.log(count);
}
    return inner;
}
let counter = outer();
counter();
counter();
counter();


//Closure
function addToCart(){
    let count=0;
    return {
        increment: function(){
            count++;
            console.log(count)
        },
        decrement: function(){
            count--;
            console.log(count)
        },
        getCount: function(){
            
            return count;
        }
    };
}
let counter = addToCart();

counter.increment();
counter.increment();
counter.decrement();

//closure
function createWallet() {
    let money = 100;

    return function spend(amount) {
        money = money - amount;
        console.log(`Remaining: ₹${money}`);
    };
}

let wallet = createWallet();

wallet(20);
wallet(30);
wallet(10);