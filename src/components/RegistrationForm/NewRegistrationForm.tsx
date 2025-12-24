import React, { useEffect, useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import { RiArrowGoBackFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import { RegisterationFormStyle, type FormData } from "./types";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NewRegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    father: {
      //   name: "",
      //   email: "",
      //   phone: "",
      nameBurmese: "",
      nameEnglish: "",
      nationailty: "",
      religion: "",
      state_division: "",
      nrc: "",
      homebred: "",
      occupation: "",

      fulladdress: "",
    },
    mother: {
      nameBurmese: "",
      nameEnglish: "",
      nationailty: "",
      religion: "",
      state_division: "",
      nrc: "",
      homebred: "",
      occupation: "",

      fulladdress: "",
    },
    student_affair: {
      //Student Affairs 's info
      year: "",
      major: "",
      rollno: "",
      university_register_no: "",
      university_enter_year: "",
      semester: "",
    },
    student: {
      //Student 's personal info
      photo: "",
      nameBurmese: "",
      nameEnglish: "",
      nationailty: "",
      religion: "",
      state_division: "",
      nrc: "",
      homebred: "",
      dob: "",
      matriculation_rollno: "",
      matriculation_year: "",
      matriculation_board: "",
      phone: "",
      fulladdress: "",
    },
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    { number: 1, title: "Student Affairs's Info", component: Step1 },
    { number: 2, title: "Student's Info", component: Step2 },
    { number: 3, title: "Father's Info", component: Step3 },
    { number: 4, title: "Mother's Info", component: Step4 },
  ];

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    const member =
      step === 1
        ? formData.student_affair
        : step === 2
        ? formData.student
        : step === 3
        ? formData.father
        : formData.mother;
    // if ("nameBurmese" in member && !member.nameBurmese.trim()) {
    //   newErrors.nameBurmese = "This field is required";
    // }
    // if ("nameEnglish" in member && !member.nameEnglish.trim()) {
    //   newErrors.nameEnglish = "This field is required";
    // }

    // if ("phone" in member && !member.phone) {
    //   newErrors.phone = "This field is required";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  const CurrentStep = steps[currentStep - 1].component;

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);
  return (
    <div data-aos="fade-up" className={RegisterationFormStyle.mainContainer}>
      <div className="md:w-auto p-6 bg-darkBlue text-white rounded-lg">
        {/* Logo section */}
        <div className="flex items-center mb-6">
          <a href="#" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <span className="font-bold text-sm md:hidden lg:block">
              University of Computer Studies Mandalay
            </span>
          </a>
        </div>

        {/* Mobile: Step numbers horizontally */}
        <div className="flex md:hidden justify-between mb-4 ">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                currentStep === step.number
                  ? "bg-white text-blue-950 font-bold"
                  : ""
              }`}
            >
              {step.number}
            </div>
          ))}
        </div>

        {/* Desktop/Tablet: Original vertical layout with titles */}
        <div className="hidden md:flex md:flex-col md:space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex items-center space-x-2 ${
                currentStep === step.number ? "font-bold" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                  currentStep === step.number ? "bg-white text-blue-950" : ""
                }`}
              >
                {step.number}
              </div>
              <span>{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Area */}
      <div className="md: overflow-y-scroll md:h-65 md:scroll-smooth  flex-1 flex flex-col justify-between p-6 bg-white rounded-lg ">
        <div className="flex-1">
          {!isSubmitted ? (
            <CurrentStep
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />
          ) : (
            <div className="relative w-full text-green-600 text-2xl font-bold">
              {/* Center title */}
              <h1 className="text-center">
                Registration form submitted successfully!
              </h1>

              {/* <div data-aos="fade-up" className="flex items-center gap-4 ">
                <IoCheckmarkDoneSharp className="text-4xl h-12 w-12 p-4 text-smallBlue " />
                <p className="text-sm text-black">
                  ကျောင်းသားရေးရာမှ အချက်အလက်များမှန်/မမှန် စစ်ဆေးပြီး
                  (၂၄နာရီအတွင်း)အတည်ပြုပေးပါမည်။
                </p>
              </div>
             
              {currentStep >= 4 && (
                <Link
                  to="/"
                  className="absolute right-0 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 text-darkBlue hover:underline font-bold px-3 py-2 rounded-lg transition-colors"
                >
                  <RiArrowGoBackFill className="text-lg" />
                  <span className="text-black text-sm">Back To Home</span>
                </Link>
              )} */}

              <div className="relative">
                <div
                  data-aos="fade-up"
                  className="flex items-center gap-4 mb-4"
                >
                  <IoCheckmarkDoneSharp className="text-4xl h-12 w-12 p-4 text-smallBlue" />
                  <p className="text-sm text-black">
                    ကျောင်းသားရေးရာမှ အချက်အလက်များမှန်/မမှန် စစ်ဆေးပြီး
                    (၂၄နာရီအတွင်း)အတည်ပြုပေးပါမည်။
                  </p>
                </div>

                {currentStep >= 4 && (
                  <div className="flex justify-end">
                    <Link
                      to="/"
                      className="inline-flex items-center gap-1 font-bold px-3 py-2 rounded-lg transition-colors"
                    >
                      <span className="text-sm bg-green-700 p-3 rounded-lg text-white hover:bg-green-600">
                        Back To Home
                      </span>
                    </Link>
                  </div>
                )}

                {/* {currentStep >= 4 && (
                  <Link
                    to="/"
                    className="inline-flex items-center gap-1  font-bold px-3 py-2 rounded-lg transition-colors"
                  >
                   
                    <span className=" text-sm bg-green-700 p-3 rounded-lg text-white hover:bg-green-600">
                      Back To Home
                    </span>
                  </Link>
                )} */}
              </div>
            </div>

            // <div className="text-center text-green-600 text-2xl font-bold  ">
            //   <h1>Form submitted successfully!</h1>

            //   {currentStep >= 4 && (
            //     <Link
            //       to="/"
            //       className="inline-block items-center justify-center gap-0 text-darkBlue hover:underline font-bold px-3 py-2 rounded-lg transition-colors  "
            //     >
            //       <span className="text-black  text-sm">
            //         <RiArrowGoBackFill className="text-lg font-bold inline-block mb-1" />
            //         Back To Home
            //       </span>
            //     </Link>
            //   )}
            // </div>
          )}
        </div>

        {/* Navigation */}
        {!isSubmitted && (
          <div className="flex justify-between mt-4">
            {currentStep === 1 && (
              <Link
                to="/"
                className="flex items-center justify-center gap-2 text-darkBlue hover:text-white hover:bg-darkBlue font-bold px-6 py-2 rounded-lg transition-colors border border-darkBlue"
              >
                <RiArrowGoBackFill className="text-sm font-bold" />
                <span>HOME</span>
              </Link>
            )}
            {currentStep > 1 && (
              <button
                onClick={handlePrevious}
                className="text-gray-500 hover:text-blue-950"
              >
                Go Back
              </button>
            )}
            <div className="flex-1" />
            {currentStep < steps.length ? (
              <button
                onClick={handleNext}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => setIsSubmitted(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700  transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewRegistrationForm;
