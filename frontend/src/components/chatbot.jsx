import { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import axios from "axios";

function ChatBot() {
  const aimodel_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDaoFcWEAysJExOSsrfTN27PlSARiIGHdo";
  
  const [Suggestions] = useState([
    "What foods should I avoid if I have PCOS?",
    "Best diet plan for PCOS weight loss?",
    "Does PCOS cause infertility?",
  ]);
  const [input, setInput] = useState("");
  const [message, Setmessage] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null);

  async function handleSubmit() {
    if (!input.trim()) return;
    let usermessage = { sender: "user", text: input };
    Setmessage((prev) => [...prev, usermessage]);

    try {
      const response = await axios.post(aimodel_url, {
        contents: [
          {
            parts: [
              { text: "Answer briefly in 4-5 sentences only: " + input }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 200,
          temperature: 0.5
        }
      });

      if (response.data) {
        let aimessage = {
          sender: "AI",
          text: response.data.candidates[0].content.parts[0].text,
        };
        Setmessage((prev) => [...prev, aimessage]);
      }
    } catch (error) {
      let errormessage = {
        sender: "AI",
        text: "Sorry! I couldn't answer this question.",
      };
      Setmessage((prev) => [...prev, errormessage]);
    }
    setInput("");
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      {/* Floating Chat Button - Always Visible */}
      <button 
        className={`chat-floating-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="AI Assistant"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window - Opens on Click */}
      {isOpen && (
        <div className="chat-widget-container">
          {/* Chat Header */}
          <div className="chat-widget-header">
            <div className="header-content">
              <span className="ai-icon">🤖</span>
              <div>
                <h5 className="header-title">PCOS AI Assistant</h5>
                <p className="header-subtitle">Ask me anything about PCOS</p>
              </div>
            </div>
          </div>

          {/* Suggestions - Show only if no messages */}
          {message.length === 0 && (
            <div className="suggestion-widget-container">
              <p className="suggestion-title">Quick Questions:</p>
              {Suggestions.map((currElement, index) => (
                <button
                  className="suggestion-widget-btn"
                  key={index}
                  onClick={() => setInput(currElement)}
                >
                  {currElement}
                </button>
              ))}
            </div>
          )}

          {/* Chat Body */}
          <div className="chat-widget-body">
            {message.length === 0 ? (
              <div className="empty-state">
                <span className="empty-icon">💬</span>
                <p>Start a conversation with your AI assistant</p>
              </div>
            ) : (
              message.map((currElement, index) => (
                <div
                  key={index}
                  className={`chat-widget-bubble ${currElement.sender === "user" ? "user" : "ai"}`}
                >
                  {currElement.text}
                </div>
              ))
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input Area */}
          <div className="chat-widget-footer">
            <input
              type="text"
              placeholder="Ask me your doubts..."
              className="chat-widget-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <button className="send-widget-btn" onClick={handleSubmit}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
