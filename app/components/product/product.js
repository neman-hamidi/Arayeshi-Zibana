import React from "react";
import ProductItem from "./productItem/productItem";
import details from "./Text";
const product = () => (
  <>
    <div className="flex flex-row justify-between items-center mb-12">
      <div className="w-[390px]">
        <h3 className="text-primary text-xl font-bold">محصولات</h3>
        <p className="text-5xl mt-3 leading-[65px]">
          با مجموعه مراقبت از پوست ما آشنا شوید
        </p>
      </div>
      <div className="w-[590px]">
        <p className="text-secondary text-base">
          هر محصول با دقت از مواد باکیفیت و موثر ساخته شده تا به طور خاص نیازهای
          منحصر به فرد پوست شما را برآورده کند. این مجموعه تضمین می‌کند که به
          راحتی و با استفاده منظم به پوستی شفاف، درخشان، شاداب و سرزنده دست پیدا
          خواهید کرد.
        </p>
      </div>
    </div>
    <div className="flex flex-row gap-x-20">
      {details.map((item, index) => (
        <div key={index}>
          <ProductItem {...item} />
        </div>
      ))}
    </div>
  </>
);
export default product;
