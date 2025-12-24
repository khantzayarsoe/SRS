import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { StepProps } from "../types";
import { RegisterationFormStyle } from "../types";

const Step4: React.FC<StepProps> = ({
  formData,
  setFormData,
  errors,
  setErrors,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      mother: { ...prev.mother, [name]: value },
    }));

    if (errors && errors[name]) {
      setErrors?.((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const { mother } = formData;
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, //  animation should happen only once
      offset: 100,
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        အမိ/အုပ်ထိန်းသူ၏အချက်အလက်များဖြည့်သွင်းရန်
      </h2>
      <div data-aos="fade-up" className="space-y-9">
        {/* First Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* Name Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              အမည် (မြန်မာဘာသာဖြင့်)
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="nameBurmese"
                value={mother.nameBurmese}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.nameBurmese ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.nameBurmese && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nameBurmese}
                </p>
              )}
            </div>
          </div>

          {/* Name Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              Name(English)
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="nameEnglish"
                value={mother.nameEnglish}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.nameEnglish ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.nameEnglish && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nameEnglish}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* nationailty Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>လူမျိုး</label>
            <div className="flex-1">
              <input
                type="text"
                name="nationailty"
                value={mother.nationailty}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.nationailty ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.nationailty && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nationailty}
                </p>
              )}
            </div>
          </div>

          {/* religion Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              ကိုးကွယ်သည့်ဘာသာ
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="religion"
                value={mother.religion}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.religion ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.religion && (
                <p className="text-red-500 text-sm mt-1">{errors.religion}</p>
              )}
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* state_division Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              မြို့နယ်/ပြည်နယ်/တိုင်း
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="state_division"
                value={mother.state_division}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.state_division ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.state_division && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state_division}
                </p>
              )}
            </div>
          </div>

          {/* NRC Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              မှတ်ပုံတင်အမှတ်
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="nrc"
                value={mother.nrc}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.nrc ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.nrc && (
                <p className="text-red-500 text-sm mt-1">{errors.nrc}</p>
              )}
            </div>
          </div>
        </div>

        {/* Fifth Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* University Enter Year Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              နိုင်ငံခြားသား
            </label>
            <div className="flex-1">
              <div className="flex flex-row sm:flex-row gap-3 sm:gap-4">
                {/* Semester 1 Radio */}
                <label className="flex items-center space-x-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="homebred"
                    value="homebred"
                    checked={mother.homebred === "homebred"}
                    onChange={handleChange}
                    defaultChecked
                    className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700 text-sm  ">တိုင်းရင်းသား</span>
                </label>

                {/* Semester 2 Radio */}
                <label className="flex items-center space-x-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="homebred"
                    value="abroadbred"
                    checked={mother.homebred === "abroadbred"}
                    onChange={handleChange}
                    className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700 text-sm ">နိုင်ငံခြားသား</span>
                </label>
              </div>
              {errors?.homebred && (
                <p className="text-red-500 text-sm mt-1">{errors.homebred}</p>
              )}
            </div>
          </div>

          {/* Blank Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1"></div>
        </div>

        {/* eighth Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* phone Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              အလုပ်အကိုင်/ရာထူးဌာန
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="occupation"
                value={mother.occupation}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.occupation ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.occupation && (
                <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>
              )}
            </div>
          </div>

          {/* fulladdress Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              နေရပ်လိပ်စာအပြည့်အစုံ
            </label>
            <div className="flex-1">
              <textarea
                // type="text"
                name="fulladdress"
                value={mother.fulladdress}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.fulladdress ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.fulladdress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fulladdress}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
