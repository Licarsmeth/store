import cart from "../assets/cart.avif"

const Cart = function () {
    return (
        <div className="cart">
            <div>Cart</div>
            <img src={cart} alt="cart" />
            <div>1</div>
        </div>
    )
}

export default Cart;