import React from "react";

const Card = ({ title, subtitle, year, image }) => {
  return (
    <div
      className="w-[200px] h-[300px] relative border border-white/40 rounded-2xl overflow-hidden group"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* contenu flou gauche */}
      <div className="absolute top-0 left-0 h-full w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono z-10">
        <span className="text-xl font-medium">{title}</span>
        <span className="text-xs text-gray-400">{subtitle}</span>
        <span className="text-xs text-gray-400 mt-auto">{year}</span>
      </div>

      {/* flèche*/}
      <div className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md cursor-pointer transform transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          className="w-4 h-4 text-white"
        >
          <path
            d="M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;