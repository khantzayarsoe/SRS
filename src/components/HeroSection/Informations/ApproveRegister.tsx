import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ApproveRegister = () => {
  return (
    <div>
      <div className="flex flex-col gap-0 ">
        <div data-aos="fade-up" className="flex items-center gap-4  ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-3 text-sm p-4 text-smallBlue " />
          <p>
            ကျောင်းသားမှတ်ပုံတင်ခြင်းကို ကျောင်းသားရေးရာမှ အတည်ပြုပြီးဖြစ်ပါသည်။
          </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-3 text-sm p-4 text-smallBlue " />
          <p>
            KBZ Pay Online Payment ဖြင့်ငွေပေးသွင်းလိုပါက Pay With KBZ Pay
            button ကိုနှိပ်ပြီး ငွေပေးသွင်းခြင်း လုပ်ဆောင်ပါ။
          </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-3 text-sm p-4 text-smallBlue " />
          <p>
            ငွေသားဖြင့် ပေးသွင်းလိုပါက ငွေစာရင်းဌာနတွင် {}ရက်ထက်နောက်မကျဘဲ
            ငွေပေးသွင်းခြင်းလုပ်ဆောင်နိုင်ပါသည်။မိမိ၏ကျောင်းသားအကောင့်ဖြင့်
            မိမိ၏ကျောင်းအပ်လျှောက်လွှာကိုသာ တင်သွင်းနိုင်မည်ဖြစ်ပါသည်။
          </p>
        </div>

        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-3 text-sm p-4 text-smallBlue " />
          <p>
            ငွေပေးသွင်းရန် သတ်မှတ်ရက်ကျော်လွန်သွားသော
            ကျောင်းအပ်လျှောက်လွှာများအား Cancel သွားမည်ဖြစ်ပါသည်။
          </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4 ">
          <IoCheckmarkDoneSharp className="text-4xl h-12 w-12  p-3 text-sm p-4 text-smallBlue " />
          <p>
            အသေးစိတ်သိနိုင်ရန် ကျောင်းသားရေးရာ (၀၉-၂၀၅၉၆၀၄)သို့ဆက်သွယ်နိုင်ပါ
            သည်။
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
            Pay with KBZ Pay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApproveRegister;
