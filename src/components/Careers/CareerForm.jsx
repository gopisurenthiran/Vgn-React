// src/components/CareersForm/CareersForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "/head-border.png";
import { career } from "../../services/career";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CareersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let resumeBase64 = "";
      let resumeName = "";

      if (data.resume && data.resume[0]) {
        const file = data.resume[0];
        resumeName = file.name;

        resumeBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const base64 = reader.result.split(",")[1]; // only the base64 part
            resolve(base64);
          };
          reader.onerror = reject;
        });
      }

      const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        department: data.department,
        message: data.message || "",
        resume_name: resumeName,
        resume_base64: resumeBase64,
      };

      console.log("Payload sending =>", payload);

      const response = await career(payload);

      if (response.status === "success") {
        toast.success("Form submitted successfully!");
        reset();
      } else {
        toast.error(response.message || "Failed to submit");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="contact-form-section spad bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="heading text-center mb-3">
              <h4>
                <span className="head-border">
                  <img src={headBorder} alt="head-border" />
                </span>{" "}
                Work with us
              </h4>
            </div>

            <div className="cf-content p-4 mt-4">
              <form className="cc-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  {/* Name */}
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Name*"
                      {...register("name", { required: "Name is required" })}
                      className="form-control"
                    />
                    {errors.name && (
                      <small className="text-danger">
                        {errors.name.message}
                      </small>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="col-lg-6 mb-3">
                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      {...register("phone", {
                        required: "Phone is required",
                        maxLength: { value: 10, message: "Max 10 digits" },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Only numbers allowed",
                        },
                      })}
                      className="form-control"
                    />
                    {errors.phone && (
                      <small className="text-danger">
                        {errors.phone.message}
                      </small>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-lg-12 mb-3">
                    <input
                      type="email"
                      placeholder="Email id*"
                      {...register("email", { required: "Email is required" })}
                      className="form-control"
                    />
                    {errors.email && (
                      <small className="text-danger">
                        {errors.email.message}
                      </small>
                    )}
                  </div>

                  {/* Department */}
                  <div className="col-lg-12 mb-3">
                    <select
                      {...register("department", {
                        required: "Select a department",
                      })}
                      className="form-select"
                    >
                      <option value="">Select Department*</option>
                      <option value="Administration">Administration</option>
                      <option value="CRM">CRM</option>
                      <option value="ERP / Software Engineer">
                        ERP / Software Engineer
                      </option>
                      <option value="Architectural Design">
                        Architectural Design
                      </option>
                      <option value="Facility Management">
                        Facility Management
                      </option>
                      <option value="Finance & Accounts">
                        Finance & Accounts
                      </option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="Human Resources">Human Resources</option>
                      <option value="Internal Audit">Internal Audit</option>
                      <option value="Legal & Liaison">Legal & Liaison</option>
                      <option value="Land purchase">Land purchase</option>
                      <option value="Marketing">Marketing</option>
                      <option value="MEP Engineering">MEP Engineering</option>
                      <option value="Planning">Planning</option>
                      <option value="Pre sales & Tele calling">
                        Pre sales & Tele calling
                      </option>
                      <option value="Civil Execution & Engineering">
                        Civil Execution & Engineering
                      </option>
                      <option value="Purchase">Purchase</option>
                      <option value="Quantity survey">Quantity survey</option>
                      <option value="Sales">Sales</option>
                      <option value="Secretarial">Secretarial</option>
                      <option value="Systems & IT">Systems & IT</option>
                      <option value="Taxation">Taxation</option>
                      <option value="Technical Audit">Technical Audit</option>
                      <option value="Transportation">Transportation</option>
                    </select>
                    {errors.department && (
                      <small className="text-danger">
                        {errors.department.message}
                      </small>
                    )}
                  </div>

                  {/* Message */}
                  <div className="col-lg-12 mb-3">
                    <textarea
                      placeholder="Message"
                      {...register("message")}
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </div>

                  {/* Resume Upload */}
                  {/* Resume Upload */}
                  <div className="col-lg-4 mb-3">
                    <input
                      type="file"
                      accept=".doc,.docx"   // Only DOC & DOCX allowed
                      {...register("resume", {
                        validate: (fileList) => {
                          if (!fileList[0]) return "Resume is required";

                          const file = fileList[0];

                          // Allowed formats
                          const allowedTypes = [
                            "application/msword",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          ];

                          if (!allowedTypes.includes(file.type)) {
                            return "Only DOC or DOCX files are allowed";
                          }

                          // Max 2 MB size check
                          if (file.size > 2 * 1024 * 1024) {
                            return "File must be less than 2 MB";
                          }

                          return true;
                        },
                      })}
                      className="form-control"
                    />

                    {/* Note text */}
                    <small className="text-muted d-block mt-1">
                      Allowed file types: <strong>.doc, .docx</strong> (Max: <strong>2 MB</strong>)
                    </small>

                    {errors.resume && (
                      <small className="text-danger d-block mt-1">
                        {errors.resume.message}
                      </small>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="site-btn5 px-4">
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
