const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Sample in-memory flashcards data
let flashcards = [
  { id: 1, question: "What is React?", answer: "A JavaScript library for building user interfaces." },
  { id: 2, question: "What is useState?", answer: "A hook that allows you to have state variables in functional components." },
];

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/flashcards', (req, res) => {
  res.json(flashcards);
});

app.post('/api/flashcards', (req, res) => {
  const newFlashcard = req.body;
  flashcards.push(newFlashcard);
  res.status(201).json(newFlashcard);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
