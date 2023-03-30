import { db } from "../db.js";

export const getTransactions = (req, res)=>{
  db.query(`
    SELECT t.*, m.username 
    FROM transactions t 
    JOIN members m ON t.member_id = m.id
  `, (err, result)=>{
    if(err){
      console.log(err);
      res.status(500).send("Error fetching transactions.");
    }else{
      res.send(result);
    }
  });
}

export const getTransaction = (req, res) => {
    const transactionId = req.params.id;
    const query = `
      SELECT transactions.*, members.username
      FROM transactions
      INNER JOIN members ON transactions.member_id = members.id
      WHERE transactions.id = ?
    `;
    db.query(query, [transactionId], (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else if (result.length === 0) {
        res.sendStatus(404);
      } else {
        const transaction = result[0];
        res.send({
          id: transaction.id,
          description: transaction.description,
          amount: transaction.amount,
          date: transaction.date,
          Username: transaction.username,
        });
      }
    });
  };
