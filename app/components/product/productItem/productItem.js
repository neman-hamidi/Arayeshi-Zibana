import React from "react";

export default function productItem({ children, title }) {
  return (
    <div>
      {children}
      <div className="flex flex-row justify-between items-center mt-6">
        <p>{title}</p>
        <button type="submit" className="py-3 px-4 text-sm border border-black rounded-full">سفارش محصول</button>
      </div>
    </div>
  );
}
