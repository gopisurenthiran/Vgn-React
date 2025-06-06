import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUsers,
  FaBriefcase,
  FaThumbsUp,
  FaEye,
  FaCertificate,
  FaAddressBook,
  FaShareAltSquare,
} from "react-icons/fa";

const values = [
  {
    icon: <FaUsers size={32} />,
    title: "CUSTOMER SATISFACTION",
    text: "Delighting customers by offering them a great buying experience and a quality product.",
  },
  {
    icon: <FaBriefcase size={32} />,
    title: "ETHICAL BUSINESS PRACTICES",
    text: "Maintaining fair standards that help us earn goodwill from employees, stakeholders and customers.",
  },
  {
    icon: <FaThumbsUp size={32} />,
    title: "EXCELLENCE & PERFECTION",
    text: "Achieving our milestones through effective processes that leave no room for error.",
  },
  {
    icon: <FaEye size={32} />,
    title: "TRANSPARENCY",
    text: "Encouraging open conversations and fostering a strong company culture.",
  },
  {
    icon: <FaCertificate size={32} />,
    title: "COMMITMENT",
    text: "Our word is our bond and we ensure we execute the needs of our customers in a timely manner.",
  },
  {
    icon: <FaAddressBook size={32} />,
    title: "RESPECT FOR INDIVIDUALS & RELATIONS",
    text: "Cultivating mutual respect and treating all employees equally.",
  },
  {
    icon: <FaShareAltSquare size={32} />,
    title: "SOCIAL RESPONSIBILITY",
    text: "Creating projects that have the wellness of the environment at its core.",
  },
];

const ValuesSection = () => {
  return (
    <section
      className="property-section py-5 text-white"
      style={{
        backgroundSize: "cover",
        backgroundImage: "url('/values-back.jpg')",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="text-white">
            <span className="head-border me-2">
              <img src="/head-border.png" alt="border" />
            </span>
            VALUES THAT SHAPE US
          </h4>
        </div>
<div className="row">
  {values.map((value, index) => (
    <div className="col-lg-3 col-md-6 mb-4 d-flex" key={index}>
      <div className="servicebox2 first w-100 d-flex flex-column h-100 text-center p-3">
        <div className="service-icon1 mb-3">
          <div className="dm-icon-effect-1 effect-slide-bottom in">
            {value.icon}
          </div>
        </div>
        <div className="servicetitle mb-2">
          <h5>{value.title}</h5>
        </div>
        <p className="mb-0">{value.text}</p>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default ValuesSection;
