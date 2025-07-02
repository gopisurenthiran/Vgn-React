import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "/head-border.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactEnquiry } from "../../services/ContactService";

export default function ContactSupportForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Map form fields to API payload format
    const payload = {
      name: data.name,
      email: data.email,
      mobile: data.mobile, // or data.phone depending on your field name
      message: data.message,
    };

    try {
      const result = await ContactEnquiry(payload);

      toast.success("Form submitted successfully!", {
        position: "bottom-right",
        autoClose: 3000,
      });

      reset(); // Clear form after success
    } catch (error) {
      console.error("Submission error:", error);

      toast.error("Submission failed. Please try again.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="cf-content p-4" style={{ boxShadow: 0, borderRadius: 0 }}>
      <ToastContainer position="top-right" autoClose={3000} />
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
          {/* Name */}
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

          {/* Mobile */}
          <Col lg={4}>
            <Form.Group controlId="mobile4">
              <Controller
                name="mobile"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    country={"in"}
                    value={field.value}
                    onChange={(value) =>
                      field.onChange(value.replace(/^91/, ""))
                    }
                    disableCountryCode={true}
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
                      color: "#555",
                    }}
                    buttonStyle={{ border: "none", background: "transparent" }}
                    containerStyle={{ width: "100%" }}
                  />
                )}
              />
              {errors.mobile && (
                <div className="text-danger mt-1">{errors.mobile.message}</div>
              )}
            </Form.Group>
          </Col>

          {/* Email */}
          <Col lg={4}>
            <Form.Group controlId="email4">
              <Form.Control
                type="email"
                placeholder="Email id*"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Message */}
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

          {/* Submit */}
          <Col lg={12} className="text-center mt-3">
            <button
              type="submit"
              className="site-btn5"
              id="btnsubmit"
              name="btnsubmit"
              style={{
                border: "2px solid #b40000",
                padding: "10px 40px",
                fontWeight: "600",
              }}
            >
              SUBMIT
            </button>

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
