import { useState } from "react";
import "./index.css";

const ToastContainer = () => {
  const [show, setShow] = useState(false);

  const handleClose=()=>{
    setShow(false);
  }

  return (
    <div>
      <div className="fixed right-5 top-5">
        {show && (
          <div className="px-4 py-2 bg-green-700 text-white rounded-md w-60 flex justify-between animate-slide">
            Success message <span className="cursor-pointer text-lg" onClick={handleClose}>x</span>
          </div>
        )}
      </div>
      <div className="m-2 p-2 flex justify-center items-center h-screen">
        <button className="m-2 p-1 border-2 border-gray-500 rounded-md" onClick={()=>setShow(true)}>
          Success toast
        </button>
        <button className="m-2 p-1 border-2 border-gray-500 rounded-md">
          Error toast
        </button>
        <button className="m-2 p-1 border-2 border-gray-500 rounded-md">
          Info toast
        </button>
        <button className="m-2 p-1 border-2 border-gray-500 rounded-md">
          Warning toast
        </button>
      </div>
    </div>
  );
};

export default ToastContainer;
