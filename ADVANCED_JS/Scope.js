//Scope
var  a = 10;
function one(){
   let a = 15;

    function two(){
        var a = 5;
        console.log(`Block Scope : ${a}`)
    }
    two();
    console.log(`Function Scope : ${a}`)
}
one();

console.log(`Global Scope : ${a}`);
