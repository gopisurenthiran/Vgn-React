import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import headBorder from "/head-border.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SalesEnquiry } from "../../services/SalesService";

export default function SalesForm() {
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
    mobile: data.phone, // changed from data.phone to data.mobile
    project: data.project,
    message: data.message,
  };

  try {
    const result = await SalesEnquiry(payload);

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
              Sales Enquiry
            </h4>
          </div>

          <form className="cc-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-md-flex gap-3 mb-3">
              <div className="w-100 mb-3 mb-md-0">
                <input
                  type="text"
                  placeholder="Name*"
                  className="form-control"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </div>

              <div className="w-100">
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
                      enableSearch
                      placeholder="Phone Number*"
                      inputProps={{ name: "phone", required: true }}
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
              </div>
            </div>

            <div className="d-md-flex gap-3 mb-3">
              <div className="w-100 mb-3 mb-md-0">
                <input
                  type="email"
                  placeholder="Email id*"
                  className="form-control"
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
              </div>

              <div className="w-100">
                <select
                  className="form-select custom-select"
                  {...register("project", { required: "Please select a project" })}
                >
                  <option value="">Select Projects*</option>
                  <option value="Highland">VGN Highland</option>
                  <option value="Paradise">VGN Paradise</option>
                  <option value="Horizon">VGN Horizon</option>
                  <option value="Classique">VGN Classique</option>
                  <option value="Serene">VGN Serene</option>
                  <option value="Pride">VGN Pride</option>
                  <option value="Brillianze Phase II">VGN Brillianze Phase II</option>
                  <option value="Westfield">VGN Westfield</option>
                  <option value="Mahalakshmi nagar Phase XIV">VGN Mahalakshmi nagar Phase XIV</option>
                  <option value="CH40">VGN CH40</option>
                  <option value="Mugavari Phase II">VGN Mugavari Phase - II</option>
                  <option value="Windsor Park Phase IV - 1G">VGN Windsor Park Phase IV - 1G</option>
                  <option value="Southern Meadows">VGN Southern Meadows</option>
                  <option value="Exotica">VGN Exotica</option>
                  <option value="Varnabhoomi Phase II">VGN Varnabhoomi Phase II</option>
                  <option value="Windsor Park Phase VII">VGN Windsor Park Phase VII</option>
                </select>
                {errors.project && (
                  <small className="text-danger">{errors.project.message}</small>
                )}
              </div>
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                rows="4"
                placeholder="Message*"
                className="form-control"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
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
