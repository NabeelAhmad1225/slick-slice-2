import React from 'react';

interface ModalProps {
  message: string;
  onClose: () => void;
  visible: boolean; // Added prop to control visibility
}

const Modal: React.FC<ModalProps> = ({ message, onClose, visible }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${visible ? 'modal-show' : 'modal'}`}>
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-lg font-semibold">Success</h3>
        <p>{message}</p>
        <button className="mt-4 btn btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
