import Image from "@/assets/privacy.jpg"

export default function Banner() {
  return (
    <section className="breadcrumb-section position-relative">
      {/* Background Image */}
      <img
        src={Image}
        alt="Privacy"
        style={{ width: "100%", display: "block" }}
      />

      {/* Breadcrumb Text */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="breadcrumb-text"
              style={{
                position: "absolute",
                zIndex: 99,
                bottom: 20,
              }}
            >
              <h4 title="Land for sale in Chennai">Privacy Policy</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}