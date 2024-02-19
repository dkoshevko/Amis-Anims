"use client";

import { useState } from "react";


const countButtonStyles: string = "w-36 h-36 rounded-full border-8 border-black font-bold";


export default function Compteur() {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-10">
        <span className="border-4 border-black rounded-full w-52 py-3 text-center text-6xl">
          {count}
        </span>
        <div className="flex justify-center gap-10">
          <button
            className={`${countButtonStyles} bg-red-800`}
            onClick={resetCount}
          >
            Remise à zéro
          </button>
          <button
            className={`${countButtonStyles} bg-green-600 text-4xl`}
            onClick={incrementCount}
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
