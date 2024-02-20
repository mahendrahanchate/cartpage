import React from 'react';
import './AdminUsers.css'; // Assuming you have a separate CSS file for table styles

function AdminUsers() {
  return (
    <div>
      <div>
        <h1 style={{padding:"10px", color:"orange", fontFamily:"sans-serif"}}>
          User Record :
        </h1>
      </div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th>Name</th>
            <th> Mobile</th>
            <th>Address </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1</td>
            <td>Mahendra</td>
            <td>768-56547-6576</td>
            <td>Mumbai</td>
          </tr>
          <tr>
            <td>#2</td>
            <td>Yawanth</td>
            <td>23546-254365</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>#3</td>
            <td>Manoj</td>
            <td>43-4235-2534</td>
            <td>Delhi</td>
          </tr>
          <tr>
            <td>#4</td>
            <td>Rajasekahr</td>
            <td>4354-423543-34</td>
            <td>Lucknow</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AdminUsers;
