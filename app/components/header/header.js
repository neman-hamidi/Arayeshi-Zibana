import React from 'react'
import Image from 'next/image'
export default function header() {
  return (
    <header className='flex flex-row justify-between items-center'>
        <div className='w-[600px]'>
          <p className='text-5xl leading-[70px]'>زیبایی پوست خود را با <span className='text-primary'>بهترین مواد طبیعی</span> به اوج برسانید</p>
          <p className='mt-6 mb-10 text-xl text-secondary'>از قدرت گیاهان دارویی برای تغذیه پوست خود از درون به بیرون استفاده کنید تا ظاهری سالم و درخشان داشته باشید.</p>
          <button type="submit" className='bg-primary py-4 px-6 text-white rounded-full text-xl'>ویژگی های منحصر به فرد</button>
        </div>
        <div>
          <Image src="/images/Photo.png" width={443} height={666} alt='images-header'/>
        </div>
    </header>
  )
}