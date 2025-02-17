import React from "react";
import Image from "next/image";
const nav = () => (
  <nav className="my-6 flex flex-row justify-between">
    <Image src="/images/logo.png" width={82} height={41} alt="Logo-Site" />
    <ul className="flex flex-row gap-x-12">
      <li>ویژگی ها</li>
      <li>محصولات</li>
      <li>نظر مشتریان</li>
      <li>پیشنهاد ویژه</li>
      <li>سوالات شما</li>
    </ul>
  </nav>
);
export default nav;
