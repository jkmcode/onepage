import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import ImgPython from "../images/python.png";
import ImgDjango from "../images/django.png";
import ImgApi from "../images/api.png";
import ImgJs from "../images/js.png";
import ImgReact from "../images/react.png";
import ImgRedux from "../images/redux.png";
import ImgSql from "../images/sql.png";

function Technology() {
  const { t } = useTranslation();

  return (
    <div className="position" id="technology">
      <h1 className="title-technology mb-4">{t("Technology_title")}</h1>
      <Row className="text-center mb-4">
        <Col className="mb-4">
          <img src={ImgPython} className="img-python" />
        </Col>
        <Col>
          <img src={ImgDjango} className="img-django" />
        </Col>
        <Col>
          <img src={ImgApi} className="img-api" />
        </Col>
        <Col>
          <img src={ImgJs} className="img-js" />
        </Col>
        <Col>
          <img src={ImgReact} className="img-react" />
        </Col>
        <Col>
          <img src={ImgRedux} className="img-redux" />
        </Col>
        <Col>
          <img src={ImgSql} className="img-sql" />
        </Col>
      </Row>
    </div>
  );
}

export default Technology;
