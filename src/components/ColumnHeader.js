import React from "react";

function ColumnHeader(props) {
    return (
  <tr>
    <th scope="col">Profile Picture</th>
    <th>First Name</th>
    <th scope="col">Last Name </th>
    <th scope="col">Age </th>
    <th scope="col">Email</th>
    <th scope="col">Phone</th>
  </tr>

  );
}

export default ColumnHeader;