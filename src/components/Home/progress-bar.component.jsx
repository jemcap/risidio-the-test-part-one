import React from "react";

const ProgressBar = () => {
  const totalPages = 6;

  return (
    <div className="w-full mx-auto mt-[56px] flex justify-center items-center">
      <div className="w-full flex-row flex justify-center gap-4 items-center">
        {[...Array(totalPages)].map((_, i) => {
          return (
            <div
              key={i}
              className={`mx-2 mb-[15px] rounded-full w-[192px] h-[14px] ${
                i === 0 ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
