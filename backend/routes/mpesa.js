import express from 'express';
import { mpesa } from '../controllers/mpesa.js';



const router = express.Router();
router.post('/mpesa', mpesa )


export default router;