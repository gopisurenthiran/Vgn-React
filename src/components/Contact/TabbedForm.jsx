import React, { useState } from "react";
import SalesForm from '../Contact/SalesForm'

import LandEnquiryForm from '../LandEnquiry/Form'

import VendorEnquiryForm from "./VendorForm";
import ChannelForm from "./ChannelForm";
import ContactSupportForm from "./ContactForm";


export default function TabForms() {
  const [activeTab, setActiveTab] = useState("sales");

  const renderForm = () => {
    switch (activeTab) {
      case "sales":
        return <SalesForm />;
      case "land":
        return <LandEnquiryForm />;
      case "vendor":
        return <VendorEnquiryForm />;
      case "channel":
        return <ChannelForm/>;
      case "contact":
        return <ContactSupportForm />;
      default:
        return null;
    }
  };

  return (
    <section className="contact-form-section spad bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Tab Buttons */}
            <div className="tab mb-4 d-flex flex-wrap gap-2">
              {[
                { id: "sales", label: "Sales Enquiry" },
                { id: "land", label: "Land Enquiry / Joint Ventures" },
                { id: "vendor", label: "Vendor Enquiry" },
                { id: "channel", label: "Channel Partner" },
                { id: "contact", label: "Contact Support" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tablinks btn ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Form */}
            {renderForm()}
          </div>
        </div>
      </div>
    </section>

   
  );
}
