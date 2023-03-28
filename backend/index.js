import express from 'express';
import authRoutes from './routes/auth.js';
import transactionsRoutes from './routes/transactions.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/transactions', transactionsRoutes);





app.listen(8800, () => {
  console.log('Connected to server');
});