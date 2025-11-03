import React from "react";

const Card = ({ title, subtitle, tech, link }) => {
  return (
    <div className="w-[200px] h-[300px] relative border border-solid border-white/40 rounded-2xl overflow-hidden group">
      {/* --- bg --- */}
      <div className="w-full h-full p-1 absolute bg-purple-400">
        <div className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#ff91d5]" />
      </div>

      {/* --- cercle orange --- */}
      <div className="w-full h-full flex items-center justify-center relative backdrop-blur-lg rounded-2xl">
        <div
          className="w-32 h-32 rounded-full bg-gradient-to-tr from-pink-500 to-blue-300 animate-spin"
          style={{ animationDuration: "12s" }}
        />
      </div>

      {/* --- contenu carte --- */}
      <div className="w-full h-full p-2 flex justify-between absolute inset-0">
        <div className="w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono z-10">
          <span className="text-xl text-black font-medium">{title}</span>
          <span className="text-xs text-black">{subtitle}</span>
          <span className="text-xs text-black mt-auto">{tech}</span>
        </div>

        <div className="h-full pt-2 flex flex-col items-end text-white/50">
          {/* --- flèche cliquable --- */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/20 cursor-pointer transition-all duration-300 hover:bg-gray-50/30"
          >
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
