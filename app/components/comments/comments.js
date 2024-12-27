import React from 'react'
import Image from 'next/image'
export default function comments() {
  return (
    <div className='flex flex-row justify-between items-center my-32'>
        <div>
            <p className='text-xl text-primary font-bold'>نظرات خریداران</p>
            <p className='text-[40px] w-72 mt-4 mb-16'>تجربه‌های واقعی؛
            نتایج فوق‌العاده</p>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-row gap-x-5'>
                    <div><Image src="/images/image-6.png" width={60} height={60} alt='img-comments' className='rounded-full' /></div>
                    <div>
                        <p className='w-[491px]'>این محصولات واقعاً باکیفیت هستن. مرطوب‌کننده‌شون یه جورایی جادوییه، پوستم اصلاً چرب نمی‌شه و همیشه تازه به نظر میاد.</p>
                        <p className="text-xs text-secondary mt-2">نسترن</p>
                    </div>
                </div>
                <div className='flex flex-row gap-x-5'>
                    <div><Image src="/images/image-8.png" width={60} height={60} alt='img-comments' className='rounded-full' /></div>
                    <div>
                        <p className='w-[491px]'>واقعا عالی بود. بعد از یه مدت استفاده از کرم‌هاشون، پوستم خیلی نرم و شفاف شده. حس میکنم پوستِ صورتم نفس می‌کشه.</p>
                        <p className="text-xs text-secondary mt-2">مهسا</p>
                    </div>
                </div>
                <div className='flex flex-row gap-x-5'>
                    <div><Image src="/images/image-9.png" width={60} height={60} alt='img-comments' className='rounded-full' /></div>
                    <div>
                        <p className='w-[491px]'>سرم ویتامین C شون بی‌نظیره. لک‌های صورتم به مرور کمرنگ‌تر شده وکلی حس خوبی دارم. توصیه می‌کنم حتما امتحان کنید!</p>
                        <p className="text-xs text-secondary mt-2">سارا</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row gap-2'>
            <div className='translate-y-32'>
            <Image src="/images/Photo-1.png" width={287} height={416} alt='' className=''/>
            </div>
            <div>
            <Image src="/images/Photo-2.png" width={287} height={416} alt='' className=''/>
            </div>
        </div>
    </div>
  )
}
