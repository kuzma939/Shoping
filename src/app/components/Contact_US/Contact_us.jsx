
"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../../Functions/useLanguage"; 
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { getInitialProductData } from "../../utils/productData"
import { handleFormSubmit, handleInputChange } from "../../utils/formHandlers";
import ProductDetails from "../products/ProductDetails"
import SocialLinks from "../SocialLinks/SocialLinks"
import OpeningHours from "../OpeningHours/OpeningHours"
import Map from "../Map/Map"
import ContactForm from "../ContactForm/ContactForm"
import SuccessMessage from "../../Functions/SuccessMessage"

const ContactUs = () => {
  const {  translateList } = useLanguage(); 
  
  const menuItems = translateList("contact", "hero");

  const searchParams = useSearchParams();
  console.log("Product Image URL:", searchParams.get("productImage"));

  const initialProductData = getInitialProductData(searchParams);
  console.log("Initial Product Data:", initialProductData);
  const [productData, setProductData] = useState(initialProductData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  {/*useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    console.log("Dark mode in localStorage:", darkMode);
    console.log("HTML class on load:", document.documentElement.className);
  }, []);
  */}
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const onFormSubmit = (e) => handleFormSubmit({
    e,
    setFormSubmitted,
    setSuccessMessageVisible,
    setProductData,
    setFormValues,
  });
  const onInputChange = (e) => handleInputChange(e, setFormValues);
 
  return (
    
    <div className="font-sans relative">
     <SuccessMessage/>
<section className="bg-[#fcf8f3] text:bg-black dark:bg-black dark:text-white text-center py-8 sm:py-10 md:py-16">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  mb-4 sm:mb-6 md:mb-8">
    {menuItems[0]}
  </h1>
  <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
    {menuItems[1]}  
  </p>
  
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 md:gap-16 lg:gap-28 bg-[#f5e7da]   dark:bg-[#111827] p-4 sm:p-6 md:p-8">
  
    <div className="w-full sm:w-1/2 lg:w-[56%] h-[400px] sm:h-[600px] lg:h-[700px]">
      <Image
        src={productData.image}
        alt={productData.name || "Default Image"}
        width={400}
        height={600}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        onError={(e) => {
          e.target.src = "/4.jpg";
        }}
      />
    </div>

    <div className="w-full sm:w-1/2 lg:w-1/3 space-y-4 sm:space-y-6">
      <address className="text-base sm:text-lg md:text-xl not-italic">
        500 Terry Francine Street, San Francisco, CA 94158
      </address>
      <div className="flex flex-col sm:flex-row xl:justify-center items-center gap-2 sm:gap-4">
        <a
          href="mailto:info@mysite.com"
          className="text-blue-400 hover:underline"
        >
          info@mysite.com
        </a>
        <span className="hidden sm:block bg-black dark:text-white">|</span>
        <p className="text-sm sm:text-base">123-456-7890</p>
      </div>
      {searchParams.get("productName") ? (

  <ProductDetails productData={productData} formSubmitted={formSubmitted} />
) : null }

       <ContactForm
  formValues={formValues}
  onInputChange={onInputChange}
  onFormSubmit={onFormSubmit}
  formSubmitted={formSubmitted}
  successMessageVisible={successMessageVisible}
/>

<SocialLinks />

</div>
</div>
</section>
<OpeningHours/>
<Map/>
  </div>
  
  );
};

export default ContactUs;
