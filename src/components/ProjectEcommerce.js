import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

function ProjectEcommerce() {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="ecommerce-project-position">
        <h2>{t("ProjectEcommerce_title")}</h2>
        <p>{t("ProjectEcommerce_project_description")}</p>
        <Button
          type="submit"
          variant="primary"
          className="rounded my-3 text-center"
        >
          {t("ProjectEcommerce_button")}
        </Button>
      </div>
    </Container>
  );
}

export default ProjectEcommerce;
