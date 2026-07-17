class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    reset() {
        this.count = 0;
    }
}

const counter = new Counter();

console.log("Initial count:", counter.count);

counter.increment();
console.log("After increment:", counter.count);

counter.increment();
console.log("After second increment:", counter.count);

counter.decrement();
console.log("After decrement:", counter.count);

counter.reset();
console.log("After reset:", counter.count);
