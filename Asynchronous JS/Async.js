//setTimeOut

console.log('Hello')
setTimeout(()=> {
    console.log("Start the topics")
},3000)
console.log('Java Script')



//setInterval
let timer = setInterval(()=>{
    console.log('Kittu');
},5000)
clearInterval(timer);



function greet(name) {
    console.log("Hello " + name);
}
 function user(callback) {
        callback("Kittu");
}
user(greet);



//CallBack Hell
function fname(callback){
    console.log(`Hello Kittu !`);
    callback();
}
function greet(callback){
    console.log("How are you?");
    callback();      
}
function wish(callback){
    console.log("Wish to meet you.It's a pleasue to have you here");
    callback();
}
function offer(callback){
    console.log('shall we have a cup of tea?');
    callback();
}
fname(function(){
    greet(function(){
        wish(function(){
            offer(function(){

            })
        })
    })
})


//Promise
let promise = new Promise((resolve, reject) => {
    let success= true
    if(success){
        resolve(10)
    }
    else{
        reject(0)
    }
});
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


//Promise chaining

promise
    .then((result) => {
        console.log('Chained result:', result);
        return result * 5;
    })
    .then((newResult) => {
        console.log('Next chain:', newResult);
        return newResult +100
    })
    .then((newResult1) => {
        console.log("Final Result : "+ newResult1);
    })




//Async/Await

function hello(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Greetings completed");
            resolve();
        }, 2000);
    });
}

async function run() {
    console.log("Your greetings are sending....")
    await hello()
    console.log("Have a nice time with you")
}
run();



//Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))


//JSON

//json text to js object
let jsonData = '{"name":"Kittu","age":21,"course":"CSE"}';

let student = JSON.parse(jsonData);

console.log(student.name); 
console.log(student.age);  
console.log(student.course);

//js object to json
let json = JSON.stringify(student); 
console.log(json)



//Error Handling
async function getUsers() {

    try {

        let response = await fetch("http://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}
getUsers()