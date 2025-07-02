import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import headBorder from "/head-border.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NriEnquiry } from "../../services/nriService";

export default function Nri() {
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
    mobile: data.phone, // Assuming you're using "phone" in the form
    location: data.location,
  };

  try {
    const result = await NriEnquiry(payload);

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
    <section className="contact-form-section spad bg" style={{ padding: "60px 0" }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading text-center mb-4">
              <h4>
                <span className="head-border">
                  <img src={headBorder} alt="head-border" />
                </span>
                ENQUIRY NOW
              </h4>
            </div>

            <Form
              className="cc-form p-4"
              style={{ background: "#fff", boxShadow: "0 0 20px rgba(0,0,0,0.05)" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row gy-3">
                {/* Name */}
                <div className="col-lg-6">
                  <Form.Control
                    type="text"
                    placeholder="Name*"
                    {...register("name", { required: "Name is required" })}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </div>

                {/* Phone */}
                <div className="col-lg-6">
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <PhoneInput
                        country={"in"}
                        {...field}
                        onChange={(value) => field.onChange(value.replace(/^91/, ""))}
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
                  {errors.phone && <div className="text-danger mt-1 small">{errors.phone.message}</div>}
                </div>

                {/* Email */}
                <div className="col-lg-6">
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
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </div>

                {/* Location */}
                <div className="col-lg-6">
                  <Form.Control
                    type="text"
                    placeholder="Location*"
                    {...register("location", { required: "Location is required" })}
                    isInvalid={!!errors.location}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.location?.message}
                  </Form.Control.Feedback>
                </div>

                {/* Submit */}
                <div className="col-lg-12 text-center mt-4">
                  <button
                    type="submit"
                    className="site-btn5"
                    id="btnsubmit"
                    name="btnsubmit"
                    style={{
                     
                      
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
