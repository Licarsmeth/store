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

const Cartdata = function () {
  return (
    <tr>
      <td>data1</td>
      <td>data2</td>
      <td>data3</td>
    </tr>
  );
};

const Cartpage = function () {
  console.log(cartList);
  const rows = [];
  //cart not empty
  if (cartList.length != 0) {
    rows.push(
        <Cartdata
        />
    )
      return (
        <>
      <Navbar />
      <table>
        <thead>
            <tr>
                <th>{cartList[0].id}</th>
                <th>Price</th>
                <th>Action</th>
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
