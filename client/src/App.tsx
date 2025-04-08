import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className=" flex justify-center m-auto mt-14  w-[800px]">
      <div className=" grid grid-cols-3 justify-items-center gap-6 ">
        <Link to="/food">
          <div className="h-[200px] w-[200px] bg-blue-400">Food</div>
        </Link>

        <Link to="/cocktails">
          <div className="h-[200px] w-[200px] bg-blue-400">Cocktails</div>
        </Link>

        <Link to="/">
          <div className="h-[200px] w-[200px] bg-blue-400"></div>
        </Link>

        <Link to="/">
          <div className="h-[200px] w-[200px] bg-blue-400"></div>
        </Link>

        <Link to="/">
          <div className="h-[200px] w-[200px] bg-blue-400"></div>
        </Link>

        <Link to="/">
          <div className="h-[200px] w-[200px] bg-blue-400"></div>
        </Link>
      </div>
    </div>
  );
}

export default App;
