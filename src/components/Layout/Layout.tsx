import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className="font-sans text-primary min-h-screen pb-5 w-full items-center flex flex-col bg-gradient-radial from-softViolet via-darkPurple to-darkGray">
      <Header />

      {/* Content */}
      <main className="flex-grow w-full max-w-[850px] px-5 py-3">
        <Outlet />
      </main>
    </div>
  );
};
