/* eslint-disable react/prop-types */
const Modal = ({ product, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {product && (
        <dialog open>
          <div className="modal-overlay">
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
                <button className="cart-button">Add to Cart</button>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
