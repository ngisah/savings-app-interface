import express from 'express';
import axios from 'axios';
import authRoutes from './routes/auth.js';
import transactionsRoutes from './routes/transactions.js';
import memberRoutes from './routes/members.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config()

// import mpesaRoutes from './routes/mpesa.js'


const app = express();
app.listen(8800, () => {
  console.log('Connected to server');
});

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/members', memberRoutes);
app.use('/transactions', transactionsRoutes);
// app.use('/mpesa', mpesaRoutes);

// middleware to generate token
let token;
const generateToken = async (req, res, next)=>{

  
  const secret = process.env.MPESA_CONSUMER_SECRET;
  const consumer = process.env.MPESA_CONSUMER_KEY;

  const auth = new Buffer.from(`${consumer}:${secret}`).toString('base64');
  await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", 
  {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  }).then((response)=>{
    // console.log(response.data.access_token);
    token = response.data.access_token;
    next();
  }).catch((err)=>{
    console.log(err);
    // res.status(400).json(err);
  });
  


};



app.post('/stkpush', generateToken, async (req, res) => {
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;

  const date = new Date();
  const timestamp = date.getFullYear() + 
  ("0" + (date.getMonth() + 1)).slice(-2) +
  ("0" + date.getDate()).slice(-2) +
  ("0" + date.getHours()).slice(-2) +
  ("0" + date.getMinutes()).slice(-2) +
  ("0" + date.getSeconds()).slice(-2);

  const shortcode = process.env.MPESA_PAYBILL;
  const passkey = process.env.MPESA_PASSKEY;

  const password = new Buffer.from(shortcode + passkey + timestamp).toString('base64');
  
  
  
  await axios.post("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
  {
     
      "BusinessShortCode": shortcode,    
      "Password": password,    
      "Timestamp":timestamp,    
      "TransactionType": "CustomerPayBillOnline",    
      "Amount": amount,    
      "PartyA":`254${phone}`,    
      "PartyB":shortcode,    
      "PhoneNumber":`254${phone}`,    
      "CallBackURL": "https://e6ec-41-60-238-220.in.ngrok.io/callback",    
      "AccountReference":`254${phone}`,    
      "TransactionDesc":"Test"
   
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((data)=>{
    console.log(data.data)
    res.status(200).json(data.data)

  }).catch ((err)=>{
    console.log(err.message)
    res.status(400).json(err.message)
  })

});

app.post('/callback', (req, res) => {
  const result = req.body.Body.stkCallback;
  console.log(result);

  // extract the result body from the callback
  const resultBody = result.CallbackMetadata.Item.find(item => item.Name === 'ResultDesc').Value;
  console.log(resultBody);

  res.sendStatus(200); // send a success response to Mpesa API
});





