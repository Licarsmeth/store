import cart from "../assets/cart.avif"
import { Link } from "react-router-dom";

const Cart = function () {
    return (

        <Link to="/cart" className="cartlink">
            <div className="cart">
                <div>Cart</div>
                <img src={cart} alt="cart" />
                <div>1</div>
            </div>
        </Link>
    )
}

const Cartpage = function () {
    
}

export default Cart;
export {Cartpage};