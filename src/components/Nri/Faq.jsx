import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import headBorder from "/head-border.png";

const faqData = [
  {
    question: "Who is Non-Resident Indian(NRI)?",
    answer: `An Indian citizen who stays abroad for employment/carrying on business or vocation outside India or stays abroad under circumstances indicating an intention for an uncertain duration of stay abroad is a non-resident. (Persons posted in U.N. organisations and officials deputed abroad by Central/State Governments and Public Sector undertakings on temporary assignments are also treated as non-temporary assignments are also treated as non-residents). Non-resident foreign citizens of Indian origin are treated on par with non- resident Indian citizens (NRIs).`,
  },
  {
    question: "Who is a PIO?",
    answer: (
      <>
        A person of Indian origin means an individual (not being a citizen of
        Pakistan or Bangladesh or Sri Lanka or Afghanistan or China or Iran or
        Nepal or Bhutan) who:
        <br />
        <FaAngleDoubleRight /> held an Indian Passport at any time, or <br />
        <FaAngleDoubleRight /> who or whose father or paternal grandfather was a
        citizen of India by virtue of the Constitution of India or the
        Citizenship Act, 1955
      </>
    ),
  },
  {
    question: "What is OCI?",
    answer: `The Overseas Citizenship of India(OCI) is an immigration status permitting a foreign citizen of Indian origin to live and work in the Republic of India indefinitely.`,
  },
  {
    question: "Can NRIs buy real estate properties in India?",
    answer: `Yes. NRIs can buy and sell residential and commercial properties in India.`,
  },
  {
    question:
      "Is there any restriction on the number of properties NRIs can buy in India?",
    answer: `There is no restriction on the number of residential or commercial properties an NRI can own in India. However the law restricts NRIs from purchasing any kind of agricultural land/ plantation property/ farm house in India.`,
  },
  {
    question: "Can NRIs acquire commercial properties in India?",
    answer: `Yes, under the general permission granted by the Reserve Bank, property other than agricultural land/farm house/plantation property can be acquired by NRIs provided the purchase consideration is met either out of inward remittances in foreign exchange through normal banking channels or out of funds from the purchaser's NRE/FCNR accounts maintained with banks in India and a declaration is submitted to the Central Office of Reserve Bank in form IPI 7 within a period of 90 days from the date of purchase of the property/final payment of purchase consideration.`,
  },
  {
    question:
      "Can NRIs buy properties in India without the Reserve Bank’s permission?",
    answer: `Reserve Bank has granted general permission to foreign citizens of Indian origin, whether resident in India or abroad, to purchase immovable property in India for their bona fide residential purpose. They are, therefore, not required to obtain permission of Reserve Bank.`,
  },
  {
    question:
      "Are there any formalities required to be completed by NRIs/PIOs for purchasing residential immovable property in India under the general permission?",
    answer: `They are required to file a declaration in form IPI 7 with the Central Office of Reserve Bank at Mumbai within a period of 90 days from the date of purchase of immovable property or final payment of purchase consideration along with a certified copy of the document evidencing the transaction and bank certificate regarding the consideration paid.`,
  },
  {
    question: "What are the documents required for buying a property in India?",
    answer: (
      <>
        The following is the list (non-exhaustive) of documents required for
        NRIs:
        <br />
        <FaAngleDoubleRight /> PAN card
        <br />
        <FaAngleDoubleRight /> OCI / PIO card
        <br />
        <FaAngleDoubleRight /> Passport
        <br />
        <FaAngleDoubleRight /> Passport size photographs
        <br />
        <FaAngleDoubleRight /> Address proof
      </>
    ),
  },
  {
    question: "What are the kind of properties an NRI/PIO cannot buy?",
    answer: `An NRI/PIO cannot usually buy agricultural land/plantation property/farm houses in India. Proposals to buy such a land have to be specifically approved by RBI, in consultation with Government of India. The only way they can acquire an agricultural land is by inheritance.`,
  },
  {
    question:
      "Can NRIs acquire or dispose residential property by way of gift?",
    answer: `Yes, the Reserve Bank has granted general permission to NRIs to acquire or dispose of NRI India Properties by way of gift from or to a relative who may be an Indian citizen or a person of Indian origin (PIO) whether resident in India or not.`,
  },
  {
    question:
      "Can NRIs obtain loans for acquisition of a house/flat for residential purpose from financial institutions providing housing finance?",
    answer: `The Reserve Bank has granted some general permission to certain financial institutions providing housing finance e.g. HDFC, LIC Housing Finance Ltd., etc, and authorized dealers to grant housing loans to NRI nationals for acquisition of a NRI house/flat for self-occupation subject to certain conditions. Criteria regarding the purpose of the loan, margin money and the quantum of loan will be at par with those applicable to resident Indians. Repayment of the loan should be made within a period not exceeding 15 years, out of inward remittance through banking channels or out of funds held in the investors' NRE/FCNR/NRO accounts.`,
  },
  {
    question: "What is the loan sanction process and its documentation?",
    answer: (
      <>
        The documentation required to be submitted by the NRIs are different
        from the Resident Indians as they are required to submit additional
        documents, like copy of the passport and a copy of the works contract,
        etc. and of course NRIs have to follow certain eligibility criteria in
        order to get Home Loans in India. Another vital document required while
        processing an NRI home loan is the power of attorney (POA). The POA is
        important because, since the borrower is not based in India; the Home
        Finance Company would need a 'representative' 'in lieu of' the NRI to
        deal with and if needed. Although not obligatory, the POA is usually
        drawn on the NRI's parents/wife/children/ close relatives or friends.
        <br />
        The documents needed for obtaining NRI home loans are Bank specific.
        General list of documents are as mentioned below:
        <br />
        <FaAngleDoubleRight />
        Passport and Visa
        <br />
        <FaAngleDoubleRight /> A copy of the appointment letter and contract
        from the company employing the applicant.
        <br />
        <FaAngleDoubleRight /> The labour card/identity card (translated in
        English and countersigned by the consulate) if the person is employed in
        the Middle East Salary certificate (in English) specifying name, date of
        joining, designation and salary details.
        <br />
        <FaAngleDoubleRight /> Bank Statements for the last six months
        <br />
        <br />
        List of Classified documents for Salaried and Self Employed NRI
        Applicants. Banks may have specific requirements apart from the below
        listed documents.
        <br />
        <b>Salaried NRI applicants</b>
        <br />
        <FaAngleDoubleRight /> Copy of valid passport showing VISA stamps
        <br />
        <FaAngleDoubleRight /> Copy of valid visa / work permit / equivalent
        document supporting the NRI status of the proposed account holder
        <br />
        <FaAngleDoubleRight /> Overseas Bank A/C for the last 3 months showing
        salary credits
        <br />
        <FaAngleDoubleRight /> Latest contract copy evidencing Salary / Salary
        Certificate / Wage Slips
        <br />
        <br />
        <b>Self-Employed NRI Applicants</b>
        <br />
        <FaAngleDoubleRight />
        Passport copy with valid visa stamp
        <br />
        <FaAngleDoubleRight /> Brief profile of the applicant and business/
        Trade license or equivalent document
        <br />
        <FaAngleDoubleRight />6 months overseas bank account statement and NRE/
        NRO account
        <br />
        <FaAngleDoubleRight />
        Computation of income, P&L account and B/Sheet for last 3 years
        certified by the C.A. / CPA or any other relevant authority as the case
        may be (or equivalent company accounts)
        <br />
      </>
    ),
  },
  {
    question:
      "What is the Tax treatment for income generated from property selling or renting for NRI/PIO/OCI?",
    answer: `The mere acquisition of property does not attract income tax. However, any income accruing from the ownership of it, in the form of rent (if it is let out)/annual value of the house (if is not let out and it is not the only residential property owned by that person in India) and/or capital gains (short term or long term) arising on the sale of this house or part thereof is taxable in the hands of the owner.`,
  },
  {
    question: "Does Capital Gains Tax (CGT) apply to NRI / PIO / OCI?",
    answer: `Yes. Long-term and short-term capital gains are taxable in the hands of non-residents.`,
  },
  {
    question:
      "How does Double Taxation Avoidance Agreement work in case of NRIs?",
    answer: `In case of sale of an immovable property, the Double Tax Avoidance Agreement (DTAA) with most countries state that capital gains will be taxed in the country where the immovable property is situated. Hence, if an NRI owns immovable property in India, then he/she will be subject to pay tax in India on the capital gains which arise on the sale of the property. Similarly, letting of immovable property in India would be taxed in India under most tax treaties.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Only show first 5 or all
  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section
      className="property-section latest-property-section spad"
      style={{ background: "#fff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="heading">
              <h4 className="text-center">
                <span className="head-border">
                  <img src={headBorder} alt="head-border" />
                </span>
                FREQUENTLY ASKED QUESTIONS
              </h4>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="pd-widget" id="about-vgn">
              <div className="wrapper">
                {visibleFaqs.map((item, index) => (
                  <div className="container-txt" key={index}>
                    <div
                      className={`question ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleAnswer(index)}
                    >
                      {item.question}
                    </div>
                    {activeIndex === index && (
                      <div className="answercont">
                        <div className="answer">{item.answer}</div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Show More / Show Less Button */}
                {faqData.length > 5 && (
                  <div className="text-center mt-4">
                    <button
                      className=" site-btn5"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
