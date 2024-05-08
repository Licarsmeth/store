/* eslint-disable react/prop-types */
const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
const Modal = ({ product, onClose }) => {
  const handleClose = (event) => {
    if (event.target === event.currentTarget){
    onClose();
    }
  };

  const handleAddToCart = (product) =>{
    const cartInput = document.querySelector('.cart-input');
    const cartQuantity = cartInput.valueAsNumber;
    const productsOnCart = {id: product.id, quantity:cartQuantity}
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
