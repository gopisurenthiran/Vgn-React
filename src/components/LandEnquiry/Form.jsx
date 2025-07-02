import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import headBorder from "/head-border.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LandEnquiry } from "../../services/LandEnquiry";

export default function LandEnquiryForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
  // Map form fields to API payload format
  const payload = {
    name: data.name,
    email: data.email,
    mobile: data.phone,
    location: data.location,
    message: data.message,
  };

  try {
    const result = await LandEnquiry(payload);

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
    <section className="contact-form-section spad py-5 bg">
       <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">
        <div className="custom-form-wrapper mx-auto p-4 p-md-5 bg-white shadow-sm">
          <div className="heading text-center mb-4">
            <h4 className="form-heading">
              <span className="head-border">
                <img src={headBorder} alt="head-border" />
              </span>
              LAND ENQUIRY / JOINT VENTURES
            </h4>
          </div>

          <form className="cc-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-md-flex gap-3 mb-3 flex-column flex-md-row">
              <div className="w-100 mb-3 mb-md-0">
                <input
                  type="text"
                  placeholder="Name*"
                  {...register("name", { required: "Name is required" })}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>

              <div className="w-100">
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
                      enableSearch
                      placeholder="Phone Number*"
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "50px",
                        fontSize: "16px",
                        paddingLeft: "58px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        color: "#555"
                      }}
                      buttonStyle={{
                        border: "none",
                        background: "transparent"
                      }}
                      containerStyle={{
                        width: "100%"
                      }}
                    />
                  )}
                />
                {errors.phone && <div className="text-danger mt-1 small">{errors.phone.message}</div>}
              </div>
            </div>

            <div className="d-md-flex gap-3 mb-3 flex-column flex-md-row">
              <div className="w-100 mb-3 mb-md-0">
                <input
                  type="email"
                  placeholder="Email id*"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format"
                    }
                  })}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="w-100">
                <input
                  type="text"
                  placeholder="Location*"
                  {...register("location", { required: "Location is required" })}
                  className={`form-control ${errors.location ? "is-invalid" : ""}`}
                />
                {errors.location && <div className="invalid-feedback">{errors.location.message}</div>}
              </div>
            </div>

            <div className="mb-4">
              <textarea
                rows="4"
                placeholder="Message*"
                {...register("message", { required: "Message is required" })}
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
            </div>

            <div className="text-center">
              <button type="submit" className="site-btn5 custom-submit-btn">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
