const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bungash';

async function run() {
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const email = 'admin@bungash.com';
  const password = '123';
  let user = await User.findOne({ email });
  if (user) {
    console.log('Admin already exists');
    process.exit(0);
  }
  const hashed = await bcrypt.hash(password, 10);
  user = new User({ email, password: hashed, role: 'admin' });
  await user.save();
  console.log('Admin user created:', email);
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
