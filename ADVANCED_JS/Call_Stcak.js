// call stack

function one(){
    two();
}
function two(){
    three();
}
function three(){
    console.log(124 + 1);
}
one();
