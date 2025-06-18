import headBorder from "/head-border.png";

export default function WhyInvest() {
  return (
    <section className="property-section latest-property-section spad bg-white py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-4">
          <div className="heading">
            <h4 className="text-center">
              <span className="head-border">
                <img src={headBorder} alt="head-border" />
              </span>
              INVEST IN A HOME IN YOUR HOMELAND
            </h4>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          <div className="pd-widget" id="about-vgn">
            <h4 className="head2 text-center mb-4">WHY INVEST WITH VGN</h4>
            <p className="text-center">
              As an NRI property buyer, we understand your concerns of investing
              in real estate in India. Amidst a host of other areas of worry,
              the primary one is trust. This is where VGN can definitely help
              you.
            </p>
            <p className="text-center">
              For over 4 decades, VGN has proudly stood tall as a leader in
              Chennai’s real estate sector. Since its inception in 1984, the
              group has developed and delivered over 20 million sq.ft. and
              currently has over 10 million sq.ft. of spaces under development.
            </p>
            <p className="text-center">
              We’re the reason behind the big smiles of 60,000 happy customers
              who have bought in 225+ successful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
