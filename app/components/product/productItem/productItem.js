import Image from "next/image";
import React from "react";
const productItem = ({ title, src }) => (
  <>
    <Image
      src={src}
      width={394}
      height={394}
      alt="product-images"
      className="rounded-xl"
    />
    <div className="flex flex-row justify-between items-center mt-6">
      <p>{title}</p>
      <button
        type="submit"
        className="py-3 px-4 text-sm border border-black rounded-full"
      >
        سفارش محصول
      </button>
    </div>
  </>
);
export default productItem;
