//using this keyword
function showPrice(){
    console.log(`${this.name}: Rs.${this.price}`);
}

const Laptop = {
    name: "Asus",price: 100000,showPrice   
};

const Phone = {
    name: "Vivo",price: 50000,showPrice 
};

Laptop.showPrice();
Phone.showPrice();
