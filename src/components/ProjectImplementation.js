import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ImgArrowBottom from "../images/arrowBottom.png";
import { useTranslation } from "react-i18next";

function ProjectImplementation() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const { t } = useTranslation();

  return (
    <div className="implementation-project-photo">
      <h1>{t("ProjectImplementation_title")}</h1>
      <div className="initial-project-analysis">
        <h2>{t("ProjectImplementation_initial_project_analysis")}</h2>
        <img data-aos="fade-up" src={ImgArrowBottom} />
      </div>
      <div className="schedule-and-budgeting">
        <h2>{t("ProjectImplementation_schedule_and_budgeting")}</h2>
        <img data-aos="fade-up" src={ImgArrowBottom} />
      </div>
      <div className="programming">
        <h2>{t("ProjectImplementation_programming")}</h2>
        <img data-aos="fade-up" src={ImgArrowBottom} />
      </div>
      <div className="implementation">
        <h2>{t("ProjectImplementation_implementation")}</h2>
        <img data-aos="fade-up" src={ImgArrowBottom} />
      </div>
      <div className="maintaining-the-application">
        <h2>{t("ProjectImplementation_maintaining_the_application")}</h2>
      </div>
    </div>
  );
}

export default ProjectImplementation;
