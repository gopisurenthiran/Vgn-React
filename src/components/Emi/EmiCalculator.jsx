import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "/head-border.png";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [term, setTerm] = useState(20);
  const [isYear, setIsYear] = useState(true);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const dividerRef = useRef(null);

  // Update height of divider
  useEffect(() => {
    if (leftRef.current && rightRef.current && dividerRef.current) {
      const leftHeight = leftRef.current.offsetHeight;
      const rightHeight = rightRef.current.offsetHeight;
      const maxHeight = Math.max(leftHeight, rightHeight);
      dividerRef.current.style.height = `${maxHeight}px`;
    }
  }, [loanAmount, interestRate, term, isYear]);

  // Update range background fill for Chrome
  useEffect(() => {
    const updateRange = (value, min, max, className) => {
      const percent = ((value - min) / (max - min)) * 100 + "%";
      document.documentElement.style.setProperty(`--${className}`, percent);
    };
    updateRange(loanAmount, 100000, 10000000, "loan");
    updateRange(interestRate, 1, 15, "interest");
    updateRange(term, 1, isYear ? 30 : 360, "term");
  }, [loanAmount, interestRate, term, isYear]);

  const calculateEMI = (P, R, N) => {
    const monthlyRate = R / 12 / 100;
    const months = isYear ? N * 12 : N;
    const emi =
      (P * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - P;
    return {
      emi: Math.round(emi),
      interest: Math.round(totalInterest),
      total: Math.round(totalPayment),
    };
  };

  const { emi, interest, total } = calculateEMI(loanAmount, interestRate, term);

  const formatAmount = (num) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <section className="py-5" style={{ background: "#fdf6ef" }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h4 className="text-uppercase fw-bold">
              <img src={headBorder} alt="head-border" className="me-2" />
              EMI CALCULATOR
            </h4>
          </div>
        </div>

        <div className="row align-items-start">
          {/* Left Form Section */}
          <div className="col-lg-5" ref={leftRef}>
            <h5 className="fw-bold text-danger mb-4">Calculate your home loan EMI.</h5>

            {/* Loan Amount */}
            <div className="mb-4">
              <div className="row align-items-center mb-1">
                <label className="col-md-5 col-form-label text-danger fw-semibold">
                  Home Loan Amount<span className="text-danger">*</span>
                </label>
                <div className="col-md-7">
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="form-control "
                  />
                </div>
              </div>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="form-range range-sm red-range loan"
              />
            </div>

            {/* Interest Rate */}
            <div className="mb-4">
              <div className="row align-items-center mb-1">
                <label className="col-md-5 col-form-label text-danger fw-semibold">
                  Interest Rate<span className="text-danger">*</span>
                </label>
                <div className="col-md-7">
                  <div className="input-group">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="form-control"
                    />
                    <span className="input-group-text bg-danger text-white">%</span>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="form-range range-sm red-range interest"
              />
            </div>

            {/* Term */}
           <div className="mb-4">
  <div className="row align-items-start align-items-md-center mb-2">
    {/* Label */}
    <label className="col-12 col-md-5 col-form-label text-danger fw-semibold mb-2 mb-md-0">
      Term ({isYear ? "Years" : "Months"})<span className="text-danger">*</span>
    </label>

    {/* Input + Buttons */}
    <div className="col-12 col-md-7">
      <div className="d-flex flex-column flex-sm-row gap-2">
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(Number(e.target.value))}
          className="form-control"
        />
        <div className="d-flex gap-2">
          <button
            type="button"
            className={`btn ${isYear ? "btn-danger" : "btn-outline-danger"}`}
            onClick={() => setIsYear(true)}
          >
            Yr
          </button>
          <button
            type="button"
            className={`btn ${!isYear ? "btn-danger" : "btn-outline-danger"}`}
            onClick={() => setIsYear(false)}
          >
            Mo
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Range Slider */}
  <input
    type="range"
    min="1"
    max={isYear ? 30 : 360}
    value={term}
    onChange={(e) => setTerm(Number(e.target.value))}
    className="form-range range-sm red-range term"
  />
</div>

          </div>

          {/* Vertical Divider */}
          <div className="col-lg-1 d-none d-lg-flex justify-content-center">
            <div ref={dividerRef} style={{ borderLeft: "1px dotted #999" }}></div>
          </div>

          {/* Right Result Section */}
          <div className="col-lg-6 mt-4 mt-lg-0" ref={rightRef}>
            <div className="mb-4">
              <h6 className="fw-bold text-muted">Loan EMI</h6>
              <h2 className="text-danger fw-bold">₹ {formatAmount(emi)}</h2>
            </div>
            {/* <hr className="border-dotted border-1 opacity-50" /> */}
            <div className="mb-4" style={{ borderBottom: "2px dashed #999" }}></div>

            <div className="mb-4">
              <h6 className="fw-bold text-muted">Total Interest Payable</h6>
              <h2 className="text-danger fw-bold">₹ {formatAmount(interest)}</h2>
            </div>
            <div className="mb-4" style={{ borderBottom: "2px dashed #999" }}></div>

            <div className="mb-3">
              <h6 className="fw-bold text-muted">
                Total Payment <br />
                (Principal + Interest)
              </h6>
              <h2 className="text-danger fw-bold">₹ {formatAmount(total)}</h2>
            </div>

            <p className="text-danger fw-semibold small">
              * Indicative figures only.
            </p>
          </div>
        </div>
      </div>

      {/* Inline Styles for Range Customization */}
      <style>{`
        .range-sm {
          height: 0.5rem;
        }

        .red-range::-webkit-slider-runnable-track {
          background: linear-gradient(
            to right,
            #b61217 0%,
            #b61217 var(--loan, 0%),
            #ccc var(--loan, 0%),
            #ccc 100%
          );
          border-radius: 4px;
          height: 0.5rem;
        }

        .interest::-webkit-slider-runnable-track {
          background: linear-gradient(
            to right,
            #b61217 0%,
            #b61217 var(--interest, 0%),
            #ccc var(--interest, 0%),
            #ccc 100%
          );
        }

        .term::-webkit-slider-runnable-track {
          background: linear-gradient(
            to right,
            #b61217 0%,
            #b61217 var(--term, 0%),
            #ccc var(--term, 0%),
            #ccc 100%
          );
        }

        .red-range::-webkit-slider-thumb {
          background-color: #b61217;
          border: none;
          border-radius: 50%;
          width: 1rem;
          height: 1rem;
          margin-top: -4px;
        }

        .red-range::-moz-range-track {
          background-color: #ccc;
          height: 0.5rem;
          border-radius: 4px;
        }

        .loan::-moz-range-progress,
        .interest::-moz-range-progress,
        .term::-moz-range-progress {
          background-color: #b61217;
          height: 0.5rem;
          border-radius: 4px;
        }

        .red-range::-moz-range-thumb {
          background-color: #b61217;
          border: none;
          border-radius: 50%;
          width: 1rem;
          height: 1rem;
        }
      `}</style>
    </section>
  );
}
