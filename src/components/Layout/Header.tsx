import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-headerViolet py-2 px-4 w-full flex justify-between items-center">
      <p>حارثة العوفي</p>
      <Link to={'/'} className="w-[100px]">
        <img src="/Hujurat/logo.png" alt="logo" className="w-full h-auto rounded-full" />
      </Link>
    </header>
  );
};
