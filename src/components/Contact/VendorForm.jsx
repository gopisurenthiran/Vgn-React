import headBorder from "/head-border.png";
import { Form, Row, Col } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VendorEnquiry } from "../../services/vendorService";

export default function VendorEnquiryForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Map form fields to API payload format
    const payload = {
      name: data.name,
      email: data.email,
      mobile: data.mobile, // assuming form field name is "phone"
      company_name: data.company,
      company_address: data.companyAddress,
      message: data.message,
    };

    try {
      const result = await VendorEnquiry(payload);

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
    <div
      className="cf-content p-4"
      style={{ boxShadow: "none", borderRadius: 0 }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="heading mb-4">
        <h4>
          <span className="head-border">
            <img src={headBorder} alt="head-border" />
          </span>
          Vendor Enquiry
        </h4>
      </div>

     <Form id="frmvendor" onSubmit={handleSubmit(onSubmit)}>
  {/* Company Details */}
  <div className="group-input mb-4">
    <div className="cc-title mb-2">
      <h4>Company Details</h4>
    </div>
    <Row className="g-3">
      <Col lg={6}>
        <Form.Group controlId="company">
          <Form.Control
            type="text"
            placeholder="Company Name*"
            {...register("company", {
              required: "Company name is required",
            })}
          />
          {errors.company_name && (
            <small className="text-danger">
              {errors.company.message}
            </small>
          )}
        </Form.Group>
      </Col>
      <Col lg={6}>
        <Form.Group controlId="companyAddress">
          <Form.Control
            type="text"
            placeholder="Registered Address*"
            {...register("companyAddress", {
              required: "Address is required",
            })}
          />
          {errors.company_address && (
            <small className="text-danger">
              {errors.companyAddress.message}
            </small>
          )}
        </Form.Group>
      </Col>
    </Row>
  </div>

  {/* Contact Person */}
  <div className="group-input mb-4">
    <div className="cc-title mb-2">
      <h4>Contact Person</h4>
    </div>
    <Row className="g-3">
      <Col lg={4}>
        <Form.Group controlId="name">
          <Form.Control
            type="text"
            placeholder="Name*"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Only alphabets allowed",
              },
            })}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </Form.Group>
      </Col>
      <Col lg={4}>
        <Form.Group controlId="mobile">
          <Controller
            name="mobile"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={"in"}
                value={field.value}
                onChange={(value) => field.onChange(value.replace(/^91/, ""))}
                disableCountryCode
                enableSearch
                placeholder="Phone Number*"
                inputProps={{ name: "mobile" }}
                inputStyle={{
                  width: "100%",
                  height: "50px",
                  fontSize: "16px",
                  paddingLeft: "58px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  color: "#555",
                }}
                buttonStyle={{
                  border: "none",
                  background: "transparent",
                }}
                containerStyle={{
                  width: "100%",
                }}
              />
            )}
          />
          {errors.mobile && (
            <small className="text-danger">{errors.mobile.message}</small>
          )}
        </Form.Group>
      </Col>
      <Col lg={4}>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Email id*"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </Form.Group>
      </Col>
      <Col lg={12}>
        <Form.Group controlId="message">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Messages*"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <small className="text-danger">{errors.message.message}</small>
          )}
        </Form.Group>
      </Col>
    </Row>
  </div>

  <div className="text-center">
    <button type="submit" className="site-btn5 custom-submit-btn">
      SUBMIT
    </button>
  </div>
</Form>

    </div>
  );
}
