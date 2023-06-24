import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="  bg-gray-300">
        <div className="max-w-screen-xxl mx-auto flex flex-wrap items-center justify-between px-4 py-2.5 md:px-6">
          <a href="/" className="step-1 flex items-center max-sm:mb-3">
            <span className="self-center whitespace-nowrap text-xl font-semibold ">
              Stock Exchange
            </span>
          </a>
          <div className="flex items-center pt-2 max-sm:w-full">
            <ul className="nav-step-3 mr-6 mt-0   flex flex-row   flex-wrap font-medium">
              <li>
                <a
                  href="/home"
                  className="rounded-full	 px-3 py-2 text-lg transition-all hover:-translate-y-0.5 hover:bg-[#c0f5b7] hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <div class="ml-1 mr-1 h-8 w-[1.5px] bg-black"></div>
              <li>
                <a
                  href="/login"
                  className=" rounded-full px-3 py-2 text-lg transition-all hover:-translate-y-0.5 hover:bg-[#c0f5b7] hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="rounded-full px-3 py-2 text-lg transition-all hover:-translate-y-0.5 hover:bg-[#c0f5b7] hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
