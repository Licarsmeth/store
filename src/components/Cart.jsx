/* eslint-disable react/prop-types */
import cart from "../assets/cart.avif";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { cartList } from "./Modal";

const Cart = function () {
  return (
    <Link to="/cart" className="cartlink">
      <div className="cart">
        <img src={cart} alt="cart" />
        <div className="cartnumber">{cartList.length || null}</div>
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
      <Navbar />
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
