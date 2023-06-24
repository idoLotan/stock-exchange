import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 h-[30vh] flex justify-center">
      <div className="flex justify-around p-5  w-[60%]  ">
        <div className="text-white p-5 ">Dialog</div>
        <div className="text-white p-5 ">
          <div className="font-bold"> General</div>
          <div className="p-3 transition-all hover:underline">About</div>
          <div className="p-3 transition-all hover:underline">Help</div>
        </div>
        <div className="text-white p-5 ">
          <div className="font-bold"> Users</div>
          <div className="p-3 transition-all hover:underline">Login</div>
          <div className="transition-all hover:underline">SignUp</div>
        </div>

        <div className="text-white p-5 ">
          <div className="font-bold"> Navigation</div>
          <div className="p-3 transition-all hover:underline">Home</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
