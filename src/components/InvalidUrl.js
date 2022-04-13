import React from "react";
import { useTranslation } from "react-i18next";
import imgError from "../images/error.png";

function InvalidUrl() {
  const { t } = useTranslation();

  return (
    <>
      <div className="error-message-position">
        {t("Invalid_url")}
        <img className="img-error-style" src={imgError} />
      </div>
    </>
  );
}

export default InvalidUrl;
