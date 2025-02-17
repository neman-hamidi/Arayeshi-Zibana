import React from "react";
const footer = () => (
  <footer>
    <p className="text-3xl text-primary mb-4 font-bold">زیبانا</p>
    <div className="flex flex-row justify-between items-center">
      <p>زیبایی پوست خود را با بهترین موادطبیعی به اوج برسانید!</p>
      <ul className="flex flex-row gap-12 text-xl">
        <li>ویژگی ها</li>
        <li>محصولات</li>
        <li>نظر مشتریان</li>
        <li>پیشنهاد ویژه</li>
        <li>سوالات شما</li>
      </ul>
    </div>
    <hr className="my-5" />
    <p className="text-center mb-1">تمامی حقوق این وبسایت محفوظ است</p>
  </footer>
);
export default footer;
