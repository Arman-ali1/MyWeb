import React, { useState } from "react";
import Timer from "../Timer/Timer";
import { useLocation } from "react-router-dom";


function Header() {
  const [username, setUsername] = useState("Arman Ali");
  const [time, setTImer] = useState(60);

   const url = useLocation();
  // console.log(url)
  const submitbutton = (
    <div className=" sm:col-span-2 ">
      <button
        onClick={() => navigate("/contest")}
        type="submit"
        className="border w-[100%] p-5 rounded-md border-emerald-400 text-4xl text-center   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500"
      >
        Submit
      </button>
    </div>
  );
  return (
    <header className="fixed bg-slate-950 shadow-lg shadow-neutral-300  sm:min-h-[100px]  p-2  w-[100%]  ">
      <nav className=" grid sm:grid-cols-2 grid-cols-6  gap-5 ">
        <div className="sm:col-span-1 col-span-3 ">
          <h1 className="text-4xl text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
            {username}
          </h1>
        </div>

        <div className="sm:col-span-1 text-end col-span-3">
          <h1 className=" text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
           {/* {(url.pathname =="/contest") || (url.pathname =="/contest/")?<Timer/>:""} */}
           {/* <Timer/> */}
          </h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;