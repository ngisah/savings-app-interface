import React from 'react'
import './UserDashboard.css'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Mpesa from '../components/Mpesa'
import { useLocation } from 'react-router-dom'



const UserDashboard = () => {

  const [username, setUsername] = useState('');


    const yearToDateContribution = 5000; // Replace with actual data
    const monthToDateContribution = 500; // Replace with actual data
  
    const handleDownloadPdf = () => {
      // Implement PDF download functionality
      

      console.log('Download PDF clicked');
    };
    const location = useLocation()
    const memberId = location.pathname.split("/")[2];

    useEffect (()=>{
      const fetchdata = async () =>{
        try{
          const res = await axios.get(`/members/${memberId}`)
          setUsername(res.data.username)
        }catch(e){
          console.log(e)
        }
      }
      fetchdata()
    },[memberId])
  
    return (
      <div className="user-dashboard">
        <h2>Welcome, {username}!</h2>
        <div className="contribution-info">
          <p>Year-to-date contribution: ${yearToDateContribution}</p>
          <p>Month-to-date contribution: ${monthToDateContribution}</p>
          <Mpesa />
        </div>
        <div className="transaction-history">
          <h3>Transaction History</h3>
          <Button variant="primary" onClick={handleDownloadPdf}>Download as PDF</Button>
          {/* TODO: Render transaction history table */}
        </div>
      </div>
    );
  };
  
  export default UserDashboard;