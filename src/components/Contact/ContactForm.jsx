import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "/head-border.png"; // adjust path if needed

export default function ContactSupportForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <div className="cf-content p-4" style={{ boxShadow: 0, borderRadius: 0 }}>
      <div className="heading mb-4">
        <h4>
          <span className="head-border">
            <img src={headBorder} alt="head-border" />
          </span>{" "}
          Contact Support
        </h4>
      </div>

      <Form
        className="cc-form"
        id="frmcontact"
        name="frmcontact"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row className="gy-3">
          <Col lg={4}>
            <Form.Group controlId="name4">
              <Form.Control
                type="text"
                placeholder="Name*"
                {...register("name", { required: "Name is required" })}
                isInvalid={errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group controlId="phone4">
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    country={"in"}
                    value={field.value}
                    onChange={(value) => field.onChange(value.replace(/^91/, ""))}
                    disableCountryCode={true}
                    onlyCountries={["in"]}
                    enableSearch
                    placeholder="Phone Number*"
                    inputProps={{ required: true }}
                    inputStyle={{
                      width: "100%",
                      height: "50px",
                      fontSize: "16px",
                      paddingLeft: "58px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      color: "#555"
                    }}
                    buttonStyle={{ border: "none", background: "transparent" }}
                    containerStyle={{ width: "100%" }}
                  />
                )}
              />
              {errors.phone && (
                <div className="text-danger mt-1">{errors.phone.message}</div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group controlId="email4">
              <Form.Control
                type="email"
                placeholder="Email id*"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col lg={12}>
            <Form.Group controlId="message4">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Messages*"
                {...register("message", { required: "Message is required" })}
                isInvalid={errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col lg={12} className="text-center mt-3">
            <Button
              type="submit"
              className="site-btn"
              id="btnsubmit4"
              name="btnsubmit4"
              style={{
                border: "2px solid #b40000",
                color: "#b40000",
                borderRadius: "50px",
                padding: "10px 40px",
                fontWeight: "600",
                background: "transparent",
                letterSpacing: "1px"
              }}
            >
              Submit
            </Button>

            <div
              id="loader-icon4"
              style={{ display: "none", marginTop: "10px" }}
            >
              <img src="/img/sending.gif" alt="Loading..." />
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
