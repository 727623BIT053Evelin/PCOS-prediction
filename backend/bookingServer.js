// bookingServer.js
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

dotenv.config();
console.log("Loaded Gmail:", process.env.GMAIL_USER);

const app = express();
const PORT = process.env.PORT || 40001;

app.use(cors());
app.use(bodyParser.json());

const bookingsFile = path.join(path.resolve(), 'bookings.csv');

// Configure transporter with environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

// API to create a booking
app.post('/api/bookings', async (req, res) => {
    const { name, email, doctor } = req.body;
    if (!name || !email || !doctor) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const entry = `${name},${email},${doctor}\n`;

    try {
        await fs.appendFile(bookingsFile, entry, { encoding: 'utf8' });
        // Send automatic confirmation email
        const mailOptions = {
            from: `"PCOS Support" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: 'Booking Request Received',
            text: `Hi ${name},
            
        Your appointment request with ${doctor} has been received.

        Our team will contact you with further details and exact appointment timing within the next 24 hours.

        If you have questions, reply to this email.

        Thank you for reaching out to PCOS Support!`,
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Booking received. Email updates soon!' });
    } catch (error) {
        console.error('Error processing booking:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// API to get all bookings
app.get('/api/bookings', async (req, res) => {
    try {
        try {
            await fs.access(bookingsFile);
        } catch {
            return res.json([]); // no booking file yet
        }
        const content = await fs.readFile(bookingsFile, 'utf8');
        const bookings = content
            .split('\n')
            .filter(Boolean)
            .map(line => {
                const [name, email, doctor] = line.split(',');
                return { name, email, doctor };
            });
        res.json(bookings);
    } catch (error) {
        console.error('Error reading bookings:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// API to send admin message
app.post('/api/bookings/message', async (req, res) => {
    const { email, message } = req.body;
    if (!email || !message) {
        return res.status(400).json({ success: false, message: 'Email and message are required' });
    }
    try {
        const info = await transporter.sendMail({
            from: `"PCOS Support" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: 'Message from Admin',
            text: message,
        });
        res.json({ success: true, info });
    } catch (error) {
        console.error('Error sending admin message:', error);
        res.status(500).json({ success: false, message: 'Failed to send message' });
    }
});

app.listen(PORT, () => console.log(`Booking server running on port ${PORT}`));
