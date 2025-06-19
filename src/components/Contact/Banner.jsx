
import addressImage from "@/assets/address.jpg"; // Update path based on your project structure

export default function AddressSection() {
  return (
    <section className="breadcrumb-section position-relative">
      <img src={addressImage} alt="Address" style={{ width: "100%" }} />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="breadcrumb-text position-absolute"
              style={{ zIndex: 99, bottom: 20 }}
            >
              <h4>Address</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
