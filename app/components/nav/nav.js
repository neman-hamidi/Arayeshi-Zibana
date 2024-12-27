import React from 'react'
import Image from 'next/image'
export default function nav() {
  return (
    <nav className='my-6 flex flex-row justify-between'>
        <div> <Image src="/images/logo.png" width={82} height={41} alt='Logo-Site'/></div>
        <div>
            <ul className='flex flex-row gap-x-12'>
                <li>ویژگی ها</li>
                <li>محصولات</li>
                <li>نظر مشتریان</li>
                <li>پیشنهاد ویژه</li>
                <li>سوالات شما</li>
            </ul>
        </div>
    </nav>
  )
}
