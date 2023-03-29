import React from 'react'
import './UserDashboard.css'
import {Button} from 'react-bootstrap'
import Mpesa from '../components/Mpesa'

const UserDashboard = () => {
    const yearToDateContribution = 5000; // Replace with actual data
    const monthToDateContribution = 500; // Replace with actual data
  
    const handleDownloadPdf = () => {
      // TODO: Implement PDF download functionality
      console.log('Download PDF clicked');
    };
  
    return (
      <div className="user-dashboard">
        <h2>My Dashboard</h2>
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