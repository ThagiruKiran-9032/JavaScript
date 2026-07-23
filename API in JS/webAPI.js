function showFetchData(){
    fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fetchResult').innerHTML = 'Fetch API : ' + data.title;
        })
        .catch(error => {
            document.getElementById('fetchResult').innerHTML = 'Fetch error : ' + error;
        });
}

function showLocationApi(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById('locationResult').innerHTML =
                'Latitude : ' + position.coords.latitude + '<br>' +
                'Longitude : ' + position.coords.longitude;
        });
    } else {
        document.getElementById('locationResult').innerHTML = 'Geolocation not supported';
    }
}

function showClipboardApi(){
    navigator.clipboard.writeText('Hello from Clipboard API')
        .then(() => {
            document.getElementById('clipboardResult').innerHTML = 'Clipboard API : text copied';
        })
        .catch(() => {
            document.getElementById('clipboardResult').innerHTML = 'Clipboard API : permission denied';
        });
}

function showNotificationApi(){
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('Web API Demo');
                document.getElementById('notificationResult').innerHTML = 'Notification API : permission granted';
            } else {
                document.getElementById('notificationResult').innerHTML = 'Notification API : permission denied';
            }
        });
    } else {
        document.getElementById('notificationResult').innerHTML = 'Notification API not supported';
    }
}
