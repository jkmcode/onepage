import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Introduction() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="intro-position">
      <Row xs={1} md={1} lg={2}>
        <Col>
          <div data-aos="zoom-in" className="intro-section mb-3">
            {t("Introduction_1")}
          </div>
        </Col>
        <Col>
          <div data-aos="zoom-in" className="intro-section mb-3">
            {t("Introduction_2")}
          </div>
        </Col>
      </Row>
      <Row xs={1} md={1} lg={2}>
        <Col>
          <div data-aos="zoom-in" className="intro-section">
            {t("Introduction_3")}
          </div>
        </Col>
        <Col>
          <div data-aos="zoom-in" className="intro-section">
            {t("Introduction_4")}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Introduction;
