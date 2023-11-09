// src/Main.jsx

import React from "react";
import Header from "@/components/Header";
import VerseSlider from "@/components/VerseSlider";
import LanguageSelect from "@/components/LanguageSelect";

import About from "@/components/About";
const Main = () => {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-7">
        <Header />
        <LanguageSelect />
        <VerseSlider />
        <About />
      </div>
    </div>
  );
};

export default Main;
