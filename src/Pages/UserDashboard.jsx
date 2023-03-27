import React from 'react'
import './UserDashboard.css'

const UserDashboard = () => {
  return (
    <div>
        <div className="user-dashboard">
      <header>
        <h1>Welcome to your Dashboard</h1>
      </header>
      <div className="user-info">
        <h2>User Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </div>
      <div className="contributions">
        <h2>Contributions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January 1, 2022</td>
              <td>$100</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>February 1, 2022</td>
              <td>$50</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>March 1, 2022</td>
              <td>$75</td>
              <td>Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default UserDashboard