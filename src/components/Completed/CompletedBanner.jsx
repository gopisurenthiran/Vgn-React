

export default function CompletedBanner() {
  return (
    <section className="breadcrumb-section position-relative">
      {/* Background Image */}
      <img
        src="/completed-back.jpg"
        alt="Ongoing Projects"
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
              <h4 title="Land for sale in Chennai">Completed Projects</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}