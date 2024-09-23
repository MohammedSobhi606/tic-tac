import React from "react";

function Button({ color, content }) {
  return (
    <button
      className="px-4 py-2 rounded-md font-extrabold text-light_bg uppercase font-montserrat
   hover:shadow-lg active:shadow-sm active:-translate-y-0  hover:-translate-y-1 hover:shadow-dark_gray
     shadow-md shadow-dark_gray  ease-in-out duration-100"
      style={{ background: color }}
    >
      {content}
    </button>
  );
}

export default Button;
