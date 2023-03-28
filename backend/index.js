import express from 'express';
import authRoutes from './routes/auth.js';
import transactionsRoutes from './routes/transactions.js';

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/transactions', transactionsRoutes);





app.listen(8800, () => {
  console.log('Connected to server');
});