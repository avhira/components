/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import ToastMessage, { notify } from './ReactToast';
import emailjs from '@emailjs/browser';

const ModalComponent = ({ formData, setFormData, showModal, setShowModal, errors }) => {
  const [confirm, setConfirm] = useState(false);

  const handleConfirm = () => {
    setConfirm(!confirm); // jadi true
  };

  const onClose = () => {
    setShowModal(false);
  };
  const renderModal = (header, content, backgroundColor) => (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" style={{ background: backgroundColor }} onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{header}</h2>
        {content}
      </div>
    </div>
  );

  const renderFormData = () => (
    <>
      {Object.entries(formData).map(([key, value], i) => (
        <div className="wrap-input" key={i}>
          <h4>{`${key} : ${value}`}</h4>
        </div>
      ))}
      <div className="modal-btn">
        <button className="btn-confirm" onClick={handleConfirm}>
          Yeah
        </button>
      </div>
    </>
  );

  const renderErrors = () => (
    <>
      {Object.values(errors).map((err, i) => (
        <ul key={i}>
          <li>{err}</li>
        </ul>
      ))}
    </>
  );

  const ErrorObj = errors && Object.keys(errors).length > 0;

  const modalContent = ErrorObj ? renderErrors() : renderFormData();
  const header = ErrorObj ? 'Benerin lagi ya' : 'Apakah data sudah benar ?';
  const backgroundColor = ErrorObj ? '#ff0000' : '#002fff';

  // change it with your own
  const EMAILJS_API_KEY = import.meta.env.VITE_EMAILJS_API_KEY_ID;
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  useEffect(() => {
    if (confirm) {
      onClose();
      setConfirm(!confirm);

      emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_API_KEY)
        .then((response) => {
          console.log('Email sent successfully!', response, formData);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
        });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      notify(); // React-Toast
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirm]);

  return (
    <div>
      {showModal && renderModal(header, modalContent, backgroundColor)}
      <ToastMessage />
    </div>
  );
};

export default ModalComponent;
