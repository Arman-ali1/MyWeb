import "./App.css";
import Question from "./components/Question/Question";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [quizdetails, setQuizdetails] = useState([]);

  const url = "https://myweb-2t4i.onrender.com/api/v1/quiz/getalluser";
  const userdata = {
    name: "shivam",
    contact: "1233",
    email: "shivam1234@gmail.com",
    questions: 1,
    timeTaken: 4,
  };
  
  // useEffect(()=>{
    axios.get(url)
    .then((res)=>(setQuizdetails(res.data[0].questions)))
  // },[])
  
quizdetails.map((paper)=>{
        console.log(paper.question)
        console.log(paper.options[0].option1)
        console.log(paper.options[0].option2)
        console.log(paper.options[0].option3)
        console.log(paper.options[0].option4)
       
        
})
  return (
    <>
// <<<<<<< shivam
      <div className="pt-32 grid sm:grid-cols-1   bg-black">
       {quizdetails.map((paper,index)=>(
        <Question key={paper} quesNumber={paper.question} options={paper.options} no={index} />
       ))}
// =======
      <div className='flex items-center justify-around flex-col gap-10 pb-10 bg-black text-white h-100vmx w-screen overflow-x-hidden border-b border-gray-500'>
        <h1>Contest</h1>
        <div className='pl-10 pr-10 pt-5 block h-[27rem] w-[63rem] rounded-lg  bg-black shadow-xl shadow-neutral-700 border border-gray-400 '>
            <div className='h-[3rem] w-[3rem] bg-white rounded-full mb-5 p-2' >
              <img src={Image} className='h-[2rem] w-[2rem] bg-white rounded-full '></img>
            </div>
            <p className='text-2xl pb-2'>Community</p>
            <p className='p-0.5 '>Working, not just alongside us, but with</p>
            <p className='p-0.5 '>the other founders of the community</p>
            <p className='p-0.5 '>will become the foundation of your</p>
            <p className='p-0.5 '>support system.</p>
        </div>
        <div className='pl-10 pr-10 pt-5 block h-[27rem] w-[63rem] rounded-lg  bg-black shadow-xl shadow-neutral-700 border border-gray-400 '>
            <div className='h-[3rem] w-[3rem] bg-white rounded-full mb-5 p-2' >
              <img src={Image} className='h-[2rem] w-[2rem] bg-white rounded-full '></img>
            </div>
            <p className='text-2xl pb-2'>Community</p>
            <p className='p-0.5 '>Working, not just alongside us, but with</p>
            <p className='p-0.5 '>the other founders of the community</p>
            <p className='p-0.5 '>will become the foundation of your</p>
            <p className='p-0.5 '>support system.</p>
        </div>
        <div className='pl-10 pr-10 pt-5 block h-[27rem] w-[63rem] rounded-lg  bg-black shadow-xl shadow-neutral-700 border border-gray-400 '>
            <div className='h-[3rem] w-[3rem] bg-white rounded-full mb-5 p-2' >
              <img src={Image} className='h-[2rem] w-[2rem] bg-white rounded-full '></img>
            </div>
            <p className='text-2xl pb-2'>Community</p>
            <p className='p-0.5 '>Working, not just alongside us, but with</p>
            <p className='p-0.5 '>the other founders of the community</p>
            <p className='p-0.5 '>will become the foundation of your</p>
            <p className='p-0.5 '>support system.</p>
        </div>
        <div className='pl-10 pr-10 pt-5 block h-[27rem] w-[63rem] rounded-lg  bg-black shadow-xl shadow-neutral-700 border border-gray-400 '>
            <div className='h-[3rem] w-[3rem] bg-white rounded-full mb-5 p-2' >
              <img src={Image} className='h-[2rem] w-[2rem] bg-white rounded-full '></img>
            </div>
            <p className='text-2xl pb-2'>Community</p>
            <p className='p-0.5 '>Working, not just alongside us, but with</p>
            <p className='p-0.5 '>the other founders of the community</p>
            <p className='p-0.5 '>will become the foundation of your</p>
            <p className='p-0.5 '>support system.</p>
        </div>
        <div className='pl-10 pr-10 pt-5 block h-[27rem] w-[63rem] rounded-lg  bg-black shadow-xl shadow-neutral-700 border border-gray-400 '>
            <div className='h-[3rem] w-[3rem] bg-white rounded-full mb-5 p-2' >
              <img src={Image} className='h-[2rem] w-[2rem] bg-white rounded-full '></img>
            </div>
            <p className='text-2xl pb-2'>Community</p>
            <p className='p-0.5 '>Working, not just alongside us, but with</p>
            <p className='p-0.5 '>the other founders of the community</p>
            <p className='p-0.5 '>will become the foundation of your</p>
            <p className='p-0.5 '>support system.</p>
        </div>
        <div className=''>
          <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-xl shadow-red-700 border border-gray-100 ' onClick={() => setCount(count + 1)}>
            submit contest
          </button>
          <p>{count}</p>
        </div>
// >>>>>>> master
      </div>
    </>
  );
}

export default App;
