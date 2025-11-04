// contactServer.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const filePath = path.join(__dirname, 'contacts.csv');

    // Prepare CSV row, escape quotes
    const csvRow = `"${name.replace(/"/g, '""')}","${email.replace(/"/g, '""')}","${subject.replace(/"/g, '""')}","${message.replace(/"/g, '""')}"\n`;

    // Write headers if file doesn't exist
    if (!fs.existsSync(filePath)) {
      const headers = '"Name","Email","Subject","Message"\n';
      fs.writeFileSync(filePath, headers);
    }

    // Append row
    fs.appendFileSync(filePath, csvRow);

    res.json({ status: 'success' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
