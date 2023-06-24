import React from "react";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";
import { Icon } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="h-[100vh] bg-white">
        <div className=" p-[5vw]">
          <div className="max-md:w-full">
            <div className="flex justify-between">
              <div className="mt-11 flex flex-col pt-12">
                <h1 className="mb-4 max-w-2xl text-left text-4xl font-extrabold leading-none tracking-tight md:text-5xl  xl:text-6xl">
                  start your stocks search
                </h1>
                <p className="mb-6 max-w-2xl text-left  font-light text-gray-600 md:text-lg lg:mb-8 lg:text-xl">
                  search stocks From checkout to global sales tax compliance,
                  companies around the world use Flowbite to simplify their
                  payment stack.
                </p>
                <Btn onClick={() => navigate("/searchPage")}></Btn>
              </div>
            </div>
          </div>
          <div className="w-1/2 max-md:w-full  "></div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default Home;
