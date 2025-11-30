import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setallOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setallOrders(res.data);
      console.log("orders data fetched from backend");
    }, []);
  });
  return (
    <div className="orders">
      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Total value (Rs.)</th>
          </tr>

          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>₹{stock.price * stock.qty}</td>
              </tr>
            );
          })}
        </table>
      </div>

      {() => {
        if (allOrders.length === 0) {
          return (
            <>
              <div className="no-orders">
                <p>You haven't placed any orders today</p>

                <Link to={"/"} className="btn">
                  Get started
                </Link>
              </div>
            </>
          );
        }
      }}
    </div>
  );
};

export default Orders;
