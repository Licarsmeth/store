import { useState } from "react";
let cartList = JSON.parse(localStorage.getItem("cartList"));
// eslint-disable-next-line react/prop-types
const NumberInput = ({ amount, removeItem, id}) => {
  const [quantity, setQuantity] = useState(amount);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    const itemIndex = cartList.findIndex((item) => item.id === id);
    cartList[itemIndex].quantity += 1;
    localStorage.setItem("cartList", JSON.stringify(cartList));
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      const itemIndex = cartList.findIndex((item) => item.id === id);
      cartList[itemIndex].quantity -= 1;
      localStorage.setItem("cartList", JSON.stringify(cartList));
    } else {
      removeItem();
    }
  };

  return (
    <div className="number-input">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default NumberInput;
