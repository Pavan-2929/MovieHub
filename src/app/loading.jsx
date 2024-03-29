import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 rounded-full animate-spin spin-faster border-4 border-blue-500 border-t-transparent shadow-md"></div>
    </div>
  );
};

export default loading;
