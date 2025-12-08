const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bungash';

// Models
const User = require('./models/User');
const Color = require('./models/Color');

// Routes
const authRouter = require('./routes/auth');
const colorsRouter = require('./routes/colors');

app.use('/api/auth', authRouter);
app.use('/api/colors', colorsRouter);

app.get('/', (req, res) => res.json({ ok: true, message: 'Bungash Designs API' }));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log('Server running on port', PORT));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    // Start server even if DB not connected (for local development where DB will be added later)
    app.listen(PORT, () => console.log('Server running on port', PORT, '- DB not connected'));
  });
