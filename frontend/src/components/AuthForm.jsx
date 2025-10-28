import React, { useState } from "react";

export default function AuthForm({ mode = "login", onAuth, close }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);

  const toggleMode = () => {
    setError("");
    setForm({ name: "", email: "", password: "" });
    setCurrentMode(currentMode === "login" ? "signup" : "login");
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const endpoint = currentMode === "signup" ? "/community/auth/signup" : "/community/auth/login";
    let payload =
      currentMode === "signup"
        ? { name: form.name, email: form.email, password: form.password }
        : { email: form.email, password: form.password };

    try {
      const res = await fetch(`http://localhost:4000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to authenticate");
        setLoading(false);
        return;
      }
      onAuth(data.user, data.token);
      handleClose();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  const handleClose = () => {
    setForm({ name: "", email: "", password: "" });
    setError("");
    setLoading(false);
    close();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: 30,
          borderRadius: 12,
          maxWidth: 360,
          width: "90%",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ color: "#a259e8", marginBottom: 20 }}>
          {currentMode === "signup" ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          {currentMode === "signup" && (
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ display: "block", width: "100%", marginBottom: 15, padding: 8, fontSize: 16 }}
              disabled={loading}
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ display: "block", width: "100%", marginBottom: 15, padding: 8, fontSize: 16 }}
            disabled={loading}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ display: "block", width: "100%", marginBottom: 15, padding: 8, fontSize: 16 }}
            disabled={loading}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              backgroundColor: "#a259e8",
              border: "none",
              color: "white",
              fontSize: 18,
              borderRadius: 8,
              cursor: loading ? "not-allowed" : "pointer",
            }}
            disabled={loading}
          >
            {loading ? "Please wait..." : currentMode === "signup" ? "Create Account" : "Log In"}
          </button>
          {error && (
            <div style={{ color: "red", marginTop: 15, textAlign: "center" }}>{error}</div>
          )}
          <div style={{ marginTop: 12, textAlign: "center" }}>
            <button
              type="button"
              onClick={toggleMode}
              style={{
                background: "none",
                border: "none",
                color: "#a259e8",
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: 14,
              }}
              tabIndex={-1}
            >
              {currentMode === "signup" ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
            </button>
          </div>
          <button
            type="button"
            onClick={handleClose}
            style={{
              marginTop: 12,
              background: "none",
              border: "none",
              color: "#a259e8",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: 14,
              display: "block",
              width: "100%",
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
