import React, { useEffect, useState } from 'react';

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [info, setInfo] = useState('');

  // Fetch bookings from backend
  useEffect(() => {
    fetch('http://localhost:40001/api/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error('Error fetching bookings:', err));
  }, []);

  // Handle sending message to selected user
  const handleSendMessage = async () => {
    if (!selectedBooking || !messageText.trim()) return;

    // Compose message with name and doctor details automatically included
    const fullMessage =
      `Dear ${selectedBooking.name},

You booked an appointment with ${selectedBooking.doctor}.

${messageText}

Best regards,
PCOS Support Team`;

    try {
      const res = await fetch('http://localhost:40001/api/bookings/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: selectedBooking.email, message: fullMessage }),
      });

      const result = await res.json();
      if (result.success) {
        setInfo('Message sent successfully!');
        setMessageText('');
        setSelectedBooking(null);
      } else {
        setInfo('Failed to send message.');
      }
    } catch (err) {
      setInfo('Error sending message.');
      console.error(err);
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: 700 }}>
      <h2 className="mb-4" style={{ color: '#a259e8' }}>Admin Booking Management</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Doctor Booked</th>
            <th>Send Message</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(({ name, email, doctor }, idx) => (
            <tr key={idx}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{doctor}</td>
              <td>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => setSelectedBooking({ name, email, doctor })}
                >
                  Write
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBooking && (
        <div className="mt-4">
          <h5>Send Message to:</h5>
          <p>
            <strong>Name:</strong> {selectedBooking.name}<br />
            <strong>Email:</strong> {selectedBooking.email}<br />
            <strong>Doctor Booked:</strong> {selectedBooking.doctor}
          </p>
          <textarea
            rows={4}
            className="form-control mb-2"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Type your message here (your note will be appended to name and doctor info)..."
          />
          <button className="btn btn-primary me-2" onClick={handleSendMessage}>
            Send
          </button>
          <button className="btn btn-secondary" onClick={() => setSelectedBooking(null)}>
            Cancel
          </button>
          {info && <p className="mt-2">{info}</p>}
        </div>
      )}
    </div>
  );
}
