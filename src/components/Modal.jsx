/* eslint-disable react/prop-types */
let cartList = JSON.parse(localStorage.getItem('cartList')) || [];
const Modal = ({ product, onClose }) => {
  const handleClose = (event) => {
    if (event.target === event.currentTarget){
    onClose();
    }
  };

  const handleAddToCart = (product) =>{
    const cartInput = document.querySelector('.cart-input').valueAsNumber;
    const productsOnCart = {id: product.id, quantity:cartInput};

    //check if the item added is already in cart
    const containsProduct = cartList.some(cartItem => cartItem.id === product.id);

    if(containsProduct){
      console.log('yes');
      const updatedProducts = cartList.map(cartItem => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + cartInput };
        }
        return cartItem;
      });
      cartList = updatedProducts;
    }
    else 
      cartList.push(productsOnCart);
    
    localStorage.setItem('cartList', JSON.stringify(cartList));
    onClose();
  };

  const items = localStorage.getItem('cartList');
  console.log(JSON.parse(items));

  return (
    <>
      {product && (
        <dialog open>
          <div className="modal-overlay" onClick={handleClose}>
            <div className="modal">
              <button className="close-button" onClick={handleClose}>
                ×
              </button>
              <h2>{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                className="productimg"
              />
              <p className="productprice">${product.price}</p>
              <p className="modal-description">{product.description}</p>
              <div className="cart-row">
                <input type="number" className="cart-input" defaultValue={1}/>
                <button className="cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
// eslint-disable-next-line react-refresh/only-export-components
export {cartList};
