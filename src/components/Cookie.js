import React from "react";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";

function Cookie() {
  const { t } = useTranslation();

  return (
    <CookieConsent
      debug={true}
      location="bottom"
      buttonText={t("Cookie_button")}
      buttonStyle={{ backgroundColor: "#8585ad", color: "white" }}
    >
      {t("Cookie_text")}
    </CookieConsent>
  );
}

export default Cookie;
