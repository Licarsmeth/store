/* eslint-disable react/prop-types */
import cart from "../assets/cart.avif";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { cartList } from "./Modal";
import ShopButton from "./Shopbutton";

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

const Cartdata = function ({cartList}) {
  return (
    <>
    {cartList.map((list) => (
        <tr key={list.id} className="list">
              <td><img src={list.image} alt="item" className="cartimg"/></td>
              <td>{list.title}</td>
              <td>
                <input type="number" defaultValue={list.quantity}/>
              </td>
              <td>${list.price}</td>
              <td>${list.price * list.quantity}</td>
              <td>
                <button>×</button>
              </td>
        </tr>
      ))}
    </>
  );
};

const Cartpage = function () {
  console.log(cartList);
  const rows = [];
  //cart not empty
  if (cartList.length != 0) {
    rows.push(
        <Cartdata key="cartdata" cartList = {cartList}
        />
    )
      return (
        <>
      <Navbar />
      <table className="cart-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    </>
      )
    }
    //cart empty
      else{
        return(
          <>
          <Navbar />
          <div className="empty-cart">Nothing in the cart :(
            </div>
            <div>Continue Shopping!</div>
          <ShopButton />
          </>
        )
      }
};

export default Cart;
export { Cartpage };
