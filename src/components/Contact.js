import React from "react";
import { Row, Col } from "react-bootstrap";
import ImgEmail from "../images/email.png";
import ImgCompany from "../images/company.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useGlobalContext } from "../context";

function Contact() {
  const { isContact, closeContact } = useGlobalContext();

  const { t } = useTranslation();

  useEffect(() => {
    if (isContact) {
      scroller.scrollTo("contact", {
        smooth: true,
        offset: -90,
        duration: 200,
      });
      closeContact();
    }
  }, []);

  return (
    <div>
      <h1 className="center-title" id="contact">
        {t("Contact_title")}
      </h1>
      <Row xs={1} md={1} lg={2} xl={2}>
        <Col className="center-section">
          <img src={ImgEmail} />
          <h4>Email</h4>
          <h4>biuro@jkmcode.eu</h4>
        </Col>
        <Col className="center-section mb-4">
          <img src={ImgCompany} />
          <h4>jkmcode sp.z o.o</h4>
          <h5>Pogorzyce, ul. Górnickiego 16</h5>
          <h5>32-501 Chrzanów</h5>
          <h5>NIP: 628-226-77-85</h5>
          <h5>KRS: 0000645507</h5>
          <h5>REGON: 635794247</h5>
        </Col>
      </Row>
      <h4 className="mt-4">{t("Contact_text")}</h4>
    </div>
  );
}

export default Contact;
