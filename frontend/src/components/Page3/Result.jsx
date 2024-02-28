
// import Question from "./../Question/Question.jsx";
import {  useState } from "react";
import axios from "axios";
import Solutions from "./Solutions.jsx";

function Result() {
  const [quizdetails, setQuizdetails] = useState([]);
  const url = "https://myweb-2t4i.onrender.com/api/v1/quiz/getalluser";
  const userdata = {
    name: "shivam",
    contact: "1233",
    email: "shivam1234@gmail.com",
    questions: 1,
    timeTaken: 4,
  };
  
// get all user Api call 
    axios.get(url)
    .then((res)=>(setQuizdetails(res.data[0].questions)))

  return (
    <div className=" bg-slate-400  min-w-[100%]  pt-16 pb-5">
      <div className="p-5 ">
        <h3 className=" mt-10 text-6xl p-3 text-center  font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-500">
          Congratulations for Submisson
        </h3>
      </div>
      <div className="p-3  ">
        <h3 className="outline  text-4xl p-3 text-center  font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-slate-800">
          Your Score : 5 / 5
        </h3>
      </div>

      <div className=" sm:min-w-[50%] sm:max-w-[40%]  max-w-[90%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-center mb-5 shadow-xl shadow-neutral-700">
        <div className="min-h-[100px] text-start mb-2 ">
          <h3 className=" p-3 rounded-md border-emerald-400 text-6xl text-center  m-5  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
            {" "}
            Solutions{" "}
          </h3>
        </div>

        {/* solutions */}
        {quizdetails.map((paper,index)=>(
        <Solutions key={index} userAns=
        {paper.userAns} quesNumber={paper.question} options={paper.options} no={index} />
       ))}
      </div>
      
    </div>
  );
}

export default Result;
