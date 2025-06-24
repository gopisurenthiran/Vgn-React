import React, { useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function BrochureModal({ show, handleClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const phone = watch("phone");

  // Register phone manually with validation
  useEffect(() => {
    register("phone", {
      required: "Phone number is required",
      minLength: {
        value: 10,
        message: "Enter a valid phone number",
      },
    });
  }, [register]);

  const onSubmit = (data) => {
    console.log("Brochure form submitted:", data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        <Modal.Title
          className="w-100 text-center"
          style={{ fontWeight: "600" }}
        >
          DOWNLOAD E-BROCHURE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <Form.Group controlId="formName" className="mb-3">
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

          {/* Phone */}
          <Form.Group controlId="formPhone" className="mb-3">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => {
                setValue("phone", phone);
                trigger("phone");
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "6px",
                height: "38px",
              }}
              inputProps={{
                name: "phone",
              }}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="formEmail" className="mb-4">
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
  );
}
