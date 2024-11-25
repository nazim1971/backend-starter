import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

//parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Backend Starter on Fire 🔥🔥🔥',
  });
});

export default app;
