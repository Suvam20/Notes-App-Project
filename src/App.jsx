import React, { useState } from "react";
import { X } from 'lucide-react';
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(details);
    // console.log("Notes Submited...");

    const copyTask= [...task]
    copyTask.push({title,details})
    // console.log(copyTask);
    setTask(copyTask)
    // console.log(task);
    

    setTitle("");
    setDetails("");
  };


  const removeTask=(e)=>{
      const dtask=[...task];
      dtask.splice(e,1)
      setTask(dtask)
  }

  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col items-start gap-4 p-10  lg:w-1/2"
      >
        <h1 className="text-4xl underline font-medium italic">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Title"
          className="border-2 px-5 py-2 w-full font-medium"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          name=""
          id=""
          placeholder="Enter Details"
          className="border-2 px-5 py-2 h-32 w-full font-medium"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className="active:scale-95 border-2 px-5 w-full py-2 rounded-full">
          Submit
        </button>
      </form>
      <div className="p-10 flex-wrap lg:w-1/2 lg:border-l-2 bg-gray-800">
        <div className="text-center">
          <h1 className="text-3xl underline font-bold">Notes</h1>
        </div>
        <div className="flex gap-4 mt-5 flex-wrap items-start h-[90%] overflow-auto">
          
            {task.map((val,idx)=>{              
              return (
                  <div key={idx} className="text-black h-75 w-65 rounded-2xl bg-gray-200 px-5 py-8 flex flex-col justify-between bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] bg-cover bg-center relative ">
                    <div>
                      <h3 className=" font-bold leading-tight text-xl">{val.title}</h3>
                    <p className="mt-2 leading-tight text-gray-500 font-medium">{val.details}</p>
                    </div>
                    <button className="bg-red-500 rounded-2xl py-2 text-white active:bg-red-600"
                      onClick={
                        ()=>{
                          removeTask(idx);
                        }
                      }
                    >Delete Note</button>
                  </div>
              )
            })}
          
        </div>
      </div>
    </div>
  );
};

export default App;
