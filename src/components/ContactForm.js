import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Form, Button, Row, Col } from "react-bootstrap";
import ContactIcon from "../images/contactIcon";
import emailjs from "emailjs-com";

//https://www.youtube.com/watch?v=NgWGllOjkbs&t=53s

function ContactForm() {
  const { t } = useTranslation();

  const [valueCheckbox, setValueCheckbox] = useState(false);
  const [msgEmail, setMsgEmail] = useState(false);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    trigger,
  } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wpt4bao",
        "template_8mm09ni",
        e.target,
        "user_7sDA5I2wiARbhwLBhSVhn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsgEmail(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    emailjs
      .sendForm(
        "service_wpt4bao",
        "template_lkedn45",
        e.target,
        "user_7sDA5I2wiARbhwLBhSVhn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    reset();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMsgEmail(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [msgEmail]);

  return (
    <main className="form-position">
      <h3>{t("ContactForm_title")}</h3>
      <Row xs={1} md={2}>
        <Col>
          <Form className="form-width" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name">
              <Form.Label>{t("ContactForm_name")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("ContactForm_placeholder_name")}
                {...register("name", {
                  required: t("ContactForm_required_error_msg_name"),
                  minLength: {
                    value: 2,
                    message: t("ContactForm_minLength_error_msg_name"),
                  },
                  pattern: {
                    value: /[A-Za-z -]/,
                    message: t("ContactForm_pattern_error_msg_name"),
                  },
                })}
                onKeyUp={() => {
                  trigger("name");
                }}
                name="name"
              ></Form.Control>
              {errors.name && (
                <div className="form-msg-style">{errors.name.message}</div>
              )}
            </Form.Group>

            <Form.Group controlId="surname">
              <Form.Label>{t("ContactForm_surname")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("ContactForm_placeholder_surname")}
                {...register("surname", {
                  required: t("ContactForm_required_error_msg_surname"),
                  minLength: {
                    value: 2,
                    message: t("ContactForm_minLength_error_msg_surname"),
                  },
                  pattern: {
                    value: /[A-Za-z -]/,
                    message: t("ContactForm_pattern_error_msg_surname"),
                  },
                })}
                onKeyUp={() => {
                  trigger("surname");
                }}
                name="surname"
              ></Form.Control>
              {errors.surname && (
                <div className="form-msg-style">{errors.surname.message}</div>
              )}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>{t("ContactForm_email")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("ContactForm_placeholder_email")}
                {...register("email", {
                  required: t("ContactForm_required_error_msg_email"),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t("ContactForm_pattern_error_msg_email"),
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
                name="email"
              ></Form.Control>
              {errors.email && (
                <div className="form-msg-style">{errors.email.message}</div>
              )}
            </Form.Group>

            <Form.Group controlId="subject">
              <Form.Label>{t("ContactForm_subject")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("ContactForm_placeholder_subject")}
                {...register("subject", {
                  required: t("ContactForm_required_error_msg_subject"),
                  minLength: {
                    value: 2,
                    message: t("ContactForm_minLength_error_msg_subject"),
                  },
                  maxLength: {
                    value: 50,
                    message: t("ContactForm_maxLength_error_msg_subject"),
                  },
                })}
                onKeyUp={() => {
                  trigger("subject");
                }}
                name="subject"
              ></Form.Control>
              {errors.subject && (
                <div className="form-msg-style">{errors.subject.message}</div>
              )}
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>{t("ContactForm_message")}</Form.Label>
              <Form.Control
                as="textarea"
                placeholder={t("ContactForm_placeholder_message")}
                {...register("message", {
                  required: t("ContactForm_required_error_msg_message"),
                })}
                onKeyUp={() => {
                  trigger("message");
                }}
                name="message"
              ></Form.Control>
              {errors.message && (
                <div className="form-msg-style">{errors.message.message}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label={t("ContactForm_privacy policy")}
                required
                value={valueCheckbox}
                onChange={(e) => setValueCheckbox(!valueCheckbox)}
              />
              <div className="form-msg-style">
                {valueCheckbox
                  ? null
                  : t("ContactForm_required_msg_privacy_policy")}
              </div>
            </Form.Group>

            <div
              className={
                msgEmail ? "alert alert-success" : "hide-alert-success"
              }
            >
              {msgEmail ? t("ContactForm_success_msg") : null}
            </div>

            <Button
              type="submit"
              variant="primary"
              className="bnt-block bg-brown rounded my-3"
            >
              {t("ContactForm_submit_button")}
            </Button>
          </Form>
        </Col>
        <Col className="text-align">
          <ContactIcon />
        </Col>
      </Row>
    </main>
  );
}

export default ContactForm;
