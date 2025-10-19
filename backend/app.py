from flask import Flask, request, jsonify
import joblib
import json
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allows frontend React to talk to backend

# ==========================
# Load Model and Preprocessors
# ==========================
MODEL_PATH = "models/pcos_model_gb.joblib"
SCALER_PATH = "models/scaler_full.joblib"
SELECTED_FEATURES_PATH = "models/selected_features.json"
FINAL_FEATURE_COLS_PATH = "models/final_feature_cols.json"

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

with open(SELECTED_FEATURES_PATH) as f:
    selected_features = json.load(f)

with open(FINAL_FEATURE_COLS_PATH) as f:
    FINAL_FEATURE_COLS = json.load(f)

# ==========================
# Predict Function
# ==========================
def predict_new_pcos_case(new_data):
    """Predicts PCOS status for a single new data point."""
    new_df = pd.DataFrame([new_data], columns=FINAL_FEATURE_COLS)

    # Scale the full data
    new_df_scaled = pd.DataFrame(
        scaler.transform(new_df),
        columns=FINAL_FEATURE_COLS
    )

    # Apply feature selection
    new_df_selected = new_df_scaled[selected_features]

    # Predict
    prediction = model.predict(new_df_selected)[0]
    probability = model.predict_proba(new_df_selected)[0][1]

    status = "Positive for PCOS" if prediction == 1 else "Negative for PCOS"
    return {"status": status, "probability": round(float(probability), 4)}

# ==========================
# API Routes
# ==========================
@app.route("/")
def home():
    return jsonify({"message": "PCOS Prediction API is running!"})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        # Ensure all required keys are present
        input_data = [float(data.get(col, 0)) for col in FINAL_FEATURE_COLS]
        input_dict = dict(zip(FINAL_FEATURE_COLS, input_data))

        result = predict_new_pcos_case(input_dict)
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ==========================
# Run App
# ==========================
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
