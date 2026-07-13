//Lexical Scope

let price = 100;

function shoppingCart() {
    let quantity = 2;

    function calculateTotal() {
        let discount = 20;

        console.log(price * quantity - discount);
    }

    calculateTotal();
}

shoppingCart();
