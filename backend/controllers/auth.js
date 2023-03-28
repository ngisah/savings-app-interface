import db from '../db.js';
import bcrypt from 'bcryptjs';
export const register = (req, res) =>{
    // check existing user
    const q = 'SELECT * FROM members WHERE username = ? OR email = ?';

    db.query(q,[req.body.username, req,body.email], (err,data)=>{
        if (err) return res.status(err)
        if (data.length) return res.status(409).json({message: 'User already exists'});

        // hash password and create user

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = 'INSERT INTO members (username, email, phone, id_no, password) VALUES (?)';
    const values = [req.body.username, req.body.email, req.body.phone, req.body.id_no, hash];

    db.query(q, [values], (err, data)=>{
        if (err) return res.status(500).json({message: 'Something went wrong'});
        return res.status(201).json({message: 'User created successfully'});
    })

    })

    


}

export const login = (req, res) =>{
    
}

export const logout = (req, res) =>{
    
}