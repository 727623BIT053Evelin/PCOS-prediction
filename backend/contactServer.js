const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const communityAuthRoutes = require('./communityAuth'); 
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/community/auth', communityAuthRoutes);

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
