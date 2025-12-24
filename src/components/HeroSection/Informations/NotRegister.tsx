import React, { useEffect } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const NotRegister = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-0 ">
        <div data-aos="fade-up" className="flex items-center gap-4  ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-3 text-sm p-4 text-smallBlue " />
          <p>ယူနီကုတ်ဖောင့်ဖြင့် ဖြည့်သွင်းပေးရန်။</p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-3 text-sm p-4 text-smallBlue " />
          <p>အချက်အလက်များကို မှန်ကန်စွာဖြည့်သွင်းပေးရန်။</p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-3 text-sm p-4 text-smallBlue " />
          <p>
            မိမိ၏ကျောင်းသားအကောင့်ဖြင့် မိမိ၏ကျောင်းအပ်လျှောက်လွှာကိုသာ
            တင်သွင်းနိုင်မည်ဖြစ်ပါသည်။
          </p>
        </div>

        <div data-aos="fade-up" className="flex items-center gap-4 ">
          {/* border border-smallBlue */}
          <Link
            to="/RegistrationForm"
            // href="#"
            className="mt-6 inline-block  text-white font-semibold
                 px-16 py-2 rounded-xl bg-green-600
                 border-none
                
                 hover:bg-green-500 transition-colors duration-700 "
          >
            {/* <CiFileOn className="inline-block text-center items-center text-xl justify-center" />{" "} */}
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotRegister;
