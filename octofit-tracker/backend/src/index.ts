// Entry point for Octofit Tracker backend
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/octofit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as any)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Octofit Tracker API running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
