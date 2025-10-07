import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE_URL = 'http://localhost:5000/api';

function App() {
  const [features, setFeatures] = useState([]);
  const [userInput, setUserInput] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/features`);
      setFeatures(response.data.selected_features);
      
      // Initialize user input with null values
      const initialInput = {};
      response.data.selected_features.forEach(feature => {
        initialInput[feature] = null;
      });
      setUserInput(initialInput);
    } catch (error) {
      console.error('Error fetching features:', error);
    }
  };

  const handleInputChange = (feature, value) => {
    setUserInput(prev => ({
      ...prev,
      [feature]: value === '' ? null : value
    }));
  };

  const handlePredict = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/predict`, userInput);
      setPrediction(response.data);
      setMissingFields(response.data.missing_fields);
    } catch (error) {
      console.error('Prediction error:', error);
      alert('Error making prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderInputField = (feature) => {
    if (feature.includes('(Y/N)')) {
      return (
        <select 
          value={userInput[feature] || ''} 
          onChange={(e) => handleInputChange(feature, e.target.value)}
          className="form-select"
        >
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      );
    } else if (feature.includes('Age')) {
      return (
        <input
          type="number"
          min="15"
          max="50"
          value={userInput[feature] || ''}
          onChange={(e) => handleInputChange(feature, e.target.value)}
          className="form-input"
          placeholder="Enter age (15-50)"
        />
      );
    } else if (feature.includes('Weight')) {
      return (
        <input
          type="number"
          step="0.1"
          min="30"
          max="150"
          value={userInput[feature] || ''}
          onChange={(e) => handleInputChange(feature, e.target.value)}
          className="form-input"
          placeholder="Enter weight in kg"
        />
      );
    } else if (feature.includes('Height')) {
      return (
        <input
          type="number"
          step="0.1"
          min="140"
          max="200"
          value={userInput[feature] || ''}
          onChange={(e) => handleInputChange(feature, e.target.value)}
          className="form-input"
          placeholder="Enter height in cm"
        />
      );
    } else if (feature.includes('BMI')) {
      return (
        <input
          type="number"
          step="0.1"
          min="15"
          max="40"
          value={userInput[feature] || ''}
          onChange={(e) => handleInputChange(feature, e.target.value)}
          className="form-input"
          placeholder="Enter BMI"
        />
      );
    } else if (feature.includes('Cycle')) {
      return (
        <input
          type="number"
          min="20"
          max="40"
          value={userInput[feature] || ''}
          onChange={(e) => handleInputChange(feature, e.target.value)}
          className="form-input"
          placeholder="Enter cycle length in days"
        />
      );
    } else if (feature.includes('Marriage')) {
      return (
        <input
          type="number"
          min="0"
          max="30"
          value={userInput[feature] || ''}
          onChange={(e) => handleInputChange(feature, e.target.value)}
          className="form-input"
          placeholder="Enter years married"
        />
      );
    } else {
      return (
        <input
          type="number"
          step="0.1"
          value={userInput[feature] || ''}
          onChange={(e) => handleInputChange(feature, e.target.value)}
          className="form-input"
          placeholder={`Enter ${feature}`}
        />
      );
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <h1>🏥 Non-Invasive PCOS Prediction</h1>
        <p>Early Detection Using Machine Learning - 95.89% Accuracy</p>
      </header>

      <div className="app-container">
        {/* Features Info */}
        <div className="info-section">
          <h2>🔍 Features Used for Prediction</h2>
          <p>The model uses these {features.length} most important non-invasive features:</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={feature} className="feature-item">
                {index + 1}. {feature}
              </div>
            ))}
          </div>
        </div>

        {/* User Input Section */}
        <div className="input-section">
          <h2>📝 Enter Your Information</h2>
          <p>Please provide the following information. Leave blank if unknown.</p>

          <div className="input-grid">
            {features.map(feature => (
              <div key={feature} className="input-group">
                <label>{feature}</label>
                {renderInputField(feature)}
              </div>
            ))}
          </div>

          {missingFields.length > 0 && (
            <div className="warning-box">
              <h3>⚠️ Missing Recommended Fields</h3>
              <p>The following features are recommended but not provided:</p>
              <ul>
                {missingFields.map(field => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
              <p>Prediction will proceed with available data, but accuracy may be affected.</p>
            </div>
          )}

          <button 
            onClick={handlePredict} 
            disabled={loading}
            className="predict-button"
          >
            {loading ? '🔮 Predicting...' : '🚀 Predict PCOS Risk'}
          </button>
        </div>

        {/* Prediction Results */}
        {prediction && (
          <div className={`prediction-section ${prediction.risk_level === 'HIGH' ? 'high-risk' : 'low-risk'}`}>
            <h2>🔮 Prediction Results</h2>
            
            <div className="prediction-card">
              <h3 className={prediction.risk_level === 'HIGH' ? 'risk-high' : 'risk-low'}>
                {prediction.risk_level === 'HIGH' ? '⚠️ HIGH RISK OF PCOS DETECTED' : '✅ LOW RISK OF PCOS'}
              </h3>
              
              <p className="prediction-message">{prediction.message}</p>
              
              <div className="prediction-metrics">
                <div className="metric">
                  <span className="metric-label">Confidence:</span>
                  <span className="metric-value">{prediction.confidence}%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Model Accuracy:</span>
                  <span className="metric-value">95.89%</span>
                </div>
              </div>

              <div className="recommendation">
                <h4>Recommendation:</h4>
                <p>
                  {prediction.risk_level === 'HIGH' 
                    ? 'Please consult with a healthcare professional for proper diagnosis and treatment planning.'
                    : 'Continue maintaining a healthy lifestyle. Regular check-ups are always recommended.'
                  }
                </p>
              </div>
            </div>

            {/* Feature Importance */}
            <div className="feature-importance">
              <h3>📊 Most Influential Factors</h3>
              <div className="importance-grid">
                {Object.entries(prediction.feature_importance)
                  .sort(([,a], [,b]) => b - a)
                  .slice(0, 5)
                  .map(([feature, importance]) => (
                    <div key={feature} className="importance-item">
                      <span className="feature-name">{feature}</span>
                      <span className="importance-value">{(importance * 100).toFixed(1)}%</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Information Section */}
        <div className="info-sections">
          <div className="info-card">
            <h3>💡 About PCOS</h3>
            <div className="info-content">
              <div>
                <h4>Common Symptoms:</h4>
                <ul>
                  <li>Irregular periods</li>
                  <li>Excess hair growth</li>
                  <li>Acne and oily skin</li>
                  <li>Weight gain</li>
                  <li>Hair loss</li>
                  <li>Skin darkening</li>
                  <li>Fertility issues</li>
                </ul>
              </div>
              <div>
                <h4>Health Implications:</h4>
                <ul>
                  <li>Type 2 diabetes risk</li>
                  <li>Heart disease risk</li>
                  <li>Endometrial cancer risk</li>
                  <li>Depression and anxiety</li>
                  <li>Sleep apnea</li>
                  <li>Infertility issues</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="disclaimer-card">
            <h3>⚠️ Important Disclaimer</h3>
            <p>
              This application is for educational and informational purposes only. 
              It is not a substitute for professional medical advice, diagnosis, or treatment. 
              Always seek the advice of your physician or other qualified health provider 
              with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;