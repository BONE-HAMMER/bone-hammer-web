import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import Products from './Products/Products';
import Home from './Home/Home';
import Orders from './Orders/Orders'


function Orders() {
return(
  <div className="content content-margined">
     <div className="order-header">
         <h3>Orders</h3>
     </div>
     <div className="order-list">
       <table className="table">
<thead>
    <tr>
        <th>ID</th>
        <th>DATE</th>
        <th>TOTAL</th>
        <th>USER</th>
        <th>PAID</th>
        <th>PAID AT</th>
        <th>DELIVERED</th>
        <th>DELIVERED AT</th>
        <th>ACTIONS</th>
    </tr>
</thead>
<tbody>
    {data.orders.map((orders) )
        <tr key={order.id}>
            <td>{order._id}</td>
            <td>{order.createdAt}</td>
            <td>{order.totalPrice}</td>
            <td>{order.user.name}</td>
            <td>{order.isPaid}</td>
            <td>{order.paidAt}</td>
            <td>{order.isDelivered.toString()}</td>
            <td>{order.deliverableData}</td>
        </td>
        <Link to={"/order/" + order.id} className="button secondary">
            Details 
            </link>
            </td>
        </tr>
    ))}
</tbody>

       </table>
     </div>
  </div>);

};

export default Orders;


