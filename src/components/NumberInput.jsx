import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const NumberInput = ({amount, removeItem}) => {
  const [quantity, setQuantity] = useState(amount);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
    else{
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
