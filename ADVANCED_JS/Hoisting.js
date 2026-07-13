//hoisting
greet();
function greet(){
    console.log("Hello");  //function hoisting execution before the function
}

great();
let great = function (){
    console.log("Hello Kittu!!!!"); //doesn't work bcz greet is a variable there
}
