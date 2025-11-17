import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { sendEnquiry } from "../services/enquiryForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnquiryFormHome = ({ projectname }) => {   // ⬅️ accept prop here
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [phone, setPhone] = useState("");

  const validatePhone = (value) => {
    if (!value || value.length < 10) {
      setError("phone", {
        type: "manual",
        message: "Valid phone number is required",
      });
      return false;
    }
    clearErrors("phone");
    return true;
  };

  const onSubmit = async (data) => {
    if (!validatePhone(phone)) return;

    const payload = {
      name: data.name,
      mobile: phone,
      email: data.email,
      location: data.location,
      projectname: projectname || "",   // ⬅️ send projectname to API
    };

    const res = await sendEnquiry(payload);

    if (res.ok) {
      toast.success("Form submitted successfully!");
      reset();
      setPhone(""); // Clear phone input
    } else {
      toast.error("Submission failed. Please try again.");
    }

    console.log("Server response:", res.message);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="review-form"
        style={{ marginTop: "20px" }}
      >
        {/* Name */}
        <div className="">
          <label className="form-label">Name*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            maxLength="100"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

        {/* Phone Number */}
        <div className="">
          <label className="form-label">Phone Number*</label>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(value) => {
              setPhone(value);
              setValue("phone", value);
              validatePhone(value);
            }}
            inputProps={{
              name: "phone",
              required: true,
              className: "form-control",
            }}
            inputStyle={{ width: "100%" }}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone.message}</small>
          )}
        </div>

        {/* Email */}
        <div className="">
          <label className="form-label">Email Id*</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            maxLength="250"
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

        {/* Location */}
        <div className="">
          <label className="form-label">Location*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            maxLength="100"
            {...register("location", {
              required: "Location is required",
            })}
          />
          {errors.location && (
            <small className="text-danger">{errors.location.message}</small>
          )}
        </div>

        {/* Checkbox */}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="chkagree"
            {...register("agree", {
              required: "You must agree before submitting",
            })}
          />
          <label className="form-check-label form-label" htmlFor="chkagree">
            I Agree to let VGN&apos;s representatives to contact me
          </label>
          {errors.agree && (
            <small className="text-danger">{errors.agree.message}</small>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="site-btn w-100" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default EnquiryFormHome;
