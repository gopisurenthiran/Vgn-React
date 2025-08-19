import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "@/assets/head-border.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IreferEnquiry } from "../../services/ireferService";

export default function ReferralForm() {
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
      project: data.project,
      plot_no: data.plotNo,
      other_project: data.otherProject,
      friend_name: data.friendName,
      friend_mobile: data.friendPhone,
      friend_location: data.friendLocation,
      refer_project: data.referProject,
    };

    try {
      await IreferEnquiry(payload);
      toast.success("Form submitted successfully!", {
        position: "bottom-right",
        autoClose: 3000,
      });
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed. Please try again.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <section className="contact-form-section py-5 bg">
      <ToastContainer position="top-right" autoClose={3000} />
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
                    {/* Name */}
                    <div className="col-lg-6">
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        className="form-control"
                        placeholder="Name*"
                      />
                      {errors.name && (
                        <small className="text-danger">
                          {errors.name.message}
                        </small>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="col-lg-6">
                      <Controller
                        name="phone"
                        control={control}
                        rules={{ required: "Phone number is required" }}
                        render={({ field }) => (
                          <PhoneInput
                            {...field}
                            country="in"
                            onChange={(val) =>
                              field.onChange(val.replace(/^91/, ""))
                            }
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
                        <small className="text-danger">
                          {errors.phone.message}
                        </small>
                      )}
                    </div>

                    {/* Email */}
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
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
                    </div>

                    {/* Project */}
                    <div className="col-lg-6">
                      <select
                        {...register("project", {
                          required: "Select a project",
                        })}
                        className="form-control"
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
                        <small className="text-danger">
                          {errors.project.message}
                        </small>
                      )}
                    </div>

                    {/* Plot No */}
                    <div className="col-lg-6">
                      <input
                        {...register("plotNo", {
                          required: "Plot number is required",
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Flat / Plot Number*"
                      />
                      {errors.plotNo && (
                        <small className="text-danger">
                          {errors.plotNo.message}
                        </small>
                      )}
                    </div>

                    {/* Other Project */}
                    <div className="col-lg-6">
                      <input
                        {...register("otherProject")}
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
                    {/* Friend Name */}
                    <div className="col-lg-6">
                      <input
                        {...register("friendName", {
                          required: "Friend's name is required",
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Friend Name*"
                      />
                      {errors.friendName && (
                        <small className="text-danger">
                          {errors.friendName.message}
                        </small>
                      )}
                    </div>

                    {/* Friend Phone */}
                    <div className="col-lg-6">
                      <Controller
                        name="friendPhone"
                        control={control}
                        rules={{ required: "Friend's phone is required" }}
                        render={({ field }) => (
                          <PhoneInput
                            {...field}
                            country="in"
                            onChange={(val) =>
                              field.onChange(val.replace(/^91/, ""))
                            }
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
                        <small className="text-danger">
                          {errors.friendPhone.message}
                        </small>
                      )}
                    </div>

                    {/* Location */}
                    <div className="col-lg-6">
                      <input
                        {...register("friendLocation", {
                          required: "Location is required",
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Location*"
                      />
                      {errors.friendLocation && (
                        <small className="text-danger">
                          {errors.friendLocation.message}
                        </small>
                      )}
                    </div>

                    {/* Referee Project */}
                    <div className="col-lg-6">
                      <select
                        {...register("referProject", {
                          required: "Select a project",
                        })}
                        className="form-control"
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
                      {errors.referProject && (
                        <small className="text-danger">
                          {errors.referProject.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button type="submit" className="site-btn5 px-5">
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
