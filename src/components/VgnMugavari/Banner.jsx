import Desktop from "@/assets/vgn-mugavari/hero-2.jpg";
import Mobile from "@/assets/vgn-mugavari/hero-2-1.png";

export default function Banner() {
  return (
    <section className="hero-section">
      <div className="">
        <div className="hs-slider owl-carousel">
          <div className="hs-item set-bg">
            {/* Desktop Image */}
            <div className="desktop">
              <img
                src={Desktop}
                style={{ width: "100%", position: "relative" }}
                className="desktop"
                alt="Villa plots for sale at Tambaram near railway station"
                title="Villa plots for sale at Tambaram near railway station"
              />
            </div>

            {/* Mobile Banner */}
            <div className="mobile">
              <div className="banner main-banner">
                <div className="row">
                  <div className="container">
                    <div className="" style={{ width: "100%" }}>
                      <img
                        src={Mobile}
                        style={{ width: "100%", position: "relative" }}
                        className="mobile"
                        alt="Villa plots for sale at Tambaram near railway station"
                        title="Villa plots for sale at Tambaram near railway station"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
