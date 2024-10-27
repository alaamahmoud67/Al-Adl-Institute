import React from 'react'
import '../App.css'
import { FaMapMarkerAlt ,FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePermPhoneMsg } from "react-icons/md";

export default function Contact() {
  return (
    <>
     <div className="relative  h-[50vh] bg-cover bg-center bg-contact mb-5 " >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl	font-bold		">تواصل معنا</h1>
      </div>
    </div>
    <section className="text-gray-700 body-font relative bg-[#1a1a1a]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        اتصل بنا
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
        أي شيء يتعلق بالحقائب والموضة والتصميم.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
  <div className="flex flex-wrap -m-2">
   
    <div className="p-2 w-1/2">
      <div className="relative">
        <label htmlFor="firstName" className="leading-7 text-sm text-gray-300">
          الاسم الأول
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full rounded border border-gray-700 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>

   
    <div className="p-2 w-1/2">
      <div className="relative">
        <label htmlFor="fullName" className="leading-7 text-sm text-gray-300">
          الاسم الكامل
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="w-full rounded border border-gray-700 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>

  
    <div className="p-2 w-1/2">
      <div className="relative">
        <label htmlFor="email" className="leading-7 text-sm text-gray-300">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded border border-gray-700 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>

   
    <div className="p-2 w-1/2">
      <div className="relative">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-300">
          رقم الهاتف
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded border border-gray-700 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
 <div className="p-2 w-full">
<div className="relative">
  <label htmlFor="message" className="leading-7 text-sm text-gray-300">
    الرسالة
  </label>
  <textarea
    id="message"
    name="message"
    className="w-full  rounded border border-gray-700  h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
  ></textarea>
</div>
</div> 
   
    <div className="p-2 w-full">
      <button className="flex mx-auto text-white bg-[#d97706] border-0 py-2 px-8 focus:outline-none rounded-full text-lg">
      Send Message
      </button>
    </div>
  </div>
</div>
  </div>
</section>

<section>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:w-1/2 mx-auto py-5 gap-5">
    <div className="p-5 bg-color flex flex-col items-center justify-center group">
      <FaMapMarkerAlt className="text-2xl font-semibold text-[#d97706]" />
      <h4 className="text-white group-hover:text-[#d97706]">
        المركز الرئيسي: مدينة الرياض _حي السويدي الغربي _شارع حمزة بن عبد المطلب وفرعه بمحافظة القويعية: شارع الملك عبد العزيز
        مكتب القاهرة: القاهرة-7 عمارات الشرطة-جسر السويس
      </h4>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="p-5 bg-color flex flex-col items-center justify-center group">
        <MdOutlinePermPhoneMsg className="text-2xl font-semibold text-[#d97706]" />
        <div className="group-hover:text-[#d97706]">
          <h4 className="text-white">السعودية: 0554183175</h4>
          <h4 className="text-white">مصر: 01128739311</h4>
          <h4 className="text-white">مصر: 01550822640</h4>
        </div>
      </div>

      <div className="p-5 bg-color flex flex-col items-center justify-center group">
        <FaRegEnvelope className="text-2xl font-semibold text-[#d97706]" />
        <h4 className="text-white group-hover:text-[#d97706]">contact@4thpyarmids.com</h4>
      </div>
    </div>
  </div>
</section>
<section className="w-full h-screen  flex items-center justify-center">
  <div className="w-full lg:w-3/4 h-[90vh] rounded-lg overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://maps.google.com/maps?q=%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%20_%D8%AD%D9%8A%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%AF%D9%8A%20%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%20_%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%AD%D9%85%D8%B2%D9%87%20%D8%A8%D9%86%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%85%D8%B7%D9%84%D8%A8&t=m&z=17&output=embed&iwloc=near"
      allowFullScreen=""
      loading="lazy"
      title="مدينة الرياض _حي السويدي الغربي _شارع حمزه بن عبد المطلب"
    ></iframe>
  </div>
</section>
    </>
  )
}
