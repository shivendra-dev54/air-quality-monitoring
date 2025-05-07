const cityCoordinates = {
    // Major cities in Maharashtra
    "Mumbai": { lat: 19.0760, lon: 72.8777 },
    "Pune": { lat: 18.5204, lon: 73.8567 },
    "Nagpur": { lat: 21.1458, lon: 79.0882 },
    "Nashik": { lat: 19.9975, lon: 73.7898 },
    "Aurangabad": { lat: 19.8762, lon: 75.3433 },
    "Solapur": { lat: 17.6599, lon: 75.9064 },
    "Thane": { lat: 19.2183, lon: 72.9781 },
    "Navi Mumbai": { lat: 19.0330, lon: 73.0297 },
    "Amravati": { lat: 20.9374, lon: 77.7796 },
    "Kolhapur": { lat: 16.7050, lon: 74.2433 },
    "Sangli": { lat: 16.8524, lon: 74.5815 },
    "Jalgaon": { lat: 21.0077, lon: 75.5626 },
    "AhilyaNagar": { lat: 19.0948, lon: 74.7480 },
    "Satara": { lat: 17.6805, lon: 74.0183 },
    "Ratnagiri": { lat: 16.9944, lon: 73.3000 },
    "Latur": { lat: 18.4088, lon: 76.5604 },
    "Chandrapur": { lat: 19.9704, lon: 79.3034 },
    
    // Specific areas in Pune
    "Hinjewadi, Pune": { lat: 18.5974, lon: 73.7181 },
    "Shivajinagar, Pune": { lat: 18.5308, lon: 73.8470 },
    "Kothrud, Pune": { lat: 18.5074, lon: 73.8077 },
    "Wakad, Pune": { lat: 18.5986, lon: 73.7619 },
    "Viman Nagar, Pune": { lat: 18.5679, lon: 73.9143 },
    "Hadapsar, Pune": { lat: 18.5018, lon: 73.9260 },
    "Kharadi, Pune": { lat: 18.5511, lon: 73.9407 },
    "Baner, Pune": { lat: 18.5590, lon: 73.7766 },
    
    // Other major cities in India
    "Delhi": { lat: 28.7041, lon: 77.1025 },
    "Bangalore": { lat: 12.9716, lon: 77.5946 },
    "Kolkata": { lat: 22.5726, lon: 88.3639 },
    "Chennai": { lat: 13.0827, lon: 80.2707 }
};


async function fetchAirQuality() {
    const apiKey = '82dc465aa302255d13a810a24f699968'; // Replace with a valid API key
    const city = document.getElementById("city").value;
    const { lat, lon } = cityCoordinates[city];
    
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.list || data.list.length === 0) {
            throw new Error("No data available for this location.");
        }
        const aqi = data.list[0].main.aqi;
        const qualityLevels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
        const healthAdvisory = [
            "Air is clean and healthy. Enjoy your day!",
            "Air quality is acceptable, but some pollutants may be present.",
            "Sensitive groups should limit outdoor activity.",
            "Unhealthy air! Wear a mask and avoid outdoor activities.",
            "Very unhealthy! Stay indoors and use an air purifier."
        ];
        
        const quality = qualityLevels[aqi - 1];
        const advisory = healthAdvisory[aqi - 1];

        document.getElementById('aqi').innerHTML = `
            <strong>Air Quality in ${city}:</strong> ${quality} (AQI: ${aqi})<br>
            <span style="color: yellow;">${advisory}</span>
        `;
    } catch (error) {
        document.getElementById('aqi').innerText = `Error: ${error.message}`;
        console.error(error);
    }
}
