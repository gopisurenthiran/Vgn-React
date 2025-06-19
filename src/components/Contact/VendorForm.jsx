import headBorder from "/head-border.png";
import { Form, Row, Col } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function VendorEnquiryForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Reset form after submission
  };

  return (
    <div className="cf-content p-4" style={{ boxShadow: "none", borderRadius: 0 }}>
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
              <Form.Control
                type="text"
                placeholder="Company Name*"
                {...register("companyname2", { required: "Company name is required" })}
              />
              {errors.companyname2 && (
                <small className="text-danger">{errors.companyname2.message}</small>
              )}
            </Col>
            <Col lg={6}>
              <Form.Control
                type="text"
                placeholder="Registered Address*"
                {...register("regaddress2", { required: "Address is required" })}
              />
              {errors.regaddress2 && (
                <small className="text-danger">{errors.regaddress2.message}</small>
              )}
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
              <Form.Control
                type="text"
                placeholder="Name*"
                {...register("name2", {
                  required: "Name is required",
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "Only alphabets allowed",
                  },
                })}
              />
              {errors.name2 && (
                <small className="text-danger">{errors.name2.message}</small>
              )}
            </Col>
            <Col lg={4}>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={"in"}
                    value={field.value}
                    onChange={(value) => field.onChange(value.replace(/^91/, ""))}
                    disableCountryCode
                    onlyCountries={["in"]}
                    enableSearch
                    placeholder="Phone Number*"
                    inputProps={{ name: "phone" }}
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
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </Col>
            <Col lg={4}>
              <Form.Control
                type="email"
                placeholder="Email id*"
                {...register("email2", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email2 && (
                <small className="text-danger">{errors.email2.message}</small>
              )}
            </Col>
            <Col lg={12}>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Messages*"
                {...register("message2", { required: "Message is required" })}
              />
              {errors.message2 && (
                <small className="text-danger">{errors.message2.message}</small>
              )}
            </Col>
          </Row>
        </div>

        <div className="text-center">
          <button type="submit" className="site-btn custom-submit-btn">
            SUBMIT
          </button>
        </div>
      </Form>
    </div>
  );
}
