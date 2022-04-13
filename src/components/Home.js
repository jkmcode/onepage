import React from "react";
import Image from "../images/laptop.jpg";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useGlobalContext } from "../context";

function Home() {
  const { isHome, closeHome } = useGlobalContext();

  useEffect(() => {
    if (isHome) {
      scroller.scrollTo("home", { smooth: true, offset: -90, duration: 200 });
      closeHome();
    }
  }, []);

  return <img src={Image} className="start-photo-laptop" id="home" />;
}

export default Home;
