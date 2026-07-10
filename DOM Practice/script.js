function changeWelcome() {
    let heading = document.getElementById("welcomeText");
    heading.innerText = "Welcome Kittu!";
}
function changePriceColor() {
    let prices = document.getElementsByClassName("price");
    for (let i = 0; i < prices.length; i++) {
        prices[i].style.color = "green";
        prices[i].style.fontWeight = "bold";
    }
}
function highlightFirstNote() {
    let firstNote = document.querySelector(".note");
    firstNote.style.background = "yellow";
    firstNote.style.color = "black";
    firstNote.style.fontWeight = "Bold";
}
function increaseMenuSize() {
    let items = document.querySelectorAll("#menu li");
    items.forEach(function(item) {
        item.style.fontSize = "24px";
        item.style.color = "#2563eb";
    });
}
function showTime() {
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById("timeText").innerText = currentTime;
}
function createStudentCard() {
    let card = document.getElementById("studentCard");
    card.innerHTML = '<div style="border:2px solid #2563eb;padding:20px;border-radius:10px;margin-top:15px;">'
        + '<h3>Rahul Sharma</h3>'
        + '<p>Course : JavaScript</p><p>Batch : 2026</p><button>View Profile</button>'
        + '</div>';
}
function styleBox() {
    let box = document.getElementById("styleBox");
    box.style.background = "#2563eb";
    box.style.color = "white";
    box.style.fontSize = "28px";
    box.style.border = "4px light black";
    box.style.borderRadius = "15px";
}
function changeImage() {
    let image = document.getElementById("profileImage");
    image.setAttribute(
        "src",
        "https://picsum.photos/200"
    );
    image.setAttribute(
        "width",
        "200"
    );
    console.log(
        image.getAttribute("src")
    );
}
function createReview() {
    let review = document.createElement("div");
    review.style.background = "#f1f5f9";
    review.style.padding = "15px";
    review.style.marginTop = "10px";
    review.style.borderLeft = "5px solid green";
    review.style.borderRadius = "8px";
    review.innerHTML = `
        <h3>Below Average</h3><br>
        <p>Good for Nothing</p>
    `;
    document
        .getElementById("reviewBox")
        .appendChild(review);
}
function addMessage() {
    let message = document.createElement("p");
    message.innerText = "Hello! Welcome to the chat.";
    message.style.background = "#dbeafe";
    message.style.padding = "10px";
    message.style.margin = "8px 0";
    message.style.borderRadius = "8px";
    document.getElementById("chatBox").appendChild(message);
}
function removeBanner() {
    let banner = document.getElementById("offerBanner");
    banner.remove();
}
let likes = 0;
function increaseLikes() {
    likes++;
    document.getElementById("likeCount").innerText =
        "Likes : " + likes;
}
function countCharacters() {
    let text = document.getElementById("username").value;
    document.getElementById("characterCount").innerText =
        "Characters : " + text.length;
}
function registerUser(event) {
    event.preventDefault();
    let student = document.getElementById("studentName").value;
    document.getElementById("registrationMessage").innerText =
        "Welcome " + student + "! Registration Successful.";
}
function mouseEnter() {
    let card = document.getElementById("productCard");
    card.style.background = "#2563eb";
    card.style.color = "white";
    card.style.cursor = "pointer";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,.3)";
}
function mouseLeave() {
    let card = document.getElementById("productCard");
    card.style.background = "white";
    card.style.color = "black";
    card.style.boxShadow = "none";
}
function changeParent() {
    let child = document.getElementById("childText");
    let parent = child.parentElement;
    parent.style.background = "#fef3c7";
    parent.style.border = "3px solid orange";
}
function highlightSiblings() {
    let current = document.getElementById("currentLanguage");
    let previous = current.previousElementSibling;
    let next = current.nextElementSibling;
    previous.style.color = "red";
    previous.style.fontWeight = "bold";
    next.style.color = "green";
    next.style.fontWeight = "bold";
}
