import React from "react";
import "./contact.css";

export const Contact = () => {
  const name = "Akash PC";
  const email = "akashpc2019@gmail.com";
  const phone = "7994051794";

  return (
    <div className="cart">
      <b>Contact</b>
      <div className="cart-item">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};
