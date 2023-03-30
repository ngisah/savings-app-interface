import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
// import cookieParser from 'cookie-parser'


export const register = (req, res) => {
  // check existing user
  const q = "SELECT * FROM members WHERE username = ? OR email = ?";

  db.query(q, [req.body.username, req.body.email], (err, data) => {
    if (err) return res.status(err);
    if (data.length) return res.status(409).json("User already exists");

    // hash password and create user

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO members (`username`,`email`, `phone`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, req.body.phone, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(201).json("User has been created");
    });
  });
};

export const login = (req, res) => {
    // check if user exists
const q = 'SELECT * FROM members WHERE email = ?';
db.query(q,[req.body.email], (err, data) => {
    if (err) return res.status(err);
    if (data.length===0) return res.status(404).json('User not found');
    
    // check password
    const validPassword = bcrypt.compareSync(req.body.password, data[0].password);
    if (!validPassword) return res.status(401).json('Invalid password');
    
    // create and assign a token
    const token = jwt.sign({id: data[0].id}, "jwtkey");
    const {password, ...other} = data[0];

     // add username to response data
    const responseData = {
      
      username: data[0].username,
      ...other,
      token
  };
    res.cookie('access token', token,{
        httpOnly: true,
    }).status(200).json(responseData)
     
})
};



export const logout = (req, res) => {};
