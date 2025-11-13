import express, { Express } from 'express';
import cors from 'cors';
import chatRoutes from './routes/chatRoutes.js';

const app: Express = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/chat', chatRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

export default app;

