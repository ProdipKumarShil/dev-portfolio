import React from 'react';

const Button = ({text, link}) => {
  return (
    <a target='_blank' rel="noopener noreferrer" href={link} download="resume.pdf" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-base-200 rounded hover:bg-base-200 group">
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1887c7] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left  transition-colors duration-300 ease-in-out group-hover:text-white">{text}</span>
    </a>
  );
};

export default Button;