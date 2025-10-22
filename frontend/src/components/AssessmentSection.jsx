import React, { useState } from 'react';
import axios from "axios";

// Theme styles
const pastelGradient = {
  background: "linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)"
};

const cardStyle = {
  background: "#fff",
  borderRadius: "1.2rem",
  boxShadow: "0 2px 34px #ececec",
  padding: "3rem 2rem",
  maxWidth: 1200,                 // Increased from 850 to 1200
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

  const fields = [
    { name: " Age (yrs)", type: "number" },
    { name: "Weight (Kg)", type: "number" },
    { name: "Height(Cm) ", type: "number" },
    { name: "BMI", type: "number" },
    { name: "Pulse rate(bpm) ", type: "number" },
    { name: "RR (breaths/min)", type: "number" },
    { name: "Hb(g/dl)", type: "number" },
    { name: "Cycle(R/I)", type: "cycle" },  
    { name: "Cycle length(days)", type: "number" },
    { name: "Marraige Status (Yrs)", type: "number" },
    { name: "Pregnant(Y/N)", type: "yesno" },
    { name: "No. of abortions", type: "number" },
    { name: "Weight gain(Y/N)", type: "yesno" },
    { name: "hair growth(Y/N)", type: "yesno" },
    { name: "Skin darkening (Y/N)", type: "yesno" },
    { name: "Hair loss(Y/N)", type: "yesno" },
    { name: "Pimples(Y/N)", type: "yesno" },
    { name: "Fast food (Y/N)", type: "yesno" },
    { name: "Reg.Exercise(Y/N)", type: "yesno" }
  ];

  const handleChange = (e, type) => {
    let value = e.target.value;
    if (type === "yesno") {
      value = value.toLowerCase() === "yes" ? 1 : 0;
    } else if (type === "cycle") {
      value = value.toLowerCase() === "regular" ? 1 : 0;
    } else if (type === "number") {
      value = parseFloat(value);
    }
    setInputs({ ...inputs, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post("http://localhost:5000/predict", inputs);
      setResult(res.data);
    } catch (err) {
      setResult({ error: "Something went wrong!" });
    }
    setLoading(false);
  };

  // Layout: 3 columns on large screens, 2 on medium, 1 on mobile
  return (
    <div className="container py-5" style={{ minHeight: '100vh' }}>
      {/* Section Heading & Subtitle */}
      <div style={pastelGradient} className="rounded-4 p-5 mb-5 text-center shadow-sm">
        <h1 className="fw-bold mb-3" style={{ color: "#2a254d" }}>PCOS Prediction Assessment</h1>
        <p className="lead" style={{ color: "#42404b" }}>
          Enter your details for a personalized PCOS risk prediction.
        </p>
      </div>

      {/* Carded Form with multi-column layout */}
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
                ) : field.type === "cycle" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    onChange={e => handleChange(e, "cycle")}
                    style={inputBaseStyle}
                    required
                  >
                    <option value="">Select</option>
                    <option>Regular</option>
                    <option>Irregular</option>
                  </select>
                ) : (
                  <input
                    id={field.name}
                    type="number"
                    step="any"
                    name={field.name}
                    placeholder="Enter value"
                    onChange={e => handleChange(e, "number")}
                    style={inputBaseStyle}
                    required
                  />
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

      {/* Disclaimer */}
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
