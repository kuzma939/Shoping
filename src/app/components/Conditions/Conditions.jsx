"use client"; 
import React from "react";
import { useLanguage } from "../../Functions/useLanguage";

const Conditions = () => {
  const { translateList } = useLanguage(); // Access the language context
  const menuItems = translateList("Conditions", "hero");

  return (
    <main className="p-8 md:p-16 bg-[#f5e7da]  dark:bg-neutral-900 dark:text-white rounded-lg shadow-2xl">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 uppercase tracking-wider">
        {menuItems[0]}
      </h1>

      <article className="mb-8 bg-[#fcf8f3] dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 uppercase">
          {menuItems[1]}
        </h2>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>{menuItems[2]}</li>
          <li>{menuItems[3]}</li>
          <li>{menuItems[3]}</li>
          <li>{menuItems[4]}</li>
        </ul>
      </article>

      <article className="mb-8 bg-[#fcf8f3] dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 uppercase">
          {menuItems[5]}
        </h2>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>{menuItems[6]}</li>
          <li>{menuItems[7]}</li>
        </ul>
      </article>

      <article className="mb-8 bg-[#fcf8f3] dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 uppercase">
          {menuItems[8]}
        </h2>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>{menuItems[9]}</li>
          <li>{menuItems[10]}</li>
        </ul>
        <p className="mt-4 leading-relaxed text-sm md:text-base">
          {menuItems[11]}
        </p>
      </article>

      <article className="mb-8 bg-[#fcf8f3] dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 uppercase">
          {menuItems[12]}
        </h2>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>
            <span className="font-semibold">{menuItems[13]}</span> {menuItems[14]}
          </li>
          <li>
            <span className="font-semibold">{menuItems[15]}</span> {menuItems[16]}
          </li>
          <li>
            <span className="font-semibold">{menuItems[17]}</span> {menuItems[18]}
          </li>
          <li>
            <span className="font-semibold">{menuItems[19]}</span> {menuItems[20]}
          </li>
        </ul>
      </article>

      <article className="bg-[#fcf8f3] dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 uppercase">
          Д{menuItems[21]}
        </h2>
        <p className="mb-4 leading-relaxed text-sm md:text-base">
          {menuItems[22]}
        </p>
        <p className="leading-relaxed text-sm md:text-base">
          {menuItems[23]}{" "}
          <span className="font-bold text-blue-500">+38-067-579-5497</span>
        </p>
      </article>
    </main>
  );
};

export default Conditions;
