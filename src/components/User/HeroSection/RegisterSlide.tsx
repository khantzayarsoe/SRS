import Slider from "react-slick";
//test
const TextList = [
  {
    id: 0,
    language: "en",
    title: "Welcome To",
    subtitle: "University of Computer Studies (Mandalay)",
    content:
      "We're truly excited to have you here. Whether you're a new student just starting your journey or a returning student continuing your path, we're here to support and grow together. Let's make this academic journey meaningful, successful, and full of great memories. Welcome to UCS(MDY)!",
    buttonText: "Register Now",
  },
  {
    id: 1,
    language: "mm",
    title: "ကွန်ပျူတာတက္ကသိုလ်(မန္တလေး) မှ",
    subtitle: "နွေးထွေးစွာ ကြိုဆိုပါ၏။",
    content: `ပထမနှစ်တွင်တက်ရောက်လာသော မောင်မယ်သစ်လွင် ကျောင်းသား/သူများအတွက်ဖြစ်စေ၊ ဆက်လက်တက်ရောက်ပညာသင်ယူလျှက်ရှိသော စီနီယာကျောင်းသား/သူများအတွက်ဖြစ်စေ— စွမ်းဆောင်နိုင်စွမ်းပြသနိုင်မည့်အခွင့်အလမ်းကောင်းများစွာက ဒီနေရာမှာ စောင့်ဆိုင်းလျက်ရှိပါတယ်။ ပညာရေးခရီးစဉ်တစ်လျှောက် လေ့လာသင်ယူမှုအပြည့်အဝနှင့် အမှတ်တရကောင်းများဖြင့် ပြည့်နှက်စေလိုပါတယ်။ မိတ်ဖက်အသစ်ကောင်းများ၊ အတွေ့အကြုံအသစ်များနဲ့အတူ တန်ဖိုးရှိတဲ့ ခရီးတစ်ခုပဲ ဖြစ်လာစေနိုင်မှာပါ။ ကွန်ပျူတာတက္ကသိုလ် (မန္တလေး) မှ ကျောင်းသား၊ ကျောင်းသူများအား နွေးထွေးစွာကြိုဆိုပါတယ်။`,
    buttonText: "စာရင်းသွင်းရန်",
  },
];

const RegisterSlide = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {TextList.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center text-center px-4"
            >
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold">
                {data.title}
              </h2>

              <h3 className="text-sm sm:text-xl lg:text-2xl font-semibold mt-3">
                {data.subtitle}
              </h3>

              <p className="mt-4 max-w-xl mx-auto text-white text-xs sm:text-base lg:text-base">
                {data.content}
              </p>

              <a
                href="#Register"
                className="mt-6 inline-block bg-transparent text-white font-semibold
             px-8 py-2 rounded-full
             border border-smallBlue
             hover:bg-smallBlue transition-colors duration-700 "
              >
                {data.buttonText}
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RegisterSlide;
