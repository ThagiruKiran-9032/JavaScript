let randomNumber = Math.random();

document.getElementById("demo").innerHTML = randomNumber;

if (randomNumber < 0.5) {
    console.log(true);
    window.location.href = "https://www.google.com";
} else {
    console.log(false);
    window.location.href = "https://chatgpt.com";
}