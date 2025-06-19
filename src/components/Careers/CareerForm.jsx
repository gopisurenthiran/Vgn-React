import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "/head-border.png";

export default function CareersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("department", data.department);
    formData.append("message", data.message || "");

    if (data.resume && data.resume.length > 0) {
      formData.append("resume", data.resume[0]);
    }

    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit");

      alert("Application submitted successfully!");
      reset();
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
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

            <p className="text-center">
             Dreams have no limits. So does passion and excellence. That’s why we’re always on the lookout for relentless people who stop at nothing to achieve their goals. Real estate is growing at an exponential rate and is filled with plenty of opportunities to prove one’s mettle. That combined with a stint in an established brand like VGN will open up your minds to a greater reality and deeper understanding of the industry. Also, real estate being a constantly evolving sector, demands the most innovative minds coupled with experienced people. Hence, our most important investment is people with the right attitude and talent.
            </p>
            <p className="text-center">
              At VGN, we believe diversity brings in various ideas and that’s why we hire people from various backgrounds to foster the spirit of thinking and curiosity. Our employees make sure they partner with each other, guide one another and grow together as a team and a brand.
            </p>

            <div className="cf-content p-4  mt-4">
              <form className="cc-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="group-input">
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <input
                        type="text"
                        placeholder="Name*"
                        {...register("name", { required: "Name is required", maxLength: 100 })}
                        className="form-control"
                      />
                      {errors.name && <small className="text-danger">{errors.name.message}</small>}
                    </div>

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
                      {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                    </div>

                    <div className="col-lg-12 mb-3">
                      <input
                        type="email"
                        placeholder="Email id*"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email format",
                          },
                        })}
                        className="form-control"
                      />
                      {errors.email && <small className="text-danger">{errors.email.message}</small>}
                    </div>

                    <div className="col-lg-12 mb-3">
                      <select
                        {...register("department", { required: "Select a department" })}
                        className="form-select"
                      >
                        <option value="">Select Department*</option>
                        <option value="Administration">Administration</option>
                        <option value="CRM">CRM</option>
                        <option value="ERP / Software Engineer">ERP / Software Engineer</option>
                        <option value="Architectural Design">Architectural Design</option>
                        <option value="Facility Management">Facility Management</option>
                        <option value="Finance & Accounts">Finance & Accounts</option>
                        <option value="Graphic Designer">Graphic Designer</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Internal Audit">Internal Audit</option>
                        <option value="Legal & Liaison">Legal & Liaison</option>
                        <option value="Land purchase">Land purchase</option>
                        <option value="Marketing">Marketing</option>
                        <option value="MEP Engineering">MEP Engineering</option>
                        <option value="Planning">Planning</option>
                        <option value="Pre sales & Tele calling">Pre sales & Tele calling</option>
                        <option value="Civil Execution & Engineering">Civil Execution & Engineering</option>
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
                        <small className="text-danger">{errors.department.message}</small>
                      )}
                    </div>

                    <div className="col-lg-12 mb-3">
                      <textarea
                        placeholder="Message"
                        {...register("message")}
                        className="form-control"
                        rows="3"
                      ></textarea>
                    </div>

                    <div className="col-lg-4 mb-3">
                      <input
                        type="file"
                        {...register("resume")}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="site-btn btn btn-primary px-4">
                    Apply Now
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
