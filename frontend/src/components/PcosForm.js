import React, { useState } from "react";
import axios from "axios";

const PcosForm = () => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fields = [
    "Age (yrs)",
    "Weight (Kg)",
    "Height(Cm) ",
    "BMI",
    "Pulse rate(bpm) ",
    "RR (breaths/min)",
    "Hb(g/dl)",
    "Cycle(R/I)",
    "Cycle length(days)",
    "Marraige Status (Yrs)",
    "Pregnant(Y/N)",
    "No. of abortions",
    "Weight gain(Y/N)",
    "hair growth(Y/N)",
    "Skin darkening (Y/N)",
    "Hair loss(Y/N)",
    "Pimples(Y/N)",
    "Fast food (Y/N)",
    "Reg.Exercise(Y/N)"
  ];

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
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

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {fields.map((field, idx) => (
          <div key={idx} className="input-field">
            <label>{field}</label>
            <input
              type="number"
              step="any"
              name={field}
              placeholder="Enter value"
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? "Predicting..." : "Predict PCOS"}
        </button>
      </form>

      {result && (
        <div className="result">
          {result.error ? (
            <p style={{ color: "red" }}>{result.error}</p>
          ) : (
            <>
              <h3>{result.status}</h3>
              <p>Probability: {result.probability}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PcosForm;
