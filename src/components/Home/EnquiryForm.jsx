import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { submitEnquiry } from "../../services/enquiryService";

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await submitEnquiry(data);
      // console.log("Success:", result);
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div className="" style={{ background: '#fef7ef'}}>
 <div
      className="container enquiry-section d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/enquiry-back.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 15px",
        minHeight: "400px",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="text-center mb-4">
        <h4
          className="text-white d-inline-flex align-items-center"
          style={{ fontSize: "1.6rem" }}
        >
          <img
            className="head-border"
            src="/head-border.png"
            alt="Red corner"
            style={{ width: "30px", height: "28px", marginRight: "10px" }}
          />
          ENQUIRY FORM
        </h4>
      </div>

      <div
        className="container bg-white rounded-4 shadow-lg p-4 p-md-5"
        style={{ maxWidth: "900px" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3 mb-3">
            {/* Name */}
            <div className="col-md-6">
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Name*"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <Controller
                name="mobile"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    country="in"
                    value={field.value}
                    onChange={field.onChange}
                    disableCountryCode
                    
                    enableSearch
                    placeholder="Phone Number*"
                    inputProps={{ name: "mobile", required: true }}
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
                <div className="text-danger small mt-1">
                  {errors.mobile.message}
                </div>
              )}
            </div>
          </div>

          {/* Email & Project */}
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
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
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <select
                className={`form-select ${errors.project ? "is-invalid" : ""}`}
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
                <div className="invalid-feedback">{errors.project.message}</div>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mb-3">
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              rows="3"
              placeholder="Message*"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message.message}</div>
            )}
          </div>
          <div className="row  align-items-start mb-3 gx-4">
            <div className="col-auto d-flex align-items-start">
              <input
                type="checkbox"
                id="consent"
                className="custom-check mt-1 me-3"
                {...register("consent", { required: "Consent is required" })}
              />
              <div>
                <label htmlFor="consent" className="form-check-label small m-0">
                  I authorize VGN and its representatives to
                  contact me with updates and notifications via email, SMS,
                  WhatsApp & call.{" "}
                  This will override the registry on DND/NDNC.
                  <span className="">*</span>
                </label>
                {errors.consent && (
                  <div className=" small mt-1">
                    {errors.consent.message}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="site-btn5 px-4 py-2">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
   
  );
}
