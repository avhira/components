import { useState } from 'react';
import './modalbox.css';

const Modalbox = () => {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };
  const renderModal = () => (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>This is header of modalbox</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse perspiciatis cumque quisquam voluptatibus. Eveniet sed porro odit rerum. Officia quisquam ratione eveniet asperiores alias aspernatur. Officia suscipit commodi
          soluta? Praesentium eos nisi obcaecati nulla laudantium delectus atque placeat aliquid.
        </span>
      </div>
    </div>
  );
  return (
    <>
      <h1>THIS IS MODAL BOX</h1>
      <button onClick={() => setShowModal(true)}>CLICK HERE</button>
      {showModal ? renderModal() : null}
    </>
  );
};

export default Modalbox;
