import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Offer() {
  const { t } = useTranslation();

  return (
    <div className="mb-3 offers" id="offers">
      <h1 className="title-offer mb-4">{t("Offer_title")}</h1>
      <Row className="text-center m-3" xs={1} md={1} lg={3}>
        <Col className="mb-3 offer">{t("Offer_1")}</Col>
        <Col className="mb-3 offer">{t("Offer_2")}</Col>
        <Col className="mb-3 offer">{t("Offer_3")}</Col>
      </Row>
      <Row className="text-center m-3" xs={1} md={1} lg={3}>
        <Col className="mt-3 offer">{t("Offer_4")}</Col>
        <Col className="mt-3 offer">{t("Offer_5")}</Col>
        <Col className="mt-3 offer">np{t("Offer_6")}</Col>
      </Row>
    </div>
  );
}

export default Offer;
