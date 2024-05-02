import { Link } from 'react-router-dom';

const ShopButton = () => {
  return (
    <Link to="/products" className="shop-button">
      Shop Now
    </Link>
  );
};

export default ShopButton;
