# 🌤️ Nevikai Weather App

A modern, minimalistic, and responsive weather application built using **HTML**, **CSS (Glassmorphism UI)**, and **JavaScript (OpenWeatherMap API)**.
This project enables users to get **real-time temperature, humidity, wind speed**, and corresponding weather icons for any city worldwide.

---

## 🔗 Live Demo

Visit the demo: [https://front-end-training-nevikai.github.io/practice-Weather-app/](https://front-end-training-nevikai.github.io/practice-Weather-app/)

---

## 🚀 Features

### ✅ Real-Time Weather
- Fetches live weather data using the **OpenWeatherMap API**.
- Displays **temperature**, **humidity**, **wind speed**, and **weather condition icons**.

### 🎨 Modern UI Design
- Elegant **glassmorphism** card interface.
- Smooth animations including **fade-in**, **shake**, and **floating icons**.
- Fully responsive layout optimized for mobile and desktop devices.

### 🧠 Smart Functionalities
- Error handling for invalid city names.
- Press **Enter** or click the **search button** to fetch weather.
- Automatic icon selection based on weather condition (e.g., Rain, Clear, Clouds).

---

## 📂 Project Structure

📦 Nevikai-Weather-App
├── index.html # Main HTML structure
├── style.css # Complete UI styling + animations
├── code.js # API logic and DOM functionality
└── assets/
└── images/ # Weather icons, search icon, humidity, wind, etc.


---

## 🔧 Technologies Used

| Technology | Purpose |
|-----------|----------|
| **HTML5** | Project structure |
| **CSS3 (Glassmorphism, Gradient UI)** | Styling and animations |
| **JavaScript (ES6)** | API calls & dynamic UI updates |
| **OpenWeatherMap API** | Real-time weather data |

---

## 🛠️ Setup & Installation

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/Nevikai-Weather-App.git
```
### 2️⃣ Navigate into the project folder
```md
cd Nevikai-Weather-App
```
### 3️⃣ Add your OpenWeatherMap API Key
Open code.js and replace the placeholder with your own API key:
```md
const apiKey = "YOUR_API_KEY_HERE";
```
### 4️⃣ Run the project
Simply open index.html in your browser:

1.Double-click index.html, or

2.Use Live Server (VS Code extension) for the best experience.

---

## 🌐 API Usage

The app uses the OpenWeatherMap API:
``` md
https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={API_KEY}
```
### Returned Data Includes:

1.main.temp → Temperature
2.main.humidity → Humidity
3.wind.speed → Wind speed
4.weather[0].main → Weather type (e.g., Clear, Rain, Clouds)

---

## 🎨 UI Highlights

### ✨ Glassmorphism Design

1.Transparent containers
2.Soft glowing backgrounds
3.Smooth gradient effects

### 💫 Animations

1.Card fade-in
2.Weather icon floating
3.Error message shake animation

---

## 📜 License

This project is licensed under the MIT License.
Feel free to modify and use it for your personal or commercial projects.

---

## 🙌 Acknowledgements

1.OpenWeatherMap for providing weather data
2.Google Fonts (Poppins & Vazirmatn)
3.Inspiration from modern glass UI and minimal weather apps

---

## 💡 Future Improvements

1.5-day weather forecast page
2.Dark/Light mode
3.Geolocation weather detection
4.Animated weather icons

---

## ⭐ If you like this project, consider giving it a star on GitHub!
Your support motivates future improvements 🚀
