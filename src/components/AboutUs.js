import React, { useEffect } from "react";
import ImgAboutUs from "../images/AboutUs.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { scroller } from "react-scroll";
import { useGlobalContext } from "../context";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { isAobutUs, closeAboutUs } = useGlobalContext();

  const { t } = useTranslation();

  useEffect(() => {
    if (isAobutUs) {
      scroller.scrollTo("aboutUs", {
        smooth: true,
        offset: -90,
        duration: 200,
      });
      closeAboutUs();
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div>
      <div className="img-about-us">
        <img src={ImgAboutUs} id="aboutUs" />
      </div>
      <div className="title-about-us">
        <h1>{t("About_us_title")}</h1>
      </div>
      <div className="sections-about-us">
        <p data-aos="flip-left">{t("About_us_1")}</p>
        <p data-aos="flip-left">{t("About_us_2")}</p>
        <p data-aos="flip-left">{t("About_us_3")}</p>
      </div>
    </div>
  );
}

export default AboutUs;
