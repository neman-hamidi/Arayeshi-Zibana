import React from "react";
import Image from "next/image";
export default function benefit() {
  return (
    <section className="flex flex-row justify-center my-36 gap-16">
      <div>
        <p className="text-primary text-xl font-bold">مزایا</p>
        <p className="text-5xl mt-3 mb-8">مواد طبیعی و ارگانیک</p>
        <p className="text-secondary mb-8">
          محصولات ما از ترکیبات ارگانیک و باکیفیت تولید شده‌اند. تضمین می‌کنیم
          که فاقد هرگونه مواد شیمیایی یا سموم مضر هستند.
        </p>
        <p className="text-secondary">
          مراقبتی ملایم و مؤثر برای پوست خود تجربه کنید که با هماهنگی کامل با
          پوستتان عمل کرده و به شما پوستی سالم و درخشان هدیه می‌دهد.
        </p>
        <div className="translate-x-[160px]">
          <Image
            src="/images/Leaf-Photo.png"
            width={550}
            height={365}
            alt="Leaf-Photo"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-x-6 border-b border-b-slate-200 pb-8">
          <div className="text-3xl">+</div>
          <div>
            <h3 className="mb-4 text-2xl"> فرمول های علمی اثبات شده</h3>
            <p className="text-secondary w-5/6 text-base">
              محصولات ما توسط تحقیقات علمی و آزمایش‌های تخصصی پشتیبانی می‌شوند و
              به شما اطمینان می‌دهند که نتایجی قابل مشاهده و ماندگار کسب کنید.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-6 border-b border-b-slate-200 py-8 relative">
          <div className="text-primary text-3xl">X</div>
          <div>
            <h3 className="mb-4 text-2xl text-primary">
              ترکیبات خالص و کاملاً طبیعی
            </h3>
            <p className="text-secondary w-5/6">
              ما به کیفیت و اصالت هر یک از ترکیبات توجه ویژه‌ای داریم، تا
              اطمینان حاصل کنیم که از طبیعت برای بهبود و سلامت پوست شما بهره
              می‌بریم.
            </p>
          </div>
          <div className="absolute -left-12 bg-primary rounded-3xl -rotate-12 overflow-hidden">
            <Image
              src="/images/0-7.png"
              width={131}
              height={230}
              alt="example-beautify"
            />
          </div>
        </div>
        <div className="flex flex-row gap-x-6 border-b border-b-slate-200 py-8">
          <div className="text-3xl">+</div>
          <div>
            <h3 className="mb-4 text-2xl">تأیید شده توسط متخصصان پوست</h3>
            <p className="text-secondary w-5/6">
              با فرمولاسیون پیشرفته و ترکیبات طبیعی، تضمین می‌کنیم که محصولاتمان
              به‌طور علمی و تخصصی بررسی شده‌اند تا به شما پوستی سالم‌تر و
              درخشان‌تر ارائه دهند.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-6 border-b border-b-slate-200 py-8">
          <div className="text-3xl">+</div>
          <div>
            <h3 className="mb-4 text-2xl">ویژگی‌های جوان‌ساز</h3>
            <p className="text-secondary w-5/6">
              محصولات ما از ترکیبات جوان‌ساز طراحی شده‌اند تا به طور مؤثر با
              علائم پیری مقابله کنند و به کاهش چین‌وچروک و بهبود بافت پوست کمک
              ‌کنند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
