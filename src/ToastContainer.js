const ToastContainer = () => {
  return (
    <div>
        
    <div className="m-2 p-2 flex justify-center items-center h-screen">
      <button className="m-2 p-1 border-2 border-gray-500 rounded-md">
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
    </div></div>
  );
};

export default ToastContainer;