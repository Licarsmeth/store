/* eslint-disable react/prop-types */
const Modal = ({ product, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {product && (
        <dialog open>
          <div className="moday-overlay">
              <div className="modal">
                <button className="close-button" onClick={handleClose}>
                  Close
                </button>
                <h2>{product.title}</h2>
                <img
                  src={product.image}
                  alt={product.title}
                  className="modal-image"
                />
                <p className="modal-price">${product.price}</p>
                <p className="modal-description">{product.description}</p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
