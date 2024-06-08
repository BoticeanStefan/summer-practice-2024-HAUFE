// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectare la MongoDB
mongoose.connect('mongodb://localhost:27017/movie-recommendations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const recommendationSchema = new mongoose.Schema({
  title: String,
  link: String,
  message: String,
  platform: String,
  rating: Number,
  poster: String,
  likes: { type: Number, default: 0 },
  comments: [{ text: String }],
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

app.post('/api/recommendations', async (req, res) => {
  const recommendation = new Recommendation(req.body);
  await recommendation.save();
  res.send(recommendation);
});

app.get('/api/recommendations', async (req, res) => {
  const recommendations = await Recommendation.find();
  res.send(recommendations);
});


app.listen(5000, () => {
  console.log('Server running on port 5000');
});