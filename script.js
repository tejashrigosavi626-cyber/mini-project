// function getCrop() {
//     let soil = document.getElementById("soil").value;
//     let season = document.getElementById("season").value;

//     let crop = "";

//     if (soil === "black" && season === "rainy") {
//         crop = "Cotton 🌱";
//     } else if (soil === "alluvial" && season === "rainy") {
//         crop = "Rice 🌾";
//     } else if (soil === "red" && season === "summer") {
//         crop = "Groundnut 🌰";
//     } else {
//         crop = "Wheat 🌿";
//     }

//     document.getElementById("cropResult").innerText =
//         "Recommended Crop: " + crop;
// }

// function getFertilizer() {
//     let crop = document.getElementById("cropName").value;

//     let fertilizer = "";

//     if (crop === "Rice") {
//         fertilizer = "DAP (Chemical) 🧪";
//     } else if (crop === "Wheat") {
//         fertilizer = "Urea (Chemical) 🧪";
//     } else if (crop === "Cotton") {
//         fertilizer = "Compost (Organic) 🌿";
//     }else if (crop === "Sugarcane"){
//         fertilizer =" Urea, DAP, Potash (chemical)🧪";
//     }else if(crop === "Banana"){
//         fertilizer =" Neem cake, Vermicompost (organic)🌿";
//     }else if(crop === "onion"){
//         fertilizer =" Compost, Poultry manure(organic)🌿";
//     }
    // Weather API (demo)
// function getWeather() {
//     document.getElementById("weatherResult").innerText =
//         "Temperature: 30°C | Condition: Sunny";
    // You can connect real API later
// }

// Dark Mode
// function toggleDark() {
    // document.body.classList.toggle("dark");
// }
// Language Toggle
// function toggleLanguage() {
//     isMarathi = !isMarathi;

//     document.getElementById("title").innerText =
//         isMarathi ? "🌾 अ‍ॅग्रोस्मार्ट" : "🌾 AgroSmart";

//     document.getElementById("cropTitle").innerText =
//         isMarathi ? "पिक शिफारस" : "Crop Recommendation";

//     document.getElementById("fertTitle").innerText =
//         isMarathi ? "खत शिफारस" : "Fertilizer Suggestion";

//     document.getElementById("soilText").innerText =
//         isMarathi ? "माती:" : "Soil:";

//     document.getElementById("seasonText").innerText =
//         isMarathi ? "हंगाम:" : "Season:";
// }

// document.getElementById("darkModeBtn").addEventListener("click", function () {
//     document.body.classList.toggle("dark");
// });

// let isEnglish = true;

// document.getElementById("langBtn").addEventListener("click", function () {
//     if (isEnglish) {
//         document.getElementById("title").innerText = "पीक शिफारस";
//     } else {
//         document.getElementById("title").innerText = "Crop Recommendation";
//     }
//     isEnglish = !isEnglish;
// });



// function getWeather() {
//     let apiKey = "YOUR_API_KEY";  // put your API key
//     let city = "Nashik";

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById("weatherResult").innerText =
//                 "Temp: " + data.main.temp + "°C, " + data.weather[0].description;
//         })
//         .catch(error => {
//             console.log("Error:", error);
//         });
// }

//     document.getElementById("fertilizerResult").innerText =
//         "Recommended Fertilizer: " + fertilizer;
// }


// /* ================================= */
// /* NEW SMART FARMING FEATURES */
// /* ================================= */


// /* 💧 Irrigation Recommendation */

// function getIrrigation() {

//     let moisture = document.getElementById("moisture").value;

//     let result = "";

//     if (moisture === "low") {

//         result = "💧 Irrigation Required. Water the crop immediately.";

//     } 
//     else if (moisture === "medium") {

//         result = "🌱 Soil moisture is moderate. Irrigate if required.";

//     } 
//     else {

//         result = "✅ Soil moisture is sufficient. No irrigation required.";

//     }

//     document.getElementById("irrigationResult").innerText = result;
// }


// /* 🌿 Crop Disease Information */

// function getDisease() {

//     let crop = document.getElementById("diseaseCrop").value;

//     let result = "";

//     if (crop === "rice") {

//         result = "🌾 Common Disease: Rice Blast. Prevention: Use healthy seeds and proper field management.";

//     }

//     else if (crop === "wheat") {

//         result = "🌾 Common Disease: Wheat Rust. Prevention: Use resistant varieties and proper crop management.";

//     }

//     else if (crop === "cotton") {

//         result = "🌿 Common Disease: Bollworm. Prevention: Regular crop monitoring and integrated pest management.";

//     }

//     else if (crop === "banana") {

//         result = "🍌 Common Disease: Panama Disease. Prevention: Use disease-free planting material.";

//     }

//     else if (crop === "onion") {

//         result = "🧅 Common Disease: Purple Blotch. Prevention: Maintain proper spacing and avoid excessive moisture.";

//     }

//     document.getElementById("diseaseResult").innerText = result;
// }


// /* 💰 Market Price */

// function getMarketPrice() {

//     let crop = document.getElementById("marketCrop").value;

//     let price = "";

//     if (crop === "rice") {

//         price = "Rice: ₹2,300 per quintal";

//     }

//     else if (crop === "wheat") {

//         price = "Wheat: ₹2,500 per quintal";

//     }

//     else if (crop === "cotton") {

//         price = "Cotton: ₹7,000 per quintal";

//     }

//     else if (crop === "onion") {

//         price = "Onion: ₹2,000 per quintal";

//     }

//     else if (crop === "sugarcane") {

//         price = "Sugarcane: ₹3,500 per tonne";

//     }

//     document.getElementById("marketResult").innerText =
//         "💰 Estimated Market Price: " + price;
// }


// /* 🌱 Farming Tips */

// function getTips() {

//     let tips = [

//         "🌱 Test your soil before applying fertilizers.",

//         "💧 Avoid over-irrigation because it can damage crop roots.",

//         "🌿 Use organic manure to improve soil health.",

//         "🐛 Regularly monitor crops for pests and diseases.",

//         "☀️ Select crops according to the local season and climate.",

//         "🚜 Maintain proper spacing between plants.",

//         "🌾 Use quality seeds for better crop production."

//     ];

//     let randomTip =
//         tips[Math.floor(Math.random() * tips.length)];

//     document.getElementById("tipsResult").innerText = randomTip;
// }

// /* =========================================
//    AGROSMART
//    SMART FARMING SYSTEM
// ========================================= */


// /* =========================================
//    1. CROP RECOMMENDATION
// ========================================= */

// function getCrop() {

//     let soil = document.getElementById("soil").value;

//     let season = document.getElementById("season").value;

//     let crop = "";


//     if (soil === "black" && season === "rainy") {

//         crop = "Cotton 🌱";

//     }

//     else if (soil === "alluvial" && season === "rainy") {

//         crop = "Rice 🌾";

//     }

//     else if (soil === "red" && season === "summer") {

//         crop = "Groundnut 🌰";

//     }

//     else if (soil === "black" && season === "winter") {

//         crop = "Wheat 🌾";

//     }

//     else {

//         crop = "Wheat 🌿";

//     }


//     document.getElementById("cropResult").innerText =
//         "Recommended Crop: " + crop;


//     document.getElementById("dashboardCrop").innerText =
//         crop;
// }



// /* =========================================
//    2. FERTILIZER RECOMMENDATION
// ========================================= */

// function getFertilizer() {

//     let crop =
//         document.getElementById("cropName").value;


//     let fertilizer = "";


//     if (crop === "Rice") {

//         fertilizer =
//             "DAP + Urea + Potash 🧪";

//     }

//     else if (crop === "Wheat") {

//         fertilizer =
//             "Urea + DAP 🧪";

//     }

//     else if (crop === "Cotton") {

//         fertilizer =
//             "Urea + DAP + Potash 🧪";

//     }

//     else if (crop === "Sugarcane") {

//         fertilizer =
//             "Urea + DAP + Potash 🧪";

//     }

//     else if (crop === "Banana") {

//         fertilizer =
//             "Neem Cake + Vermicompost 🌿";

//     }

//     else if (crop === "Onion") {

//         fertilizer =
//             "Compost + Poultry Manure 🌿";

//     }


//     document.getElementById("fertilizerResult").innerText =
//         "Recommended Fertilizer: " + fertilizer;
// }



// /* =========================================
//    3. WEATHER
// ========================================= */

// function checkWeather() {

//     let temperature = 30;

//     let rainfall = 20;


//     let result = "";


//     if (rainfall > 50) {

//         result =
//             "🌧️ Heavy rainfall expected. Avoid additional irrigation.";

//     }

//     else if (temperature > 35) {

//         result =
//             "☀️ High temperature. Increase irrigation monitoring.";

//     }

//     else {

//         result =
//             "🌤️ Weather conditions are suitable for normal farming activities.";

//     }


//     document.getElementById("weatherResult").innerText =
//         result;


//     document.getElementById("dashboardTemp").innerText =
//         temperature + "°C";
// }



// /* =========================================
//    4. SOIL HEALTH
// ========================================= */

// function checkSoil() {

//     let nitrogen =
//         Number(document.getElementById("nitrogen").value);

//     let phosphorus =
//         Number(document.getElementById("phosphorus").value);

//     let potassium =
//         Number(document.getElementById("potassium").value);

//     let ph =
//         Number(document.getElementById("ph").value);


//     if (!nitrogen ||
//         !phosphorus ||
//         !potassium ||
//         !ph) {

//         document.getElementById("soilResult").innerText =
//             "⚠️ Please enter all soil values.";

//         return;

//     }


//     let result = "";


//     if (ph >= 6 && ph <= 7.5) {

//         result =
//             "🟢 Good Soil Health. pH is in a generally suitable range.";

//         document.getElementById("dashboardSoil").innerText =
//             "Good";

//     }

//     else {

//         result =
//             "🟡 Soil pH may need attention. Consider soil-test-based management.";

//         document.getElementById("dashboardSoil").innerText =
//             "Needs Attention";

//     }


//     result +=
//         " N: " + nitrogen +
//         " | P: " + phosphorus +
//         " | K: " + potassium +
//         " | pH: " + ph;


//     document.getElementById("soilResult").innerText =
//         result;
// }



// /* =========================================
//    5. SMART IRRIGATION
// ========================================= */

// function checkIrrigation() {

//     let moisture =
//         Number(document.getElementById("moisture").value);


//     if (moisture < 30) {

//         document.getElementById("irrigationResult").innerText =
//             "💧 Irrigation Required. Soil moisture is low.";

//         document.getElementById("dashboardMoisture").innerText =
//             moisture + "%";

//     }

//     else if (moisture >= 30 && moisture <= 60) {

//         document.getElementById("irrigationResult").innerText =
//             "🌱 Soil moisture is moderate. Monitor the field.";

//         document.getElementById("dashboardMoisture").innerText =
//             moisture + "%";

//     }

//     else {

//         document.getElementById("irrigationResult").innerText =
//             "✅ Soil moisture is sufficient. Irrigation may not be required.";

//         document.getElementById("dashboardMoisture").innerText =
//             moisture + "%";

//     }

// }



// /* =========================================
//    6. CROP DISEASE
// ========================================= */

// function detectDisease() {

//     let crop =
//         document.getElementById("diseaseCrop").value;


//     let result = "";


//     if (crop === "rice") {

//         result =
//             "🌾 Rice Blast: Monitor leaves and use healthy seeds.";

//     }

//     else if (crop === "wheat") {

//         result =
//             "🌾 Wheat Rust: Use resistant varieties and monitor crop regularly.";

//     }

//     else if (crop === "cotton") {

//         result =
//             "🌿 Cotton Bollworm: Monitor plants and use integrated pest management.";

//     }

//     else if (crop === "banana") {

//         result =
//             "🍌 Panama Disease: Use disease-free planting material.";

//     }

//     else if (crop === "onion") {

//         result =
//             "🧅 Purple Blotch: Maintain field sanitation and proper spacing.";

//     }


//     document.getElementById("diseaseResult").innerText =
//         result;
// }



// /* =========================================
//    7. MARKET PRICE
// ========================================= */

// function getMarketPrice() {

//     let crop =
//         document.getElementById("marketCrop").value;


//     let price = "";


//     if (crop === "rice") {

//         price = "₹2,300 / quintal";

//     }

//     else if (crop === "wheat") {

//         price = "₹2,500 / quintal";

//     }

//     else if (crop === "cotton") {

//         price = "₹7,000 / quintal";

//     }

//     else if (crop === "onion") {

//         price = "₹2,000 / quintal";

//     }

//     else if (crop === "sugarcane") {

//         price = "₹3,500 / tonne";

//     }


//     document.getElementById("marketResult").innerText =
//         "💰 Demo Market Price: " + price;
// }



// /* =========================================
//    8. FARMING TIPS
// ========================================= */

// function getTip() {

//     let tips = [

//         "🌱 Test soil before applying fertilizer.",

//         "💧 Avoid unnecessary irrigation.",

//         "🌿 Use organic matter to improve soil health.",

//         "🐛 Monitor crops regularly for pests.",

//         "🌦️ Check weather before irrigation.",

//         "🌾 Use quality seeds.",

//         "🚜 Maintain proper crop spacing."

//     ];


//     let randomIndex =
//         Math.floor(Math.random() * tips.length);


//     document.getElementById("tipResult").innerText =
//         tips[randomIndex];
// }



// /* =========================================
//    9. SMART ALERT
// ========================================= */

// function generateAlert() {

//     let alertBox =
//         document.getElementById("alertBox");


//     alertBox.innerText =
//         "🌦️ Weather and soil conditions should be monitored regularly.";

// }


// generateAlert();




// ========================================
// CROP RECOMMENDATION
// ========================================

async function getCrop() {

    const soil = document.getElementById("soil").value;
    const season = document.getElementById("season").value;

    try {

        const response = await fetch("api/crop-recommend.php", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                soil: soil,
                season: season
            })

        });

        const data = await response.json();

        document.getElementById("cropResult").innerText =
            "Recommended Crop: " +
            data.crop +
            " — " +
            data.note;

        document.getElementById("dashboardCrop").innerText =
            data.crop;

    } catch (error) {

        document.getElementById("cropResult").innerText =
            "Error: " + error.message;

    }
}


// ========================================
// FERTILIZER
// ========================================

async function getFertilizer() {

    const crop = document.getElementById("cropName").value;

    try {

        const response = await fetch("api/fertilizer.php", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                crop: crop
            })

        });

        const data = await response.json();

        document.getElementById("fertilizerResult").innerText =
            "Recommended Fertilizer: " +
            data.fertilizer;

    } catch (error) {

        document.getElementById("fertilizerResult").innerText =
            "Error: " + error.message;

    }
}


// ========================================
// WEATHER
// ========================================

async function checkWeather() {

    try {

        const response =
            await fetch("api/weather.php?city=Nashik");

        const data = await response.json();

        document.getElementById("temperature").innerText =
            data.temperature + "°C";

        document.getElementById("humidity").innerText =
            data.humidity + "%";

        document.getElementById("condition").innerText =
            data.condition;

        document.getElementById("rainfall").innerText =
            data.rainfall + " mm";

        document.getElementById("dashboardTemp").innerText =
            data.temperature + "°C";

        document.getElementById("weatherResult").innerText =
            "Weather checked successfully.";

    } catch (error) {

        document.getElementById("weatherResult").innerText =
            "Error: " + error.message;

    }
}


// ========================================
// SOIL HEALTH
// ========================================

async function checkSoil() {

    const nitrogen =
        document.getElementById("nitrogen").value;

    const phosphorus =
        document.getElementById("phosphorus").value;

    const potassium =
        document.getElementById("potassium").value;

    const ph =
        document.getElementById("ph").value;

    try {

        const response = await fetch("api/soil.php", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                nitrogen: nitrogen,
                phosphorus: phosphorus,
                potassium: potassium,
                ph: ph

            })

        });

        const data = await response.json();

        document.getElementById("soilResult").innerText =
            data.message;

        document.getElementById("dashboardSoil").innerText =
            data.status;

    } catch (error) {

        document.getElementById("soilResult").innerText =
            "Error: " + error.message;

    }
}


// ========================================
// IRRIGATION
// ========================================

async function checkIrrigation() {

    const moisture =
        document.getElementById("moisture").value;

    try {

        const response = await fetch(
            "api/irrigation.php",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    moisture: moisture
                })

            }
        );

        const data = await response.json();

        document.getElementById("irrigationResult").innerText =
            data.decision;

        document.getElementById("dashboardMoisture").innerText =
            moisture + " %";

    } catch (error) {

        document.getElementById("irrigationResult").innerText =
            "Error: " + error.message;

    }
}


// ========================================
// DISEASE
// ========================================

async function detectDisease() {

    const crop =
        document.getElementById("diseaseCrop").value;

    try {

        const response = await fetch(
            "api/disease.php",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    crop: crop
                })

            }
        );

        const data = await response.json();

        document.getElementById("diseaseResult").innerText =
            data.disease + ": " + data.advice;

    } catch (error) {

        document.getElementById("diseaseResult").innerText =
            "Error: " + error.message;

    }
}


// ========================================
// MARKET PRICE
// ========================================

async function getMarketPrice() {

    const crop =
        document.getElementById("marketCrop").value;

    try {

        const response =
            await fetch(
                "api/market.php?crop=" +
                encodeURIComponent(crop)
            );

        const data = await response.json();

        if (data.length === 0) {

            document.getElementById("marketResult").innerText =
                "No market price available.";

            return;
        }

        let output = "";

        data.forEach(function(row) {

            output +=
                row.market_name +
                " : ₹" +
                row.price_per_kg +
                "/kg (" +
                row.recorded_on +
                ")<br>";

        });

        document.getElementById("marketResult").innerHTML =
            output;

    } catch (error) {

        document.getElementById("marketResult").innerText =
            "Error: " + error.message;

    }
}


// ========================================
// PROFIT CALCULATOR
// ========================================

async function calculateProfit() {

    const data = {

        quantity:
            document.getElementById("p_quantity").value,

        selling_price:
            document.getElementById("p_price").value,

        seed_cost:
            document.getElementById("seed_cost").value,

        fertilizer_cost:
            document.getElementById("fertilizer_cost").value,

        pesticide_cost:
            document.getElementById("pesticide_cost").value,

        labor_cost:
            document.getElementById("labor_cost").value,

        irrigation_cost:
            document.getElementById("irrigation_cost").value,

        transport_cost:
            document.getElementById("transport_cost").value,

        other_cost:
            document.getElementById("other_cost").value
    };


    try {

        const response = await fetch(
            "api/profit.php",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            }
        );


        const result = await response.json();


        document.getElementById("profitResult").innerHTML =

            "💰 Revenue: ₹" +
            result.revenue +

            "<br>💸 Total Cost: ₹" +
            result.total_cost +

            "<br>🌾 Estimated Profit: ₹" +
            result.profit +

            "<br>📊 Profit Margin: " +
            result.margin +
            "%";


    } catch (error) {

        document.getElementById("profitResult").innerText =
            "Error: " + error.message;

    }

}


// ========================================
// FARMING TIP
// ========================================

async function getTip() {

    try {

        const response =
            await fetch("api/tip.php");

        const data = await response.json();

        document.getElementById("tipResult").innerText =
            "🌾 " + data.tip;

    } catch (error) {

        document.getElementById("tipResult").innerText =
            "Error: " + error.message;

    }
}