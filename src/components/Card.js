// Card.js used Activity 20 Components -> Card.js and changed from div/ h tags to td/ row tags
import React from "react";

function Card(props) {
  return (
      <tr>
        <td > <img src={props.picture} alt="" /></td>  
        <td >{props.firstName}</td>
        <td >{props.lastName}</td>
        <td >{props.dob}</td>
        <td >{props.email}</td>
        <td >{props.phone}</td>
    </tr>
  );
}

export default Card;