import React, { useState } from "react";

function Modal({ isOpen, onClose, children }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div className="bg-[#e3e3e3] relative rounded w-4/5 h-4/5 overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
}

export default Modal;
