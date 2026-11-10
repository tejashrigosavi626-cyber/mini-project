from flask import Flask, render_template, request, jsonify
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

app.secret_key = os.getenv(
    "SECRET_KEY",
    "agrosmart-secret-key"
)


# ---------------- DATABASE CONNECTION ----------------

def get_db_connection():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST", "localhost"),
        port=int(os.getenv("DB_PORT", 3306)),
        user=os.getenv("DB_USER", "root"),
        password=os.getenv("DB_PASSWORD", ""),
        database=os.getenv("DB_NAME", "agrosmart")
    )


# ---------------- HOME PAGE ----------------

@app.route("/")
def home():
    return render_template("index.html")


# ---------------- CROP RECOMMENDATION ----------------

@app.route("/api/crop-recommend", methods=["POST"])
def crop_recommend():

    data = request.get_json()

    soil = data.get("soil", "").lower()
    season = data.get("season", "").lower()

    if soil == "black" and season == "rainy":
        crop = "Cotton 🌱"
        note = "Black soil and rainy season are suitable for cotton."

    elif soil == "alluvial" and season == "rainy":
        crop = "Rice 🌾"
        note = "Alluvial soil with rainy conditions is suitable for rice."

    elif soil == "red" and season == "summer":
        crop = "Groundnut 🌰"
        note = "Red soil and summer conditions are suitable for groundnut."

    elif soil == "black" and season == "winter":
        crop = "Wheat 🌾"
        note = "Wheat can be grown in suitable winter conditions."

    else:
        crop = "Wheat 🌾"
        note = "Wheat is suggested as a general recommendation."

    return jsonify({
        "crop": crop,
        "note": note
    })


# ---------------- FERTILIZER ----------------

@app.route("/api/fertilizer", methods=["POST"])
def fertilizer():

    data = request.get_json()
    crop = data.get("crop", "").lower()

    fertilizers = {
        "rice": "DAP + Urea",
        "wheat": "Urea + DAP",
        "cotton": "Urea + DAP + Potash",
        "sugarcane": "Urea + DAP + Potash",
        "banana": "Neem Cake + Vermicompost",
        "onion": "Compost + Poultry Manure"
    }

    result = fertilizers.get(
        crop,
        "Organic Compost"
    )

    return jsonify({
        "fertilizer": result
    })


# ---------------- IRRIGATION ----------------

@app.route("/api/irrigation", methods=["POST"])
def irrigation():

    data = request.get_json()

    try:
        moisture = float(data.get("moisture", 0))
    except:
        return jsonify({
            "error": "Invalid moisture value"
        }), 400

    if moisture < 30:
        decision = "💧 Irrigation Required"

    elif moisture < 60:
        decision = "🌱 Soil moisture is moderate"

    else:
        decision = "✅ Irrigation Not Required"

    return jsonify({
        "decision": decision
    })


# ---------------- DISEASE ----------------

@app.route("/api/disease", methods=["POST"])
def disease():

    data = request.get_json()

    crop = data.get("crop", "").lower()

    diseases = {
        "rice": (
            "Rice Blast",
            "Use recommended fungicide and maintain proper field drainage."
        ),

        "wheat": (
            "Wheat Rust",
            "Use suitable fungicide and monitor infected plants."
        ),

        "cotton": (
            "Cotton Leaf Spot",
            "Remove infected leaves and use recommended treatment."
        ),

        "banana": (
            "Panama Disease",
            "Remove infected plants and maintain proper soil drainage."
        ),

        "onion": (
            "Purple Blotch",
            "Maintain proper spacing and use recommended fungicide."
        )
    }

    result = diseases.get(
        crop,
        (
            "No Disease Information",
            "Please select a supported crop."
        )
    )

    return jsonify({
        "disease": result[0],
        "advice": result[1]
    })


# ---------------- WEATHER ----------------

@app.route("/api/weather")
def weather():

    city = request.args.get(
        "city",
        "Nashik"
    )

    # Demo weather data
    return jsonify({
        "city": city,
        "temperature": 30,
        "humidity": 65,
        "condition": "Sunny",
        "rainfall": 0
    })


# ---------------- MARKET PRICE ----------------

@app.route("/api/market")
def market():

    crop = request.args.get(
        "crop",
        ""
    )

    try:

        db = get_db_connection()
        cursor = db.cursor(dictionary=True)

        cursor.execute(
            """
            SELECT market_name,
                   price_per_kg,
                   recorded_on
            FROM market_prices
            WHERE LOWER(crop_name) = LOWER(%s)
            ORDER BY price_per_kg DESC
            """,
            (crop,)
        )

        rows = cursor.fetchall()

        cursor.close()
        db.close()

        return jsonify(rows)

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500


# ---------------- PROFIT CALCULATOR ----------------

@app.route("/api/profit", methods=["POST"])
def profit():

    data = request.get_json()

    def number(name):
        try:
            return float(data.get(name, 0))
        except:
            return 0

    quantity = number("quantity")
    selling_price = number("selling_price")

    seed_cost = number("seed_cost")
    fertilizer_cost = number("fertilizer_cost")
    pesticide_cost = number("pesticide_cost")
    labor_cost = number("labor_cost")
    irrigation_cost = number("irrigation_cost")
    transport_cost = number("transport_cost")
    other_cost = number("other_cost")

    revenue = quantity * selling_price

    total_cost = (
        seed_cost
        + fertilizer_cost
        + pesticide_cost
        + labor_cost
        + irrigation_cost
        + transport_cost
        + other_cost
    )

    estimated_profit = revenue - total_cost

    if revenue > 0:
        margin = (estimated_profit / revenue) * 100
    else:
        margin = 0

    return jsonify({
        "revenue": round(revenue, 2),
        "total_cost": round(total_cost, 2),
        "profit": round(estimated_profit, 2),
        "margin": round(margin, 2)
    })


# ---------------- RUN APPLICATION ----------------

if __name__ == "__main__":
    app.run(
        debug=True,
        host="127.0.0.1",
        port=5000
    )