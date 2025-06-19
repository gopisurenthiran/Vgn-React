import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ToTopContact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.src =
      "https://salesiq.zohopublic.in/widget?wc=siq2275ecc89ee5869288ff6fd3bc76a708ec6e11ef720a02be2168002f493deb58";
    script.defer = true;

    const zohoScript = document.createElement("script");
    zohoScript.innerHTML = `
      window.$zoho = window.$zoho || {};
      $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
    `;
    document.body.appendChild(zohoScript);
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="position-fixed"
      style={{
        bottom: "20px",
        right: "20px",
        zIndex: 1050,
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <a
        href="https://wa.me/919940053842"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "55px", height: "55px" }}
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </a>

      <a
        href="tel:+91-44-40024002"
        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "55px", height: "55px" }}
        aria-label="Call"
      >
        <FontAwesomeIcon icon={faPhone} size="lg" />
      </a>
    </div>
  );
}
