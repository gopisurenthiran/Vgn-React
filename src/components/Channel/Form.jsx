import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "/head-border.png"; // adjust if needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChannelEnquiry } from "../../services/ChannelService";

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
    mobile: data.mobile,
    company_name: data.company,
    address: data.address,
    org_type: data.organizationType,
    member_of_association: data.association || "",
    type_of_bussiness: data.businessType,
    rera: data.rera || "",
  };

  try {
    const result = await ChannelEnquiry(payload);

    toast.success("Form submitted successfully!");

    reset(); // Clear form after success
  } catch (error) {
    console.error("Submission error:", error);

    toast.error("Submission failed. Please try again.");
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
                PARTNER WITH US
              </h4>
              <p className="mt-3">
                We truly believe that the right partners can create a big impact and enable collective growth. Let’s
                join hands and lay out the path to a great association filled with success and profits.
              </p>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)} className="cc-form p-4" style={{ background: "#fff", boxShadow: "0 0 20px rgba(0,0,0,0.05)" }}>
              <div className="row gy-3">
                <div className="col-lg-6">
                  <Form.Control
                    type="text"
                    placeholder="Name*"
                    {...register("name", { required: "Name is required" })}
                    isInvalid={errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </div>

                <div className="col-lg-6">
                  <Controller
                    name="mobile"
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
                        inputProps={{ required: true, name: "mobile" }}
                        inputStyle={{
                          width: "100%",
                          height: "50px",
                          fontSize: "16px",
                          paddingLeft: "58px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          color: "#555"
                        }}
                        buttonStyle={{ border: "none", background: "transparent" }}
                        containerStyle={{ width: "100%" }}
                      />
                    )}
                  />
                  {errors.mobile && <div className="text-danger small mt-1">{errors.mobile.message}</div>}
                </div>

                <div className="col-lg-6">
                  <Form.Control
                    type="email"
                    placeholder="Email id*"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    })}
                    isInvalid={errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </div>

                <div className="col-lg-6">
                  <Form.Control
                    type="text"
                    placeholder="Company Name*"
                    {...register("company", { required: "Company name is required" })}
                    isInvalid={errors.company}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.company?.message}
                  </Form.Control.Feedback>
                </div>

                <div className="col-lg-6">
                  <Form.Control
                    type="text"
                    placeholder="Registered Address*"
                    {...register("address", { required: "Address is required" })}
                    isInvalid={errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address?.message}
                  </Form.Control.Feedback>
                </div>

                <div className="col-lg-6">
                  <Form.Control
                    type="text"
                    placeholder="Organization Type*"
                    {...register("organizationType", { required: "Organization type is required" })}
                    isInvalid={errors.organizationType}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.organizationType?.message}
                  </Form.Control.Feedback>
                </div>

                <div className="col-lg-6">
                  <Form.Control
                    type="text"
                    placeholder="Member of any Association"
                    {...register("association")}
                  />
                </div>

                <div className="col-lg-6">
                  <Form.Select
                    {...register("businessType", { required: "Business type is required" })}
                    isInvalid={errors.businessType}
                  >
                    <option value="">Type of Business*</option>
                    <option>Land Sourcing</option>
                    <option>Commercial Sales</option>
                    <option>Residential Sales</option>
                    <option>Others</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.businessType?.message}
                  </Form.Control.Feedback>
                </div>

                <div className="col-lg-12">
                  <Form.Control
                    type="text"
                    placeholder="RERA #"
                    {...register("rera")}
                  />
                </div>

                <div className="col-lg-12 text-center mt-4">
                  <button
                    type="submit"
                    className="site-btn5"
                    id="btnsubmit"
                    name="btnsubmit"
                    style={{
                      border: "2px solid #b40000",
                     
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
