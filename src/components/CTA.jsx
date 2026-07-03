"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaPhoneAlt, FaChevronDown } from 'react-icons/fa';

// Validation Schema using Yup
const ContactSchema = Yup.object().shape({
  businessName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phone: Yup.string()
    .matches(/^[0-9\s]+$/, 'Only numbers and spaces allowed')
    .min(8, 'Too Short!')
    .required('Required'),
  businessType: Yup.string()
    .required('Required'),
  message: Yup.string()
    .min(10, 'Too Short!')
    .required('Required'),
});

const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Gradient Container */}
        <div className="bg-gradient-to-r from-[#FFF5F3] to-[#FFF0ED] rounded-[40px] px-8 md:px-16 py-16 md:py-24 relative flex flex-col xl:flex-row">
          
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-[55%] relative z-10">
            <h2 className="text-[40px] md:text-[48px] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Ready To Create Your Own<br />Digital QR Menu?
            </h2>
            
            <p className="text-gray-600 font-medium leading-relaxed mb-4 text-[15px] max-w-lg">
              Transform your menu and reach out to us — we'll set everything up for you. Whether you need a simple QR menu or full-service management, we'll guide you through the process.
            </p>
            
            <p className="text-gray-900 font-bold leading-relaxed mb-8 text-[15px] max-w-lg">
              Reach us today and take the first step toward a smarter, more engaging menu!
            </p>

            <a href="tel:+971527565719" className="inline-flex items-center gap-3 bg-[#9C1C13] text-white font-bold text-sm px-6 py-3.5 rounded-lg hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20">
              <FaPhoneAlt className="w-3.5 h-3.5" />
              Call Us: +971 52 756 57 19
            </a>

            {/* Hand-drawn Arrow SVG */}
            <div className="absolute right-[-40px] top-[40%] hidden xl:block text-[#9C1C13]">
              <svg width="80" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[15deg]">
                <path d="M10,80 Q30,10 90,40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M70,25 L92,41 L70,55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Right Side: Overlapping Form Card */}
          <div className="w-full xl:w-[440px] xl:absolute xl:right-12 xl:-top-12 xl:-bottom-12 bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-10 z-20 mt-16 xl:mt-0 flex flex-col justify-center border border-gray-50">
            <h3 className="text-3xl font-black text-center text-gray-900 mb-8 tracking-tight">Let's Talk Your Menu!</h3>
            
            <Formik
              initialValues={{
                businessName: '',
                email: '',
                phone: '',
                businessType: 'Restaurant',
                message: ''
              }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  alert('Message Sent!');
                  setSubmitting(false);
                  resetForm();
                }, 400);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="flex flex-col gap-5">
                  
                  {/* Business Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-gray-700">Business Name</label>
                    <Field 
                      name="businessName" 
                      placeholder="My Business"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.businessName && touched.businessName ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-red-100 transition-all`}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-gray-700">Your Email</label>
                    <Field 
                      name="email" 
                      type="email"
                      placeholder="email@yourbusiness.com"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email && touched.email ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-red-100 transition-all`}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-gray-700">Phone Number</label>
                    <div className={`flex w-full rounded-xl border overflow-hidden ${errors.phone && touched.phone ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-white'} focus-within:ring-2 focus-within:ring-red-100 transition-all`}>
                       {/* Country Code Prefix */}
                       <div className="flex items-center gap-2 bg-gray-50/50 px-4 py-3 border-r border-gray-100 shrink-0">
                         <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="w-4 rounded-sm shadow-sm" />
                         <span className="text-xs font-bold text-gray-700">+971</span>
                         <FaChevronDown className="text-gray-400 text-[10px]" />
                       </div>
                       <Field 
                        name="phone" 
                        placeholder="X XXX XXXX XXX"
                        className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Business Type */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-[11px] font-bold text-gray-700">Your Business</label>
                    <Field 
                      as="select"
                      name="businessType" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.businessType && touched.businessType ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-red-100 transition-all appearance-none cursor-pointer`}
                    >
                      <option value="Restaurant">Restaurant</option>
                      <option value="Cafe">Cafe</option>
                      <option value="Supermarket">Supermarket</option>
                      <option value="Other">Other</option>
                    </Field>
                    <FaChevronDown className="absolute right-4 top-[38px] text-gray-400 text-[10px] pointer-events-none" />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-gray-700">How Can We Help You?</label>
                    <Field 
                      as="textarea"
                      name="message" 
                      rows="3"
                      placeholder="Tell us about your needs..."
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message && touched.message ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-red-100 transition-all resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#9C1C13] text-white font-bold text-sm py-3.5 rounded-lg hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20 mt-2"
                  >
                    Send Message
                  </button>

                </Form>
              )}
            </Formik>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
