import express from 'express';
import path from 'path';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __dirname = dirname(fileURLToPath(import.meta.url)); // Determine current directory
const app = express();

// app.use(express.static('public'))

// Enable CORS
app.use(cors());

// Helper function to load memes from the JSON file
const loadEmoticons = () => {
  const filePath = path.resolve(__dirname, 'Data.json');
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
// GET: Fetch all memes
app.get('/api/data', (req, res) => {
  try {
    const memes = loadEmoticons();
    res.json(memes);
  } catch (err) {
    console.error('Error reading file:', err);
    res.status(500).json({ error: 'Failed to read Data.json' });
  }
});
// GET: Fetch all types
app.get('/api/data/types', (req, res) => {
    try {
      const memes = loadEmoticons();
      const types = Object.keys(memes); // Extract the keys (types)
      res.json(types);
    } catch (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ error: 'Failed to retrieve types' });
    }
  });
  
app.get('/api/data/type/:type', (req, res) => {
  try {
    const memes = loadEmoticons();
    const type = req.params.type.toLowerCase(); // Ensure case-insensitivity
    const memesOfType = memes[type];

    if (!memesOfType) {
      return res.status(404).json({ error: 'Data type not found' });
    }

    res.json(memesOfType);
  } catch (err) {
    console.error('Error reading file:', err);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

app.listen(5000,)
