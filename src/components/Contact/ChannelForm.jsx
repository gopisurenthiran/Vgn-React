import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChannelEnquiry } from "../../services/ChannelService";
import headBorder from "/head-border.png"; // adjust path if needed

export default function ChannelForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      mobile: data.phone,
      company_name: data.company,
      address: data.address,
      org_type: data.orgType,
      member_of_association: data.association || "",
      type_of_bussiness: data.businessType,
      rera: data.rera || "",
    };

    try {
      const result = await ChannelEnquiry(payload); // should return { status, message }

      if (result?.status === "success") {
        toast.success(result.message || "Form submitted successfully!");
        reset();
      } else {
        toast.error(result?.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <section className="contact-form-section spad py-5 bg">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">
        <div className="custom-form-wrapper mx-auto p-4 p-md-5 bg-white shadow-sm">
          <div className="heading text-center mb-4">
            <h4 className="form-heading">
              <span className="head-border">
                <img src={headBorder} alt="head-border" />
              </span>
              Channel Partner
            </h4>
          </div>

          <Form className="cc-form p-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row className="gy-3">
              {/* Name */}
              <Col lg={6}>
                <Form.Group controlId="name">
                  <Form.Control
                    type="text"
                    placeholder="Name*"
                    {...register("name", { required: "Name is required" })}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Phone */}
              <Col lg={6}>
                <Form.Group controlId="phone">
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <>
                        <PhoneInput
                          country={"in"}
                          {...field}
                          onChange={(value) =>
                            field.onChange(value.replace(/^91/, ""))
                          }
                          disableCountryCode={true}
                          enableSearch
                          placeholder="Phone Number*"
                          inputProps={{
                            required: true,
                          }}
                          inputStyle={{
                            width: "100%",
                            height: "50px",
                            fontSize: "16px",
                            paddingLeft: "58px",
                            border: errors.phone
                              ? "1px solid #dc3545"
                              : "1px solid #ccc",
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
                        {errors.phone && (
                          <div className="text-danger mt-1">
                            {errors.phone.message}
                          </div>
                        )}
                      </>
                    )}
                  />
                </Form.Group>
              </Col>

              {/* Email */}
              <Col lg={6}>
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Email id*"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email",
                      },
                    })}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Company */}
              <Col lg={6}>
                <Form.Group controlId="company">
                  <Form.Control
                    type="text"
                    placeholder="Company Name*"
                    {...register("company", {
                      required: "Company name is required",
                    })}
                    isInvalid={!!errors.company}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.company?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Address */}
              <Col lg={6}>
                <Form.Group controlId="address">
                  <Form.Control
                    type="text"
                    placeholder="Registered Address*"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Org Type */}
              <Col lg={6}>
                <Form.Group controlId="orgType">
                  <Form.Control
                    type="text"
                    placeholder="Organization Type*"
                    {...register("orgType", {
                      required: "Organization Type is required",
                    })}
                    isInvalid={!!errors.orgType}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.orgType?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Association */}
              <Col lg={6}>
                <Form.Group controlId="association">
                  <Form.Control
                    type="text"
                    placeholder="Member of any Association"
                    {...register("association")}
                  />
                </Form.Group>
              </Col>

              {/* Business Type */}
              <Col lg={6}>
                <Form.Group controlId="businessType">
                  <Form.Select
                    {...register("businessType", {
                      required: "Please select business type",
                    })}
                    isInvalid={!!errors.businessType}
                  >
                    <option value="">Type of Business*</option>
                    <option>Land Sourcing</option>
                    <option>Commercial Sales</option>
                    <option>Residential Sales</option>
                    <option>Others</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.businessType?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* RERA */}
              <Col lg={12}>
                <Form.Group controlId="rera">
                  <Form.Control
                    type="text"
                    placeholder="RERA #"
                    {...register("rera")}
                  />
                </Form.Group>
              </Col>

              {/* Submit */}
              <Col lg={12} className="text-center mt-4">
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
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
}
