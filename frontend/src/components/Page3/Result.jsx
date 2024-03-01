
// import Question from "./../Question/Question.jsx";
import {  useEffect, useState } from "react";
import axios from "axios";
import Solutions from "./Solutions.jsx";
import { useLocation } from "react-router-dom";

function Result() {


  const location = useLocation();
    const userData = location.state?.UserStatus || {};
    let login=userData.lgn;
console.log("loginnnnnnnnnnnnnn",login);
  const[score,setScore]=useState(0)
  const [quizdetails, setQuizdetails] = useState([]);
  const url = "https://myweb-2t4i.onrender.com/api/v1/quiz/getcurrentuser";
  const userdata = {
    name: "shivam",
    contact: "1233",
    email: "shivam1234@gmail.com",
    questions: 1,
    timeTaken: 4,
  };
  let myarr=[0,0,0,0,0]
  let em="arman@gmail.com"
// get all user Api call 
// let login="three"
useEffect(()=>{
  axios.post((url), {email:login?login:em})
  .then((res)=>{
    (setQuizdetails(res.data.questions))
    // console.log(res.data[0].questions[0].options[0].correctAns);
    console.log("res.data[0].questions",res.data);
    let scor=0;
    for(let i=0;i<5;i++){
      if(res.data.questions[i].userAns!=='not-marked'){
        console.log("correctAns",res.data.questions[i].correctAns);
        if(res.data.questions[i].userAns===res.data.questions[i].correctAns)
        scor=scor+1;
      }
      setScore(scor)
      // console.log(res.data[0].questions[i].userAns);
      console.log(scor);

    }

    console.log("scoreeeeeeeeeeeeeeeeeeeeeeeeeeee",score);
    return 
  })

},[])

  return (
    <div className=" bg-slate-400  min-w-[100%]  pt-16 pb-5">
      <div className="p-5 ">
        <h3 className=" mt-10 text-6xl p-3 text-center  font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-500">
          Congratulations for Submisson
        </h3>
      </div>
      <div className="p-3  ">
        <h3 className="outline  text-4xl p-3 text-center  font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-slate-800">
          Your Score : {score} / 5
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
        {paper.userAns} quesNumber={paper.question} options={paper.correctAns} no={index} />
       ))}
      </div>
      
    </div>
  );
}

export default Result;
