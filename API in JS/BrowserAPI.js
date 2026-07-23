function showAlert() {
    alert("Welcome to the Alert Message");
}

//Confirmation
function deleteContent(){
    const res = confirm("Do you want to delete the content ?");
    if (res){
        alert("Content Deleted");     
    }
    else{
        alert("Content not deleted");
        
    }
}

//prompt
function promptName(){
    const name = prompt("Enter your name :");
    alert(`Welcome ${name}`);
}

//window api
function showWindowInfo(){
    document.getElementById("windowInfo").innerHTML =
    "Window Width :" + window.innerWidth + " px <br>" +
    "Window Height :" + window.innerHeight + " px";
}

//location api
function showLocationInfo(){
    document.getElementById("locationInfo").innerHTML =
    "Location :" + window.location.href;
}

// browser api
function showBrowserInfo(){
    document.getElementById("browserInfo").innerHTML =
    "Browser :" + navigator.userAgent;
}

//history api
function showHistoryInfo(){
    document.getElementById("historyInfo").innerHTML =
    "History length :" + history.length;
}

//storage api
function saveToStorage(){
    localStorage.setItem("name", "Kiran");
    sessionStorage.setItem("visit", "1");
    alert("Data saved in storage");
}

function showStorageInfo(){
    const name = localStorage.getItem("name");
    const visit = sessionStorage.getItem("visit");
    document.getElementById("storageInfo").innerHTML =
    "Local Storage :" + name + "<br>" +
    "Session Storage :" + visit;
}

//window api
function openNewWindow(){
    const newWindow = window.open("", "_blank", "width=400,height=300");
    if (newWindow){
        newWindow.document.write("<h1>New Browser Window</h1>");
    }
    else{
        alert("Popup blocked");
    }
}

//screen
function screenInfo(){
    document.getElementById("Width").innerHTML =
    "Screen width :" + screen.width + " px <br> "+
    "Screen Height :" + screen.height + " px";
} 
