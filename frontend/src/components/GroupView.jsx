import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function GroupView({ group, onClose }) {
  const [message, setMessage] = useState('');
  const [sentMessages, setSentMessages] = useState([]);

  if (!group) return null;

  const sendMessage = () => {
    if (message.trim() === '') return;
    // Add message to chat state for demonstration
    setSentMessages(prev => [...prev, { text: message, sender: 'You' }]);
    setMessage('');
    // Here you can also add real message sending logic (API call etc)
  };

  return (
    <div
      className="rounded-4 shadow p-4 position-relative"
      style={{
        minHeight: 480,
        background: 'linear-gradient(135deg, #f3e7fa 0%, #ffe5ee 100%)',
        border: '2px solid #a259e8',
        maxWidth: 520,
        margin: '0 auto',
        color: '#4b467e',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      
      <div className="d-flex align-items-center mb-3">
        <img
          src={group.img}
          alt={group.name}
          className="rounded-circle shadow"
          style={{ width: 60, height: 60, marginRight: 16, border: '2px solid #a259e8' }}
        />
        <div>
          <h3 style={{ color: '#a259e8', marginBottom: 0 }}>{group.name}</h3>
          <div className="text-secondary">{group.desc}</div>
        </div>
      </div>
      <hr />
      <div style={{ flexGrow: 1, overflowY: 'auto', marginBottom: 16 }}>
        {/* Example demo chat */}
        {sentMessages.length === 0 && (
          <div className="mt-3 mb-2 text-muted">
            Chat, posts, and resources for this group appear here.
          </div>
        )}
        {sentMessages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'You' ? 'right' : 'left', marginBottom: 8 }}>
            <span
              style={{
                background: msg.sender === 'You' ? '#fff' : '#e8ddf6',
                padding: '8px 16px',
                borderRadius: 16,
                fontWeight: 500,
                display: 'inline-block',
                color: '#4b467e',
                border: '1px solid #ccc',
                maxWidth: '75%',
                wordWrap: 'break-word',
              }}
            >
              {msg.sender}: {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 d-flex">
        <input
          type="text"
          placeholder="Type a message..."
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
          style={{ marginRight: 8 }}
        />
        <Button
          variant="light"
          style={{ border: '1px solid #a259e8', color: '#a259e8' }}
          onClick={sendMessage}
          disabled={message.trim().length === 0}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
