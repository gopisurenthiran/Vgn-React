import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "/head-border.png";
import image from "@/assets/nri1.jpg";
import image1 from "@/assets/nri2.jpg";
import image2 from "@/assets/nri3.jpg";
import image3 from "@/assets/nri4.jpg";

const nriContent = [
  {
    title: "New IT Parks",
    image: image,
    shortText:
      "Ever since the completion of Tidel Park in 2000, Chennai has come a long way in IT development. Right now, there are more than 40 IT parks under construction,",
    fullText:
      " the most notable of them being Tidel Park Avadi Phase I which is a massive development of 5.57 lakh sq.ft.",
  },
  {
    title: "Metro Rail",
    image: image1,
    shortText:
      "The birth of Chennai Metro Rail was a boon since it cut down traffic and made transportation quicker and easier. The Metro covers a 45 km network that has",
    fullText:
      " two corridors that connect Washermanpet to Airport and Chennai Central to St. Thomas Mount.",
  },
  {
    title: "Sports Village",
    image: image2,
    shortText:
      "The Tamil Nadu government has decided to set up a sports village with four Olympic Academies in Chennai to cater to the need of budding sports enthusiasts",
    fullText:
      " and professionals. These academics will provide athletes with training and essential equipment required for better performance.",
  },
  {
    title: "Chengalpattu as next Gurgaon",
    image: image3,
    shortText:
      "Due to suburban train services and bus connectivity to Chennai, rural pockets around Chengalpet witnessed a natural growth without intervention from",
    fullText:
      " the state government. Chengalpet then became a driving force for urban development in nearby areas...",
  },
];

export default function WhyInvestChennai() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleReadMore = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-5" style={{ background: "#fef7f1" }}>
      <div className="container">
        <div className="heading text-center mb-4">
          <h4>
            <span className="head-border">
              <img src={headBorder} alt="head-border" />
            </span>
            WHY INVEST IN CHENNAI?
          </h4>
          <p>
            One of India’s biggest property investment cities, Chennai is home
            to posh residences, world-class IT parks, MNCs and promising
            start-ups.
          </p>
          <h5 className="head2 mt-4">CHENNAI’S SUSTAINED GROWTH</h5>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {nriContent.map((item, index) => {
            const isExpanded = expandedIndexes.includes(index);

            return (
              <SwiperSlide key={index}>
                <div
                  className="d-flex flex-column flex-md-row align-items-stretch h-100"
                  style={{
                    minHeight: isExpanded ? "auto" : "300px",
                  }}
                >
                  {/* Fixed-size image column */}
                  <div
                    className="d-none d-md-block"
                    style={{
                      width: "280px",
                      height: "100%",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "0.5rem",
                        borderBottomLeftRadius: "0.5rem",
                      }}
                    />
                  </div>

                  {/* Content with white card */}
                  <div
                    className="bg-white p-4 d-flex flex-column justify-content-between shadow-sm"
                    style={{
                      flex: 1,
                      borderTopRightRadius: "0.5rem",
                      borderBottomRightRadius: "0.5rem",
                      minHeight: "100%",
                    }}
                  >
                    <div>
                      <h6 className="text-danger fw-bold">{item.title}</h6>
                      <p style={{ fontSize: "16px" }}>
                        {item.shortText}
                        {!isExpanded && <span>...</span>}
                        {isExpanded && <span>{item.fullText}</span>}
                      </p>
                    </div>
                    <div>
                      <button
                        className="btn btn-sm btn-outline-danger rounded-pill px-3"
                        onClick={() => toggleReadMore(index)}
                      >
                        {isExpanded ? "READ LESS" : "READ MORE"}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
