/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import cart from "../assets/cart.avif";
import { Link } from "react-router-dom";

const Cart = function () {
  return (
    <Link to="/cart" className="cartlink">
      <div className="cart">
        <div>Cart</div>
        <img src={cart} alt="cart" />
        <div className="cartnumber">1</div>
      </div>
    </Link>
  );
};

const Cartdata = function ({ products }) {
  return (
    <tr>
      <td>{products.image}</td>
      <td>{products.name}</td>
      <td>{products.price}</td>
    </tr>
  );
};

const Cartpage = function ({ products }) {
    const rows = [];
    rows.push(
        <Cartdata 
            products={products}
            key={products.id}
        />
    )
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    </>
  );
};

export default Cart;
export { Cartpage };
