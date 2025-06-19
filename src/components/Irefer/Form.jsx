import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "@/assets/head-border.png";

export default function ReferralForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
  };

  return (
    <section className="contact-form-section py-5 bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="cf-content">
              <div className="heading mb-4">
                <h4>
                  <span className="head-border">
                    <img src={headBorder} alt="head-border" />
                  </span>
                  Referral Form
                </h4>
              </div>

              <form className="cc-form" onSubmit={handleSubmit(onSubmit)}>
                {/* Your Details */}
                <div className="group-input mb-4">
                  <div className="cc-title mb-3">
                    <h4>Your Details</h4>
                  </div>
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        className="form-control"
                        placeholder="Name*"
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
                            country="in"
                            onChange={(val) => field.onChange(val.replace(/^91/, ""))}
                            enableSearch
                            disableCountryCode
                            placeholder="Phone Number*"
                            inputStyle={{
                              width: "100%",
                              height: "50px",
                              fontSize: "16px",
                              paddingLeft: "58px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              color: "#555",
                            }}
                            containerStyle={{ width: "100%" }}
                          />
                        )}
                      />
                      {errors.phone && (
                        <small className="text-danger">{errors.phone.message}</small>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email",
                          },
                        })}
                        type="email"
                        className="form-control"
                        placeholder="Email id*"
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email.message}</small>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <select
                        {...register("enqproject", { required: "Select a project" })}
                        className="form-control"
                      >
                        <option value="">Select Projects*</option>
                        <option value="Highland">VGN Highland</option>
                        <option value="Paradise">VGN Paradise</option>
                        {/* Add remaining options */}
                      </select>
                      {errors.enqproject && (
                        <small className="text-danger">{errors.enqproject.message}</small>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <input
                        {...register("flatplotno", { required: "Plot number is required" })}
                        type="text"
                        className="form-control"
                        placeholder="Flat / Plot Number*"
                      />
                      {errors.flatplotno && (
                        <small className="text-danger">{errors.flatplotno.message}</small>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <input
                        {...register("otherproj")}
                        type="text"
                        className="form-control"
                        placeholder="Other Project"
                      />
                    </div>
                  </div>
                </div>

                {/* Referee Details */}
                <div className="group-input mb-4">
                  <div className="cc-title mb-3">
                    <h4>Referee Details</h4>
                  </div>
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <input
                        {...register("frndname", { required: "Friend's name is required" })}
                        type="text"
                        className="form-control"
                        placeholder="Friend Name*"
                      />
                      {errors.frndname && (
                        <small className="text-danger">{errors.frndname.message}</small>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <Controller
                        name="friendPhone"
                        control={control}
                        rules={{ required: "Friend's phone is required" }}
                        render={({ field }) => (
                          <PhoneInput
                            {...field}
                            country="in"
                            onChange={(val) => field.onChange(val.replace(/^91/, ""))}
                            enableSearch
                            disableCountryCode
                            placeholder="Friend Mobile*"
                            inputStyle={{
                              width: "100%",
                              height: "50px",
                              fontSize: "16px",
                              paddingLeft: "58px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              color: "#555",
                            }}
                            containerStyle={{ width: "100%" }}
                          />
                        )}
                      />
                      {errors.friendPhone && (
                        <small className="text-danger">{errors.friendPhone.message}</small>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <input
                        {...register("location", { required: "Location is required" })}
                        type="text"
                        className="form-control"
                        placeholder="Location*"
                      />
                      {errors.location && (
                        <small className="text-danger">{errors.location.message}</small>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <select
                        {...register("frndproject", { required: "Select a project" })}
                        className="form-control"
                      >
                        <option value="">Select Projects*</option>
                        <option value="Highland">VGN Highland</option>
                        <option value="Paradise">VGN Paradise</option>
                        {/* Add remaining options */}
                      </select>
                      {errors.frndproject && (
                        <small className="text-danger">{errors.frndproject.message}</small>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="site-btn btn-primary px-5">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
