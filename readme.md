# 🌍 Air Quality Monitor

A **modern, minimalistic, and dark-themed** web application that displays **real-time air quality data** for various cities in Maharashtra and across India. The website fetches **AQI (Air Quality Index) data** from the OpenWeather API and provides **health recommendations** based on air quality levels.

## 🚀 Features
✅ **Select a city** from Maharashtra or major cities in India  
✅ **Fetch real-time air quality** (AQI) from the OpenWeather API  
✅ **Color-coded AQI rating strip** (Green → Good, Red → Bad)  
✅ **Health recommendations** based on air quality  
✅ **Minimalistic dark-themed UI**  

## 🛠️ Technologies Used
- **HTML** → Structure of the web page  
- **CSS** → Styling (Dark mode, modern UI)  
- **JavaScript** → Fetching API data and updating UI  

## 📜 How to Use?
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/air-quality-monitor.git
   cd air-quality-monitor
   ```
2. **Open `index.html`** in a browser.  
3. **Select a city** from the dropdown.  
4. **Click "Get Air Quality"** to fetch real-time AQI data.  
5. View **AQI levels** and **health recommendations** based on pollution.  

## 📝 API Setup
1. **Get an API key** from [OpenWeather](https://home.openweathermap.org/api_keys).  
2. **Replace the placeholder** in `script.js`:
   ```js
   const apiKey = 'YOUR_API_KEY'; // Replace with your API key
   ```
3. **Save the file** and reload the page.  

## 🎨 AQI Rating Guide
The air quality levels are categorized as follows:

| AQI Level  | Category    | Color   | Health Advisory |
|------------|------------|---------|----------------|
| 1          | Good       | 🟢 Green  | Air is clean and healthy. |
| 2          | Fair       | 🟡 Yellow | Slight pollutants, but acceptable. |
| 3          | Moderate   | 🟠 Orange | Sensitive groups should limit outdoor activities. |
| 4          | Poor       | 🔴 Red    | Wear a mask, avoid outdoor exposure. |
| 5          | Very Poor  | 🟣 Dark Red | Stay indoors, use an air purifier. |

## 📌 To-Do / Future Enhancements
- 🌍 **Expand city list** to include more locations across India  
- 📊 **Graphical representation** of air quality trends  
- 🌐 **Deploy on a web hosting service** (e.g., GitHub Pages, Netlify)  
- 🚀 **Progressive Web App (PWA) support** for mobile users  

## 📜 License
This project is **open-source** and free to use under the **MIT License**.  

## 👨‍💻 Author
Developed by **[Shivendra Devadhe]** 🚀  
Feel free to contribute and improve the project!  
