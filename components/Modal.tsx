// Modal.tsx
import React from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  title,
  message,
}) => {
  if (!isVisible) return null;

  return (
    <div className=" inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-2xl">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{message}</p>
        <button className="mt-4 btn btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
