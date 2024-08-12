const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'flashcard_db',
  multipleStatements: true // Allows running multiple queries in one go
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Create flashcards table if it doesn't exist
db.query(`
  CREATE TABLE IF NOT EXISTS flashcards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err);
    throw err;
  }
});

// API Endpoints
app.get('/api/flashcards', (req, res) => {
  db.query('SELECT * FROM flashcards', (err, results) => {
    if (err) {
      console.error('Error fetching flashcards:', err);
      return res.status(500).json({ error: 'Failed to fetch flashcards' });
    }
    res.json(results);
  });
});

app.post('/api/flashcards', (req, res) => {
  console.log('Received POST request:', req.body);
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: 'Question and answer are required' });
  }

  const query = 'INSERT INTO flashcards (question, answer) VALUES (?, ?)';
  console.log('Executing query:', query);

  db.query(query, [question, answer], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to insert data' });
    }
    console.log('Data inserted, ID:', result.insertId);
    res.json({ id: result.insertId, question, answer });
  });
});

app.put('/api/flashcards/:id', (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: 'Question and answer are required' });
  }

  const query = 'UPDATE flashcards SET question = ?, answer = ? WHERE id = ?';
  console.log('Executing query:', query);

  db.query(query, [question, answer, id], (err) => {
    if (err) {
      console.error('Error updating data:', err);
      return res.status(500).json({ error: 'Failed to update data' });
    }
    console.log('Data updated, ID:', id);
    res.json({ id, question, answer });
  });
});

app.delete('/api/flashcards/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM flashcards WHERE id = ?';
  console.log('Executing query:', query);

  db.query(query, [id], (err) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).json({ error: 'Failed to delete data' });
    }
    console.log('Data deleted, ID:', id);
    res.json({ id });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
