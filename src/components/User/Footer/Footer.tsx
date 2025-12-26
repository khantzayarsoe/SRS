import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center text-white min-h-[100px] px-4 sm:px-6 lg:px-8 bg-darkBlue py-4 space-y-1 sm:space-y-2">
        <p className="text-xs sm:text-sm md:text-sm lg:text-sm">
          Supervised by Dr.Thein Htay Zaw
        </p>
        <p className="text-xs sm:text-sm md:text-sm lg:text-sm">Developed by</p>
        <p className="text-xs sm:text-sm md:text-sm lg:text-sm">
          Copyright &copy; University of Computer Studies (Mandalay) -
          www.cumandalay.edu.mm
        </p>
      </div>
    </div>
  );
};

export default Footer;
