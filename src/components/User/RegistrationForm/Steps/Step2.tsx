import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { StepProps } from "../types";
import { RegisterationFormStyle } from "../types";

const Step2: React.FC<StepProps> = ({
  formData,
  setFormData,
  errors,
  setErrors,
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      student: { ...prev.student, [name]: value },
    }));

    if (errors && errors[name]) {
      setErrors?.((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const { student } = formData;

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        ကျောင်းသားအချက်အလက်များဖြည့်သွင်းရန်
      </h2>

      <div data-aos="fade-up" className="space-y-9">
        {/* First Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* Photo Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              မိမိ၏ဓာတ်ပုံရွေးချယ်ရန်
            </label>
            <div className="flex-1">
              <input
                type="file"
                name="photo"
                value={student.photo}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.photo ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.photo && (
                <p className="text-red-500 text-sm mt-1">{errors.photo}</p>
              )}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* Roll No Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              အမည် (မြန်မာဘာသာဖြင့်)
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="nameBurmese"
                value={student.nameBurmese}
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

          {/* University_register_no Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              Name(English)
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="nameEnglish"
                value={student.nameEnglish}
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

        {/* Third Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* nationailty Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>လူမျိုး</label>
            <div className="flex-1">
              <input
                type="text"
                name="nationailty"
                value={student.nationailty}
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
                value={student.religion}
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

        {/* Fourth Row */}
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
                value={student.state_division}
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
                value={student.nrc}
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
              {/* Radio buttons container - responsive layout */}
              <div className="flex flex-row sm:flex-row gap-3 sm:gap-4">
                {/* Semester 1 Radio */}
                <label className="flex items-center space-x-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="homebred"
                    value="homebred"
                    checked={student.homebred === "homebred"}
                    onChange={handleChange}
                    defaultChecked
                    // className="h-6 w-6 text-smallBlue focus:ring-smallBlue border-gray-300"
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
                    checked={student.homebred === "abroadbred"}
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
            {/* <div className="flex-1">
              <input
                type="text"
                name="nationailty"
                value={student.nationailty}
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
            </div> */}
          </div>

          {/* NRC Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>မွေးသက္ကရာဇ်</label>
            <div className="flex-1">
              <input
                type="date"
                name="dob"
                value={student.dob}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.dob ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.dob && (
                <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
              )}
            </div>
          </div>
        </div>

        {/* sixth Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* matriculation_rollno Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              တက္ကသိုလ်ဝင်တန်းစာမေးပွဲ အောင်မြင်သည့်-ခုံအမှတ်
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="matriculation_rollno"
                value={student.matriculation_rollno}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.matriculation_rollno
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors?.matriculation_rollno && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.matriculation_rollno}
                </p>
              )}
            </div>
          </div>

          {/* matriculation_year Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              တက္ကသိုလ်ဝင်တန်းစာမေးပွဲ အောင်မြင်သည့်-ခုနှစ်
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="matriculation_year"
                value={student.matriculation_year}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.matriculation_year
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors?.matriculation_year && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.matriculation_year}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* seventh Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* nationailty Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>
              တက္ကသိုလ်ဝင်တန်းစာမေးပွဲ အောင်မြင်သည့်-စာစစ်ဌာန
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="matriculation_board"
                value={student.matriculation_board}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.matriculation_board
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors?.matriculation_board && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.matriculation_board}
                </p>
              )}
            </div>
          </div>

          {/* blank Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            {/* <label className="font-medium lg:w-40">Religion</label>
            <div className="flex-1">
              <input
                type="text"
                name="religion"
                value={student.religion}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.religion ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.religion && (
                <p className="text-red-500 text-sm mt-1">{errors.religion}</p>
              )}
            </div> */}
          </div>
        </div>

        {/* eighth Row */}
        <div className="flex flex-col xl:flex-row lg:gap-4 gap-4">
          {/* phone Field */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-1">
            <label className={RegisterationFormStyle.label}>ဖုန်းနံပါတ်</label>
            <div className="flex-1">
              <input
                type="text"
                name="phone"
                value={student.phone}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded ${
                  errors?.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors?.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
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
                value={student.fulladdress}
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

export default Step2;
