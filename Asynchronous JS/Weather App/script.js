let cityInput = document.getElementById("cityInput");
let weatherForm = document.getElementById("weatherForm");
let weatherResult = document.getElementById("weatherResult");

const normalize = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z\s]/g, "").replace(/\s+/g, " ").trim();

weatherForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    let city = cityInput.value.trim();
    if (!city) return;

    if (/\d/.test(city)) {
        weatherResult.innerHTML = `<span style="color: red;">Invalid input</span>`;
        return;
    }

    weatherResult.innerText = "Loading...";

    try {
        let locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );

        let locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
            weatherResult.innerText = "City not found";
            return;
        }

        let firstResult = locationData.results[0];

        const isCity = firstResult.feature_code && firstResult.feature_code.startsWith("PPL");
        if (!isCity) {
            weatherResult.innerText = "City not found";
            return;
        }

        if (normalize(city) !== normalize(firstResult.name)) {
            weatherResult.innerText = "City not found";
            return;
        }

        let latitude = firstResult.latitude;
        let longitude = firstResult.longitude;

        let weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
        );

        let weatherData = await weatherResponse.json();
        let temperature = weatherData.current.temperature_2m;

        let locationDisplay = firstResult.name;
        if (firstResult.admin1 || firstResult.country) {
            let details = [firstResult.admin1, firstResult.country].filter(Boolean).join(", ");
            locationDisplay += ` (${details})`;
        }

        weatherResult.innerHTML = `
            <h2>${locationDisplay}</h2>
            <p><strong>Latitude:</strong> ${latitude}</p>
            <p><strong>Longitude:</strong> ${longitude}</p>
            <p><strong>Temperature:</strong> ${temperature} °C</p>
        `;

    } catch (error) {
        console.log(error);
        weatherResult.innerText = "Something went wrong";
    }
});