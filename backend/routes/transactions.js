import express from 'express';
import { getTransactions, getTransaction } from '../controllers/transaction.js';


const router = express.Router();

router.get('/', getTransactions);
router.get('/:id', getTransaction);


export default router;