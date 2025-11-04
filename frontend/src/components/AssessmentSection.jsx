import React, { useState } from 'react';
import axios from "axios";

// The EXACT columns required by backend (in order)
const FINAL_FEATURE_COLS = [
  "Age (yrs)", "Weight (Kg)", "Height(Cm)", "BMI", "Pulse rate(bpm)", "RR (breaths/min)", "Hb(g/dl)", "Cycle length(days)", 
  "Marraige Status (Yrs)", "Pregnant(Y/N)", "Weight gain(Y/N)", "hair growth(Y/N)", "Skin darkening (Y/N)", 
  "Pimples(Y/N)", "Fast food (Y/N)"
];

// Form field configurations (for user-guidance)
const fields = [
  { name: "Age (yrs)", type: "number", min: 10, max: 60, hint: "10–60 years", placeholder: "e.g. 25" },
  { name: "Weight (Kg)", type: "number", min: 30, max: 150, hint: "30–150 Kg", placeholder: "e.g. 55" },
  { name: "Height(Cm)", type: "number", min: 100, max: 200, hint: "100–200 cm", placeholder: "e.g. 162" },
  { name: "BMI", type: "number", min: 10, max: 40, hint: "Healthy range: 18.5–24.9", placeholder: "e.g. 22.3" },
  { name: "Pulse rate(bpm)", type: "number", min: 40, max: 120, hint: "Normal: 60–100 bpm", placeholder: "e.g. 78" },
  { name: "RR (breaths/min)", type: "number", min: 8, max: 30, hint: "Normal: 12–20 breaths/min", placeholder: "e.g. 16" },
  { name: "Hb(g/dl)", type: "number", min: 8, max: 20, hint: "Normal (female): 12–15 g/dl", placeholder: "e.g. 13.5" },
  { name: "Menstruation Length(days)", type: "number", min: 2, max: 10, hint: "Normal range: 3–7 days", placeholder: "e.g. 5" },
  { name: "Marraige Status (Yrs)", type: "number", min: 0, max: 20, hint: "0–20 years", placeholder: "e.g. 3" },
  { name: "Pregnant(Y/N)", type: "yesno" },
  { name: "Weight gain(Y/N)", type: "yesno" },
  { name: "hair growth(Y/N)", type: "yesno" },
  { name: "Skin darkening (Y/N)", type: "yesno" },
  { name: "Pimples(Y/N)", type: "yesno" },
  { name: "Fast food (Y/N)", type: "yesno" }
];

const pastelGradient = {
  background: "linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)"
};
const cardStyle = {
  background: "#fff",
  borderRadius: "1.2rem",
  boxShadow: "0 2px 34px #ececec",
  padding: "3rem 2rem",
  maxWidth: 1200,
  margin: "0 auto 2.5rem auto",
};
const labelStyle = {
  color: "#2a2347",
  fontWeight: "700",
  marginBottom: "0.5rem",
  display: "block",
  fontSize: "1.08rem"
};
const inputBaseStyle = {
  borderRadius: '0.7rem',
  border: '1.5px solid #e8e0fa',
  padding: '0.9rem 1.1rem',
  fontSize: '1.07rem',
  width: '100%',
  background: '#f8f5ff',
  marginBottom: "0.3rem"
};
const buttonStyle = {
  backgroundColor: "#a259e8",
  border: "none",
  color: "#fff",
  padding: "0.85rem 2.5rem",
  fontSize: "1.12rem",
  borderRadius: "2rem",
  cursor: "pointer",
  fontWeight: 600,
  marginTop: "0.4rem",
  boxShadow:'0 2px 8px #eedeff',
  width: '100%',
  maxWidth: '250px'
};
const resultBoxStyle = {
  marginTop: "2.2rem",
  background: "#f3e7fa",
  borderRadius: "1rem",
  padding: "1.1rem 1.6rem",
  textAlign: "center",
  color: "#763ac2",
  fontWeight: 'bold',
  fontSize: "1.12rem",
  boxShadow: '0 1px 7px #e2d7fa'
};

export default function AssessmentSection({ setActiveSection }) {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes to keep state
  const handleChange = (e, type) => {
    let value = e.target.value;
    if (type === "yesno") {
      value = value.toLowerCase() === "yes" ? 1 : 0;
    } else if (type === "number") {
      const numValue = parseFloat(value);
      value = !isNaN(numValue) ? numValue : "";
    }
    setInputs({ ...inputs, [e.target.name]: value });
  };

  // When predict is clicked
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      // Construct input data in exactly FINAL_FEATURE_COLS order and keys
      const inputData = {};
      FINAL_FEATURE_COLS.forEach(col => {
        // Use entered value or 0 if not set
        let val = inputs[col];
        // parse to float for numbers, else just value
        if (typeof val === "undefined" || val === "") {
          val = 0;
        }
        inputData[col] = typeof val === "string" && !isNaN(val) ? parseFloat(val) : val;
      });
      const res = await axios.post("http://localhost:5000/predict", inputData, {
        headers: { "Content-Type": "application/json" }
      });
      setResult(res.data);
    } catch (err) {
      setResult({ error: "Something went wrong!" });
    }
    setLoading(false);
  };

  return (
    <div className="container py-5" style={{ minHeight: '100vh' }}>
      <div style={pastelGradient} className="rounded-4 p-5 mb-5 text-center shadow-sm">
        <h1 className="fw-bold mb-3" style={{ color: "#2a254d" }}>PCOS Prediction Assessment</h1>
        <p className="lead" style={{ color: "#42404b" }}>
          Enter your details for a personalized PCOS risk prediction.
        </p>
      </div>

      <div style={cardStyle}>
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {fields.map((field, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <label htmlFor={field.name} style={labelStyle}>
                  {field.name.trim()}
                </label>
                {field.type === "yesno" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    onChange={e => handleChange(e, "yesno")}
                    style={inputBaseStyle}
                    required
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                ) : (
                  <>
                    <input
                      id={field.name}
                      type="number"
                      step="any"
                      name={field.name}
                      placeholder={field.placeholder || "Enter value"}
                      min={field.min}
                      max={field.max}
                      onChange={e => handleChange(e, "number")}
                      style={inputBaseStyle}
                      required
                    />
                    {field.hint && (
                      <div style={{
                        fontSize: "0.94em",
                        color: "#6b7280",
                        marginTop: "2px",
                        marginBottom: "2px"
                      }}>
                        {field.hint}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:'1.5rem' }}>
            <button
              disabled={loading}
              type="submit"
              style={buttonStyle}
            >
              {loading ? "Predicting..." : "Predict PCOS"}
            </button>
          </div>
        </form>
        {result && (
          <div style={resultBoxStyle}>
            {result.error ? (
              <span style={{ color: "red" }}>{result.error}</span>
            ) : (
              <>
                <h3 style={{ color: '#a259e8' }}>{result.status}</h3>
                <p>Probability: {result.probability}</p>
              </>
            )}
          </div>
        )}
      </div>

      <div
        className="mt-4"
        style={{
          background: "#fffbe7",
          color: "#946300",
          borderRadius: "1rem",
          padding: "1rem 1.5rem",
          boxShadow: "0 1px 7px #efe7c8",
          maxWidth: 790,
          margin: "2rem auto 0 auto",
          fontSize: "1rem",
        }}
      >
        <b>Disclaimer:</b> This assessment is for informational purposes and does not constitute medical advice. Only a healthcare professional can diagnose PCOS through medical evaluation.
      </div>
    </div>
  );
}
