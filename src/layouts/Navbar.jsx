import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({handleSetPage ,pageName}) => {

     


  return (
    <div>
      <nav className="flex p-2 bg-white w-[99%] mx-auto rounded-sm justify-center items-center gap-3">
        <button 
          className={
            `text-sm font-semibold ${pageName ==="account" ? "text-blue-700" : "text-black"}`
          
          }
          onClick={()=>{handleSetPage('account')}}
        >
          Bank hesab növü
        </button>

        <button
          
          className={
            `text-sm font-semibold ${pageName==='branch' ? "text-blue-700" : "text-black"}`
          }
          onClick={()=>{handleSetPage("branch")}}
        >
          Bank və filiallar
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
