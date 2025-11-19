import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Testimonials from "./TrustTestimonials";

const testimonials = [
  {
    name: "AJITH KUMAR",
    desc: "VGN CH40 Phase II",
    text: "Have bought a plot in VGN CH40. The overall support from the team is impressive and transparent especially from sales and customer service till registration. Hope the same will continue here after too. Thanks to Prem and Selvaraj for their personalized service.",
    image: "/ta-1.jpg",
  },
  {
    name: "VIJAYKUMAR KRISHNAMURTHY",
    desc: "",
    text: "It's was a pleasant experience buying property from VGN. Mr Arun, Mrs. Vani and Mr Bharath was very pleasant, helpful and very cooperative and made my experience a great one. Keep up the good work",
    image: "/ta-1.jpg",
  },
  {
    name: "Jaisankar S",
    desc: "Plot no 17 – VGN Hive Phase II",
    text: "VGN is a reputed plot developer with clear title and developing premium plots at strategic locations in Chennai. I am very happy as one of the customers to VGN in Ambattur Hive-2 and VGN offering good customer services during buying process.",
    image: "/ta-1.jpg",
  },
  {
    name: "Selvam P.M",
    desc: "Plot no 3, 4 – VGN Varna Bhoomi Phase I",
    text: "Very reliable and professional real estate company. One of the best customer services in Chennai. From booking to documentation, they take care of the customer very well. I am a repeat customer after 10 years and they still hold the same quality and value.",
    image: "/ta-1.jpg",
  },
  {
    name: "Shanmuga Sundaram Natarajan",
    desc: "Plot no 58, 59–VGN Hive",
    text: "We have been trying to find a plot within city and affordable. We could find the same in VGN Hive. We had certain initial hick ups while choosing the plots we wanted, however VGN team handled well.",
    image: "/ta-1.jpg",
  },
  {
    name: "Sona Iruthayaraj",
    desc: "Plot no 47, 48 & 49 - Varna Bhoomi Phase II",
    text: "Very impressed with VGN's professional and customer friendly approach. Senthil from Sales was very transparent and guided through out till registration. Was always available to clarify any doubts instantly. Was very much impressed with his dedication towards work🙂! Overall a very positive experience with VGN. Wish VGN many more successful projects!!",
    image: "/ta-1.jpg",
  },
  {
    name: "Shyam Krishnan",
    desc: "",
    text: "Great quality of products used. Great customer support. Worth the money! Would definitely suggest VGN to anyone who dream to own a dwell at Chennai.",
    image: "/ta-1.jpg",
  },
  {
    name: "Balaji T K",
    desc: "",
    text: "Brand you can trust and believe. It's worth what you pay for the plot. Clear documents. Company which fulfills their commitment and your need and expectations.",
    image: "/ta-1.jpg",
  },
  {
    name: "Pavithra Reddy",
    desc: "",
    text: "Reputed developer in the city!! Known for quality constructions.",
    image: "/ta-3.jpg",
  },
  {
    name: "Elangovan Nandagopalan",
    desc: "Plot no 76 – VGN Spring field Phase II",
    text: "Good reputed builder in Chennai. I’m happy to buy a land in VGN spring field. Documents are clear. Thank u VGN team.",
    image: "/ta-1.jpg",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(nextTestimonial, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <section id="testim" className="testimonial-section py-5 bg">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="heading">
              <h4>
                <span className="head-border me-2">
                  <img src="/head-border.png" alt="border" />
                </span>
                What our client says?
              </h4>
            </div>
          </div>
        </div>

        {/* <div
          className="position-relative text-center"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
         
          <button
            className="position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent text-dark fs-4"
            onClick={prevTestimonial}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div className="mx-auto px-3 px-md-5" style={{ maxWidth: "700px" }}>
            <div className="p-4 text-start">
              <div className="text-center mb-3">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="rounded-circle"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </div>
              <h5 className="mb-1 text-center">{testimonials[current].name}</h5>
              {testimonials[current].desc && (
                <p className="small text-center mb-3 text-danger">{testimonials[current].desc}</p>
              )}
              <p className="text-dark text-center">
                <FaQuoteLeft className="me-2 text-danger" />
                {testimonials[current].text}
                <FaQuoteRight className="ms-2 text-danger" />
              </p>
            </div>
          </div>

         
          <button
            className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent text-dark fs-4"
            onClick={nextTestimonial}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div> */}

        {/* <div className="d-flex justify-content-center mt-4">
          <ul className="list-inline mb-0">
            {testimonials.map((_, idx) => (
              <li
                key={idx}
                className={`list-inline-item mx-1 ${idx === current ? "bg-danger" : "bg-secondary"}`}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => setCurrent(idx)}
              ></li>
            ))}
          </ul>
        </div> */}
        <Testimonials/>
      </div>
    </section>
  );
}
