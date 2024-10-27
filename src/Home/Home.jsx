import React from 'react'
import { FaUserCheck ,FaPeopleArrows ,FaRegGrinHearts  } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import img1 from '../assets/1.png'
import img2 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/quranimg.jpeg'
export default function Home() {
  return (
    <>
<div className="relative w-full h-screen bg-cover bg-center bg-home">
  
  {/* طبقة اللون */}
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* النص فوق الخلفية */}
  <div className="relative z-10 h-full flex flex-col items-end justify-center pr-10">
    <p className="text-4xl md:text-6xl text-white font-bold text-right my-5 ">أكاديمية مفازا</p>
    <p className="text-lg md:text-2xl text-white mt-4 text-right my-5">
    <p>احصل علي معلمك الشخصي من مفازا اونلاين</p>
    <p className='my-3'>حصص اونلاين في قراءة وحفظ القرآن واللغة العربية وتعلم التجويد والمقامات</p>
    <p>والدراسات الإسلامية براحة وأمان من منزلك.</p>
    </p>
    
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 my-5">
    <button className="bg-[#4c4845] text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300">
        اشترك الان
      </button>
      <button className="bg-[#a0876e] text-white px-4 py-2 rounded-md ">
        احجز حصة تجريبة مجانية
      </button>
     
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 py-14">
  {/* القسم الأول */}
  <div className="flex-1  p-4">
  <div className=" py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto">
      <div className="flex items-center">
        <div className="flex-shrink-0">
        <FaUserCheck className='text-3xl		text-[#5c544d]'/>

        </div>
        <div className="ml-4 text-end">
          <h3 className="text-lg leading-6 font-medium text-[#5c544d]">
          مدرسين محترفين

          </h3>
          <p className="text-sm text-gray-500">
          مدرسون محترفون معتمدون من الذكور والإناث (أستاذ وأستاذ) حافظ مع إجازة


          </p>
        </div>
      </div>
    </div>
  </div>
  <div className=" py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto">
      <div className="flex items-center">
        <div className="flex-shrink-0">
        <IoIosPeople className='text-3xl		text-[#5c544d]'/>

        </div>
        <div className="ml-4 text-end">
          <h3 className="text-lg leading-6 font-medium text-[#5c544d]">
          نظام الحلقات

          </h3>
          <p className="text-sm text-gray-500 text-end">
          قم بإنشاء حلقة أسبوعية لدراسة القرآن الكريم (حلقة) مع عائلتك وأصدقائك

</p>
        </div>
      </div>
    </div>
  </div>
  </div>

  {/* القسم الثاني */}
  <div className="flex-1  p-4">
  <div className=" py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto">
      <div className="flex items-center">
        <div className="flex-shrink-0">
        <FaPeopleArrows className='text-3xl		text-[#5c544d]'/>

        </div>
        <div className="ml-4 text-end">
          <h3 className="text-lg leading-6 font-medium text-[#5c544d] ">
          حصص فردية

          </h3>
          <p className="text-sm text-gray-500 ">
          التعلم الممتع الحديث في فصول فردية مصممة للأطفال


          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto">
      <div className="flex items-center">
        <div className="flex-shrink-0">
        <FaRegGrinHearts className='text-3xl		text-[#5c544d]' />
        </div>
        <div className="ml-4 text-end">
          <h3 className="text-lg leading-6 font-medium text-[#5c544d]">
          مناسب للأطفال
          </h3>
          <p className="text-sm text-gray-500">
          التعلم القائم على المكافأة باستخدام أفضل الأساليب والتقنيات

</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>



<div className="relative w-full bg-cover bg-center py-24 bg-h">
  <div className="absolute inset-0 bg-[#5c544d] opacity-70" />
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
    <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#5c544d] py-14 w-full lg:mt-[-150px] hidden sm:grid">
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold text-white">100</div>
        <div className="text-base sm:text-lg text-white">مدرس محترف</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold text-white">15</div>
        <div className="text-base sm:text-lg text-white">دورة</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold text-white">700+</div>
        <div className="text-base sm:text-lg text-white">عائلة</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold text-white">1,200+</div>
        <div className="text-base sm:text-lg text-gray-400">طالب</div>
      </div>
    </div>
    <div className="text-center text-white mt-8">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
        دروس القرآن الكريم اونلاين
      </h2>
      <p className="text-base sm:text-lg md:text-2xl mt-4">
        <span>حدد موعدًا للتجربة المجانية اليوم!</span>
        <br />
        <span>تعلم عبر الإنترنت في المنزل</span>
      </p>
    </div>
  </div>
</div>
<section className='py-5 px-4 sm:px-6 lg:px-8'>
  <div className='container mx-auto py-5'>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
<div>
  <img src={img1} alt="" className='w-full h-auto' />
</div>
<div>
  <img src={img1} alt="" className='w-full h-auto' />
</div>
{/*  */}
<div>
  <img src={img2} alt="" className='w-full h-auto' />
</div>
<div>
  <img src={img1} alt="" className='w-full h-auto' />
</div>
{/*  */}
<div>
  <img src={img5} alt="" className='w-full h-auto' />
</div>
<div>
  <img src={img1} alt="" className='w-full h-auto' />
</div>
</div>
<div className='text-center my-5'>
<button className="bg-[#a0876e] text-white px-4 py-2 rounded-md ">
اطلع علي كل الدورات
      </button>
</div>
  </div>
</section>
{/*  */}
<section className='bg-[#f1f1f1] py-12'>
  <div className='container mx-auto py-5'>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-4' >
<div className='text-end'>
 <p className='py-3 font-bold'>أفضل منصة لتعلم القرآن الكريم والعربية عبر الإنترنت <br />للأطفال والعائلات المسلمة</p>
 <p className='py-3 font-bold'>موثوق به من قبل آلاف العائلات المسلمة في الولايات <br />المتحدة الأمريكية وكندا والمملكة المتحدة وأوروبا وأستراليا</p>
 <p className='py-3 font-bold'>معلمون ذكور / إناث يتحدثون اللغة العربية (حافظ مع إجازة) من مصر</p>
</div>
<div className='py-14'>
  <h1 className='text-[#5c544d] text-end text-5xl		font-bold'>مرحبا بكم في <br />اكاديمية مفازا</h1>
</div>
</div>
  </div>
</section>
{/*  */}
<section className='bg-[#191919] px-4 sm:px-6 lg:px-8'>
  <div className='container mx-auto py-5'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <div>
        <img src={img6} alt="" className='w-full max-h-96 object-cover' />
      </div>
      <div className='text-end py-16'>
        <h2 className='text-[#a0876e] text-end text-5xl font-bold'>موثوق به في جميع أنحاء العالم</h2>
        <p className='text-white py-5 font-bold text-3xl'>ابدأ تعلم قراءة القرآن والتجويد والحفظ عبر الإنترنت وأنت مرتاح في منزلك.</p>
        <p className='text-white py-7 font-bold text-3xl'>مفازا اونلاين اكاديمي.</p>
      </div>
    </div>
  </div>
</section>
{/*  */}

    </>
  )
}
