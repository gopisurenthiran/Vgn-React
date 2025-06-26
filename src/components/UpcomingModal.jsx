import React, { useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalService } from "../services/modalService";

export default function UpcomingModal({ show, handleClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const mobile = watch("mobile");

  useEffect(() => {
    register("mobile", {
      required: "Phone number is required",
      minLength: {
        value: 10,
        message: "Enter a valid phone number",
      },
    });
  }, [register]);

  const onSubmit = async (data) => {
    const payload = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      mobile: data.mobile.trim(),
      location: data.location.trim(),
    };

    try {
      await ModalService(payload);

      toast.success("Form submitted successfully!", {
        position: "bottom-right",
        autoClose: 3000,
      });

      reset();
      handleClose();
    } catch (error) {
      console.error("Submission error:", error);

      toast.error("Submission failed. Please try again.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <Modal.Title
            className="w-100 text-center"
            style={{ fontWeight: "600" }}
          >
            ENQUIRY FORM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <Form.Group controlId="name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                style={{ borderRadius: "6px" }}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Form.Group>

            {/* Mobile */}
            <Form.Group controlId="mobile" className="mb-3">
              <PhoneInput
                country={"in"}
                value={mobile}
                onChange={(value) => {
                  setValue("mobile", value);
                  trigger("mobile");
                }}
                inputStyle={{
                  width: "100%",
                  borderRadius: "6px",
                  height: "38px",
                }}
                inputProps={{
                  name: "mobile",
                }}
              />
              {errors.mobile && (
                <small className="text-danger">{errors.mobile.message}</small>
              )}
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email Id"
                style={{ borderRadius: "6px" }}
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
            </Form.Group>

            {/* Location */}
            <Form.Group controlId="location" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Location"
                style={{ borderRadius: "6px" }}
                {...register("location", {
                  required: "Location is required",
                })}
              />
              {errors.location && (
                <small className="text-danger">
                  {errors.location.message}
                </small>
              )}
            </Form.Group>

            {/* Submit */}
            <Button
              type="submit"
              className="w-100 mx-auto"
              style={{
                backgroundColor: "#b80000",
                border: "none",
                fontWeight: "600",
              }}
            >
              Submit and Download
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
