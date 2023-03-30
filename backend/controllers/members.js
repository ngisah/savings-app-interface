import {db} from '../db.js';


// Get all members
export const getMembers = (req, res)=>{
    db.query("SELECT * FROM members", (err, result)=>{
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
    });

}
  
    // Get member by id
export const getMember = (req, res)=>{

    const id = req.params.id;
    const memberId = req.session.memberId;
    db.query("SELECT * FROM members WHERE id = ?", id, (err, result)=>{
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
    });

}
  
// delete member
export const deleteMember = (req, res)=>{
    const id = req.params.id;
    db.query("DELETE FROM members WHERE id = ?", id, (err, result)=>{
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
    });

}

// update member
// export const updateMember = (req, res)=>{


// }

