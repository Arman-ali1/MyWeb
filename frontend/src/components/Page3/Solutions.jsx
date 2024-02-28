import React from 'react'

function Solutions({ userAns,quesNumber, no, options }) {
  return (
    <>
     <div className=" sm:min-w-[80%]  max-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
        <div className="min-h-[50px] text-start  ">
          <h3>
            <span>{no + 1}. </span> {quesNumber}{" "}
          </h3>
        </div>

        {/* options conatiner */}
        <div>

          <div className="grid grid-cols-12 mb-5 ">
            <p htmlFor="option1" className="col-span-11">
             Your answer :  {userAns}  
            </p>
          </div>
          <div className="grid grid-cols-12 mb-5 ">
            <p htmlFor="option1" className="col-span-11">
             correct answer :  {options}  
            </p>
          </div>

       

        </div>
      </div> 
    </>
  )
}

export default Solutions
