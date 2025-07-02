import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import headBorder from "/head-border.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomerEnquiry } from "../../services/customer";

export default function PartnerWithUs() {
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
      mobile: data.phone, // Assuming the form uses "phone"
      project: data.project,
      message: data.message,
    };

    try {
      const result = await CustomerEnquiry(payload);

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
    <section
      className="contact-form-section spad bg"
      style={{ padding: "60px 0" }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading text-center mb-4">
              <h4>
                <span className="head-border">
                  <img src={headBorder} alt="head-border" />
                </span>
                WE Hear
              </h4>
              <p className="mt-3">
                Queries, suggestions, assistance, be it anything you’d like to
                share with us, our team is always there to listen and provide
                you with solutions.
              </p>
            </div>

            <Form
              className="cc-form p-4"
              style={{
                background: "#fff",
                boxShadow: "0 0 20px rgba(0,0,0,0.05)",
              }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row gy-3">
                <div className="col-lg-6">
                  <Form.Control
                    type="text"
                    placeholder="Name*"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                  )}
                </div>

                <div className="col-lg-6">
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        country={"in"}
                        value={field.value}
                        onChange={(value) =>
                          field.onChange(value.replace(/^91/, ""))
                        }
                        disableCountryCode
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
                    <small className="text-danger">
                      {errors.phone.message}
                    </small>
                  )}
                </div>

                <div className="col-lg-6">
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
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div className="col-md-6">
                  <select
                    className={`form-select ${
                      errors.project ? "is-invalid" : ""
                    }`}
                    {...register("project", {
                      required: "Please select a project",
                    })}
                  >
                    <option value="">Select Projects*</option>
                    {[
                      "Grandeur",
                      "Aspire Gardens",
                      "Pride de' Villa",
                      "Highland",
                      "Horizon",
                      "Classique",
                      "Serene",
                      "Pride",
                      "Brillianze Phase II",
                      "Westfield",
                      "Mahalakshmi nagar Phase XIV",
                      "CH40",
                      "Mugavari Phase II",
                      "Windsor Park Phase IV - 1G",
                      "Southern Meadows",
                      "Exotica",
                      "Varnabhoomi Phase II",
                      "Windsor Park Phase VII",
                    ].map((proj) => (
                      <option key={proj} value={proj}>
                        VGN {proj}
                      </option>
                    ))}
                  </select>
                  {errors.project && (
                    <div className="invalid-feedback">
                      {errors.project.message}
                    </div>
                  )}
                </div>

                <div className="col-lg-12">
                  <textarea
                    rows="4"
                    placeholder="Message*"
                    className="form-control"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <small className="text-danger">
                      {errors.message.message}
                    </small>
                  )}
                </div>

                <div className="col-lg-12 text-center mt-4">
                  <button
                    type="submit"
                    className="site-btn5"
                    id="btnsubmit"
                    name="btnsubmit"
                    style={{
                      borderRadius: "50px",
                      padding: "10px 40px",
                      fontWeight: "600",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}
