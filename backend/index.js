import express from 'express';
import authRoutes from './routes/auth.js';

const app = express();

app.use(express.json());
app.use('/backend/auth', authRoutes)



app.get('/', (req, res) => {
    res.send('This is the backend mf');
})

app.listen(8800, () => {
  console.log('Connected to server');
});