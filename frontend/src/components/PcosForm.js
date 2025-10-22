import React, { useState } from "react";
import axios from "axios";

const PcosForm = () => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Define all fields with their type
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


  // Handle input changes
  const handleChange = (e, type) => {
    let value = e.target.value;

    // Convert Yes/No to 1/0
    if (type === "yesno") {
      value = value.toLowerCase() === "yes" ? 1 : 0;
    } 
    // Convert Cycle Regular/Irregular to 1/0
    else if (type === "cycle") {
      value = value.toLowerCase() === "regular" ? 1 : 0;
    } 
    // Convert number input to float
    else if (type === "number") {
      value = parseFloat(value);
    }

    setInputs({
      ...inputs,
      [e.target.name]: value
    });
  };

  // Handle form submission
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
            <label>{field.name}</label>

            {field.type === "yesno" ? (
              <select
                name={field.name}
                onChange={(e) => handleChange(e, "yesno")}
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            ) : field.type === "cycle" ? (
              <select
                name={field.name}
                onChange={(e) => handleChange(e, "cycle")}
                required
              >
                <option value="">Select</option>
                <option value="Regular">Regular</option>
                <option value="Irregular">Irregular</option>
              </select>
            ) : (
              <input
                type="number"
                step="any"
                name={field.name}
                placeholder="Enter value"
                onChange={(e) => handleChange(e, "number")}
                required
              />
            )}
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
