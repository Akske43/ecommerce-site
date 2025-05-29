import React from 'react';
import { useNavigate } from 'react-router-dom';

function Add() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const cards = [
    { title: "Category", path: "/category" },
    { title: "Item", path: "/item" },
    { title: "Sub-category", path: "/subcategory" },
    { title: "User-details", path: "/details" },
    { title: "Order-details", path: "/order" },
  ];

  return (
    <div className='flex flex-col w-full'>
      <main className="flex gap-8 pt-10 px-10 flex-wrap justify-start items-start min-h-[calc(100vh-80px)] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => handleNavigation(card.path)}
            className="bg-white h-[200px] w-[240px] rounded-3xl shadow-xl p-6 flex items-center justify-center 
                       transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br 
                       hover:from-white hover:via-pink-100 hover:to-purple-100 cursor-pointer"
          >
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 tracking-widest">
              {card.title}
            </h1>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Add;
