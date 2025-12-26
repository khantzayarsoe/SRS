import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RegisterationFormStyle, type StepProps } from "../types";

const Step1: React.FC<StepProps> = ({
  formData,
  setFormData,
  errors,
  setErrors,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      student_affair: { ...prev.student_affair, [name]: value },
    }));

    if (errors && errors[name]) {
      setErrors?.((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const { student_affair } = formData;
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div>
      {/* <h1 className=" text-xl font-poppins justify-center items-center text-center py-1 ">
        ၂၀၂၅-၂၀၂၆ ပညာသင်နှစ်
      </h1>
      <h1 className=" text-lg font-poppins justify-center items-center text-center py-1 ">
        ကွန်ပျူတာတက္ကသိုလ် (မန္တလေး)
      </h1>
*/}
      {/* <h1 className=" text-2xl font-poppins justify-center items-center text-center py-1 underline mb-7">
        Student Registration Form{" "}
      </h1> */}
      <h1 className="bg-darkBlue text-white md:pt-5 md:pb-5 pt-10 pb-10 rounded-lg  text-2xl font-poppins justify-center items-center text-center py-1  mb-7 hidden sm:block">
        Student Registration Form
      </h1>
      <h2 className="text-sm font-bold mb-4 text-red-600">
        *အချက်အလက်များအား ပြည်ထောင်စုမြန်မာဖောင့်ဖြင့်သာ ဖြည့်သွင်းရန်
      </h2>
      <h2 className="text-xl font-bold mb-5">
        သင်တန်းရေးရာအချက်အလက်များဖြည့်သွင်းရန်
      </h2>
      {/* <p className="text-sm font-bold mb-4">
        ယူနီကုတ်ဖောင့်ဖြင့် ဖြည့်သွင်းပေးရန်။
      </p> */}

      {/* testing */}

      <div data-aos="fade-up" className="space-y-9">
        {/* First Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* Year Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>သင်တန်းနှစ်</label>
            <div className="flex-1">
              <input
                type="text"
                name="year"
                value={student_affair.year}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.year ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.year && (
                <p className="text-red-500 text-sm mt-1">{errors.year}</p>
              )}
            </div>
          </div>

          {/* Major Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>အထူးပြုဘာသာ</label>
            <div className="flex-1">
              <select
                name="major"
                value={student_affair.major}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded appearance-none bg-white ${
                  errors?.major ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="CST">CST</option>
                <option value="CS">CS</option>
                <option value="CT">CT</option>
              </select>

              {errors?.major && (
                <p className="text-red-500 text-sm mt-1">{errors.major}</p>
              )}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* Roll No Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>ခုံအမှတ်</label>
            <div className="flex-1">
              <input
                type="text"
                name="rollno"
                value={student_affair.rollno}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.rollno ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.rollno && (
                <p className="text-red-500 text-sm mt-1">{errors.rollno}</p>
              )}
            </div>
          </div>

          {/* University_register_no Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              တက္ကသိုလ်မှတ်ပုံတင်အမှတ်
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="university_register_no"
                value={student_affair.university_register_no}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.university_register_no
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors?.university_register_no && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.university_register_no}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* University Enter Year Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              တက္ကသိုလ်ဝင်ရောက်သည့်နှစ်
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="university_enter_year"
                value={student_affair.university_enter_year}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.university_enter_year
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors?.university_enter_year && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.university_enter_year}
                </p>
              )}
            </div>
          </div>

          {/* Semester Field */}

          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>စာသင်နှစ်ဝက်</label>
            <div className="flex-1">
              {/* Radio buttons container - responsive layout */}
              <div className="flex flex-row sm:flex-row gap-3 sm:gap-4">
                {/* Semester 1 Radio */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="semester"
                    value="sem1"
                    checked={student_affair.semester === "sem1"}
                    onChange={handleChange}
                    defaultChecked
                    // className="h-6 w-6 text-smallBlue focus:ring-smallBlue border-gray-300"
                    className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700 text-sm ">ပထမနှစ်ဝက်</span>
                </label>

                {/* Semester 2 Radio */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="semester"
                    value="sem2"
                    checked={student_affair.semester === "sem2"}
                    onChange={handleChange}
                    className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700 text-sm ">ဒုတိယနှစ်ဝက်</span>
                </label>
              </div>
              {errors?.semester && (
                <p className="text-red-500 text-sm mt-1">{errors.semester}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* testing */}
    </div>
  );
};

export default Step1;
