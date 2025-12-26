import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HeroContentStyle } from "../HeroContent";
const RejectRegister = () => {
  return (
    <div>
      <div className="flex flex-col gap-0 ">
        <div data-aos="fade-up" className="flex items-center gap-4  ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12   p-4 text-smallBlue " />
          <p>
            အချက်အလက်များမှာ မှန်ကန်ပြည့်စုံမှုမရှိသောကြောင့်
            ထပ်မံပြီးပြင်ဆင်ဖြည့်စွက်ပေးရန်လိုအပ်ပါသည်။
          </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12   p-4 text-smallBlue " />
          <p className="text-red-600">မှတ်ချက် :</p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12   p-4 text-smallBlue " />
          <p>
            အသေးစိတ်သိနိုင်ရန် ကျောင်းသားရေးရာ (၀၉-၂၀၅၉၆၀၄)သို့ဆက်သွယ်နိုင်ပါ
            သည်။
          </p>
        </div>

        <div data-aos="fade-up" className="flex items-center gap-4 ">
          {/* border border-smallBlue */}
          <Link
            to="/EditRegistrationForm"
            // href="#"
            className={HeroContentStyle.registerButton}
          >
            {/* <CiFileOn className="inline-block text-center items-center text-xl justify-center" />{" "} */}
            Edit Registration Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RejectRegister;
