"use client"
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimationInHero = () => {
  return (
    <>
       <TypeAnimation
              sequence={[
                "Wennie",
                1000,
                "Web Developer",
                1000,
                "FrontEnd Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
    </>
  );
};

export default TypeAnimationInHero;
