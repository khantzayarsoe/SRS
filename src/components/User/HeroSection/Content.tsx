import React, { useEffect, useState } from "react";
import {
  MdMenu,
  MdAccountCircle,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md";

import NotRegister from "./Informations/NotRegister";
import Registered from "./Informations/Registered";
import ApproveRegister from "./Informations/ApproveRegister";
import RejectRegister from "./Informations/RejectRegister";
import AOS from "aos";
import "aos/dist/aos.css";
import BuildingImg from "../../../assets/mainbuilding.jpg";

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);
  return (
    <>
      <div
        id="Register"
        className="min-h-[550px] flex justify-center items-center py-12 sm:py-0"
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div data-aos="zoom-in">
              <img
                src={BuildingImg}
                alt="University of Computer Studies Mandaly"
                className="max-w-[550px] h-[350px] w-full mx-auto shadow-[-10px_10px_12px_smallBlue] object-cover rounded-xl "
              />
            </div>

            {/* text section  */}

            <div
              className=" flex flex-col justify-center gap-6
          sm:pt-0 text-black"
            >
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold text-black"
              >
                Register Now
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                မြန်မှန်တွက်ချက်တိုင်းပြည်တွက်
              </p>
              <NotRegister />

              {/* <Registered /> */}
              {/* <ApproveRegister /> */}
              {/* <RejectRegister />  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
