import React from 'react'
import { FaWindowClose } from 'react-icons/fa'

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute inset-0 bg-[#81948B9a] flex items-center justify-center z-50">
      <div className="relative bg-white w-full lg:max-w-md p-4 rounded-lg shadow-xl mx-4">
        <button
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          <FaWindowClose size={25} color='#81948B' />
        </button>
        <h2 className="text-2xl text-[#BFA880] mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}
