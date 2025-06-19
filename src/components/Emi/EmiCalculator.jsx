import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "/head-border.png";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [term, setTerm] = useState(20);
  const [isYear, setIsYear] = useState(true);

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
    <section className="property-section latest-property-section spad bg py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="heading col-12 ">
            <h4 className="text-center">
              <span className="head-border">
                <img src={headBorder} alt="head-border" />
              </span>
              EMI Calculator
            </h4>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col-lg-2"></div>
          <div className="col-lg-4 pd-widget">
            <h4
              className="head2 mb-4"
              style={{ textTransform: "none", color: "#da2c25" }}
            >
              Calculate your home loan EMI.
            </h4>

            {/* Loan Amount */}
            <div className="form-group ranger1 mb-4">
              <div className="col-lg-41">
                <label className="range1-lable">
                  Home Loan Amount<span className="red">*</span>
                </label>
              </div>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="form-control"
              />
              <input
                type="range"
                min="100000"
                max="10000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="form-range range-track mt-2"
              />
            </div>

            {/* Interest Rate */}
            <div className="form-group mb-4">
              <label className="text-danger fw-semibold">Interest Rate*</label>
              <div className="input-group">
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="form-control"
                />
                <span className="input-group-text bg-danger text-white">%</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="form-range range-track mt-2"
              />
            </div>

            {/* Term */}
            <div className="form-group mb-4">
              <label className="text-danger fw-semibold">
                Term ( {isYear ? "Years" : "Months"} )*
              </label>
              <div className="input-group">
                <input
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="form-control"
                />
                <button
                  type="button"
                  className={`btn ${
                    isYear ? "btn-danger" : "btn-outline-danger"
                  }`}
                  onClick={() => setIsYear(true)}
                >
                  Yr
                </button>
                <button
                  type="button"
                  className={`btn ms-2 ${
                    !isYear ? "btn-danger" : "btn-outline-danger"
                  }`}
                  onClick={() => setIsYear(false)}
                >
                  Mo
                </button>
              </div>
              <input
                type="range"
                min="1"
                max={isYear ? 30 : 360}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="form-range range-track mt-2"
              />
            </div>
          </div>

          <div className="col-lg-1 border-left2"></div>

          <div className="col-lg-4">
            <div className="pd-widget" id="about-vgn">
              <br />
              <h4 className="head3">Loan EMI</h4>
              <h2 className="amount">
                <span>₹</span> <span id="emivalue">{formatAmount(emi)}</span>
              </h2>
            </div>

            <div className="border-bottom2"></div>

            <div className="pd-widget" id="about-vgn">
              <h4 className="head3">Total Interest Payable</h4>
              <h2 className="amount">
                <span>₹</span>{" "}
                <span id="interestvalue">{formatAmount(interest)}</span>
              </h2>
            </div>

            <div className="border-bottom2"></div>

            <div className="pd-widget" id="about-vgn">
              <h4 className="head3">
                Total Payment
                <br />
                (Principal + Interest)
              </h4>
              <h2 className="amount">
                <span>₹</span>{" "}
                <span id="totalvalue">{formatAmount(total)}</span>
              </h2>

              <h4 className="head3">* Indicative figures only. </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
