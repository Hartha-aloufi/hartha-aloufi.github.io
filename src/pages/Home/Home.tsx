import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex items-center justify-center gap-14 h-full pt-10">
      <Link to="/tafsir/1/ar-tafsir-ibn-kathir" className="flex flex-col gap-1 items-center">
        <img
          src="/Hujurat/book-open-thin.svg"
          alt="logo"
          className="w-[100px] h-auto rounded-full"
        />
        <span>تفسير</span>
      </Link>
      <Link to="/shar7/amdad/1" className="flex flex-col gap-1 items-center">
        <img src="/Hujurat/idea.svg" alt="logo" className="w-[100px] h-auto rounded-full" />
        <span>أمداد</span>
      </Link>
    </div>
  );
};
