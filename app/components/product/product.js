import React from "react";
import ProductItem from "./productItem/productItem";
import Image from "next/image";
export default function product() {
  return (
    <>
    <div className="flex flex-row justify-between items-center mb-12">
      <div className="w-[390px]">
        <p className="text-primary text-xl font-bold">محصولات</p>
        <p className="text-5xl mt-3 leading-[65px]">با مجموعه مراقبت از پوست ما آشنا شوید</p>
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
        <ProductItem title="کرم مرطوب‌کننده"><Image src="/images/p1.png" width={394} height={394} alt="product-images" className="rounded-xl"/></ProductItem>
        <ProductItem title="سرم ویتامین C"><Image src="/images/p2.png" width={394} height={394} alt="product-images" className="rounded-xl"/></ProductItem>
        <ProductItem title="شوینده صورت"><Image src="/images/p3.png" width={394} height={394} alt="product-images" className="rounded-xl"/></ProductItem>
    </div>
    </>
  );
}
