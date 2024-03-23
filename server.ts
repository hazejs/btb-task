import axios from 'axios';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { users } from './db';

export {};

const app = express();
app.use(bodyParser.json());

const port = 5000;

// Authentication Route
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { username, password } = req.body
  const user = users.find((u) => u.username === username && u.password === password)
  console.log();
  
  if(!!user) res.status(200).send({ message: 'Login successful!', user });
  if(!!!user) return res.status(400).json({
    erros: [
      {
        msg: 'Invalid credentials'
      }
    ]
  });
});


// Character Route
app.get('/api/characters', async (req: Request, res: Response) => {
  console.log('SERVER');
  
  try {
      const { name } = req.query;
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
      res.json(response.data);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
