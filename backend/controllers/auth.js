import { db } from "../db.js";
import bcrypt from "bcrypt";


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

export const login = (req, res) => {};

export const logout = (req, res) => {};
