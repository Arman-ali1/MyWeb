import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const[flage,setFlage]=useState()
  const timeTaken = 4;
  const questions= 2;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, contact, email, timeTaken);
    
    try {
      //axios syantax
      
        await axios
        .post("https://myweb-2t4i.onrender.com/api/v1/quiz/createuser",{name,contact,email,timeTaken,questions})
        .then((res) => {
          console.log("data send successfully", res.data);
          // navigate("/contest")
          const UserStatus={
            lgn:email
          }
            navigate('/contest',{ state: { UserStatus } });
        //   navigate("/getcurrentuser");
        });
    } catch (error) {
      console.log("error during calling save api",error);
    }
  };

  const inputcss =
    "min-h-[60px] sm:min-w-[60%] border focus:outline-none focus:ring focus:ring-green-400 rounded-xl  text-black border-green-400 text-green-400 text-xl text-left mb-4 pl-2 ";

  const onhover =
    " m-5 p-3 text-4xl font-extrabold  text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-500";

  return (
    <div className="m-0 bg-slate-400 min-h-[900px]  pt-36">
      <h3 className="text-6xl text-center  m-5 font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
        Welcome to the contest{" "}
      </h3>

      <div
        // onSubmit={handleSubmit}
        className=" sm:min-w-[50%] sm:max-w-[40%]  max-w-[90%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-center mb-5 shadow-xl shadow-neutral-700"
      >
        <div className="min-h-[100px] text-start mb-2 ">
          <h3 className=" p-3 rounded-md border-emerald-400 text-6xl text-center  m-5  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
            {" "}
            Register{" "}
          </h3>
        </div>

        <div>
          <label
            className="mr-10 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-500"
            htmlFor="contact"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Write name..."
            className={inputcss}
          />
        </div>

        <div>
          <label
            className="mr-9 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-500"
            htmlFor="contact"
          >
            Phone
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Write contact..."
            className={inputcss}
          />
        </div>

        <div>
          <label
            className="mr-12 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-500"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Write email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputcss}
          />
        </div>
        <button
        // onClick={()=>navigate("/contest")}
        onClick={handleSubmit}
          type="submit"
          className="border p-3 rounded-md border-emerald-400 text-4xl text-center  m-5  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500"
         
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
