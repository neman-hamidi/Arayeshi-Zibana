import React from "react";

const faq = () => (
  <div className="my-20">
    <div className="flex flex-row justify-between items-center">
      <div>
        <h3 className="text-xl text-primary mb-3 font-bold">سوالات متداول</h3>
        <p className="w-96 text-[40px]">پاسخ به متداول‌ترین سوالات شما</p>
      </div>
      <div>
        <p className="w-[552px] text-secondary">
          در این بخش به رایج‌ترین سوالات شما درباره محصولات مراقبت از پوست پاسخ
          داده‌ایم. با اطلاعات کامل و دقیق، انتخاب بهتری برای نیازهای پوستتان
          خواهید داشت!
        </p>
      </div>
    </div>
    <div className="flex flex-row gap-28 justify-center items-center mt-20">
      <div className="flex flex-col gap-9">
        <div className="flex flex-row gap-6">
          <div>
            <svg className="w-6 h-6">
              <use href="#rocket-launch"></use>
            </svg>
          </div>
          <div>
            <h3 className="mb-4 text-xl">
              چگونه بفهمم کدام محصول برای پوستم مناسب است؟
            </h3>
            <p className="text-secondary w-[464px]">
              با شناسایی نوع پوستتان و بررسی نیازهای خاص آن، محصولات مناسب را
              انتخاب کنید. مشاوره با متخصص پوست هم کمک‌کننده است.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div>
            <svg className="w-6 h-6">
              <use href="#arrow-path"></use>
            </svg>
          </div>
          <div>
            <h3 className="mb-4 text-xl">
              آیا می‌توانم همزمان از چند محصول مراقبتی استفاده کنم؟
            </h3>
            <p className="text-secondary w-[464px]">
              بله، اما روتین مراقبتی را به تدریج شروع کنید و از محصولات سازگار
              با نوع پوستتان استفاده کنید.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <div>
            <svg className="w-6 h-6">
              <use href="#clock"></use>
            </svg>
          </div>
          <div>
            <h3 className="mb-4 text-xl">
              هر چند وقت یکبار باید از سرم استفاده کنم؟
            </h3>
            <p className="text-secondary w-[464px]">
              سرم‌ها معمولاً صبح و شب استفاده می‌شوند. دستورالعمل محصول را بررسی
              کنید.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        <div className="flex flex-row gap-6">
          <div>
            <svg className="w-6 h-6">
              <use href="#chart-pie"></use>
            </svg>
          </div>
          <div>
            <h3 className="mb-4 text-xl">
              آیا محصولات طبیعی بهتر از شیمیایی هستند؟
            </h3>
            <p className="text-secondary w-[464px]">
              محصولات طبیعی ممکن است برای پوست‌های حساس مناسب‌تر باشند، اما هر
              دو نوع می‌توانند مؤثر باشند.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div>
            <svg className="w-6 h-6">
              <use href="#calendar"></use>
            </svg>
          </div>
          <div>
            <h3 className="mb-4 text-xl">چقدر طول می‌کشد تا نتایج را ببینم؟</h3>
            <p className="text-secondary w-[464px]">
              بسته به محصول و نوع پوست، بین ۲ تا ۶ هفته زمان لازم است تا نتایج
              قابل مشاهده باشند.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div>
            <svg className="w-6 h-6">
              <use href="#sun"></use>
            </svg>
          </div>
          <div>
            <h3 className="mb-4 text-xl">
              آیا باید هر روز از ضدآفتاب استفاده کنم؟
            </h3>
            <p className="text-secondary w-[464px]">
              بله، ضدآفتاب باید هر روز استفاده شود تا از پوست در برابر اشعه UV
              محافظت کند.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default faq;
