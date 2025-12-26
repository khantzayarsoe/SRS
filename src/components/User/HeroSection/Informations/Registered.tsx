import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HeroContentStyle } from "../HeroContent";

const Registered = () => {
  return (
    <div>
      <div className="flex flex-col gap-0 ">
        <div data-aos="fade-up" className="flex items-center gap-4  ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-4 text-smallBlue " />
          <p>ကျောင်းသားမှတ်ပုံတင်ခြင်းလုပ်ဆောင်ပြီးဖြစ်ပါသည်။ </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12 p-4 text-smallBlue " />
          <p>
            ကျောင်းသားရေးရာမှ အချက်အလက်များမှန်/မမှန် စစ်ဆေးပြီး
            (၂၄နာရီအတွင်း)အတည်ပြုပေးပါမည်။
          </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12 p-4 text-smallBlue " />
          <p>
            အတည်ပြုပြီးနောက်မှသာ Payment button ကိုနှိပ်ပြီး ငွေသွင်းခြင်း
            လုပ်ဆောင်နိုင်ပါမည်။
          </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12 p-4 text-smallBlue " />
          <p>
            ၂၄နာရီနောက်ပိုင်း အတည်ပြုချက်မရသေးလျှင် အသေးစိတ်သိနိုင်ရန်
            ကျောင်းသားရေးရာ(၀၉-၂၀၅၉၆၀၄)သို့ဆက်သွယ်နိုင်ပါ သည်။
          </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-4 text-smallBlue " />
          <p>
            ကျောင်းသားရေးရာမှ အတည်ပြုမပြီးသေးခင်အချိန်ထိ မိမိအချက်အလက် များကို
            ပြင်ဆင်နိုင်ပါသည်။
          </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12 p-4 text-smallBlue " />
          <p>
            ကျောင်းသားရေးရာမှ အတည်ပြုပြီးလျှင် မိမိ အချက်အလက်များကို ပြင်
            ဆင်ခွင့်မရှိတော့ပဲကြည့်ရှုရုံသာရနိုင်ပါသည်။
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

export default Registered;
