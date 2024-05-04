/* eslint-disable react-refresh/only-export-components */
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = () =>
  toast.success('Sukses Terkirim', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Bounce,
  });

const ToastMessage = () => {
  return <ToastContainer />;
};

export default ToastMessage;
