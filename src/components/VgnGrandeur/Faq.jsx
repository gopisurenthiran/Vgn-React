import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import headBorder from "/head-border.png";

const faqData = [
  {
    question: "Where is VGN GRANDEUR  Located?",
    answer: `Iyyapanthangal, Sivan Koil Street, Prabu Nagar towards pattur, 10 mins from Ramachandra Hospital and 5mins from Iyyapanthangal Bus Depot.`,
  },
  {
    question: "How Many Acre in VGN GRANDEUR ? ",
    answer: (
      <>
        19.68 acres in Phase – 1,
        <br />
        8.9 acres in Phase – 2.
      </>
    ),
  },
  {
    question: "How many Plots and size of plots ?",
    answer: `Total plots including phase 1 and phase 2 is 560, Min size starts from 497sqft  and maximum upto 3000sqft.`,
  },
  {
    question: "What are the amenities provided ?",
    answer: `We have 4 large parks with kids play area, open air theatre, Hanuman temple, club house with gym , multipurpose hall, Project is Sprawled with Storm Water drain, with Metro  Water and Sewage Provisions, Transformer with Pillar box , attached with the underground EB provision  to each plot , separate Ethernet cable provision and PNG Provision.`,
  },
  {
    question: "Is it Gated Community ?",
    answer: `Yes it is a gated community , we have provided compound walls for the entire Layout, `,
  },
  {
    question: "How about black top roads and electricity ?",
    answer: `The entire layout has been laid by Bitumen Roads with Highway standards, 
under ground EB is provided and also we have provided Under ground sewage, under ground metro, under ground cables and under ground PNG.
`,
  },
  {
    question: "Is the area Water Logging ?",
    answer: `We have raised the internal roads and also given rain water drench inside our layout, Hence there will not be water logging in the layout.`,
  },
  {
    question: "What is the Price ?",
    answer: `Price starts from 6999/- min and goes upto 7999/- plus other charges as applicable.`,
  },
  {
    question: "Why should we invest in VGN GRANDEUR ?",
    answer: (
      <>
        Premium Land in a prime Location with essential and transit connectivity
        available in close Proximity , very near to upcoming Iyyapanthangal
        Metro, In the Midst of Multiple Major areas Including porur,
        Valasaravakkam, Gerugambakkam, Madhanandhapuram. Maduravoyal,
        Poonamalee, Noombal, Kaatupakkam, Mugalivakkam, Moulivakkam.
      </>
    ),
  },
  {
    question: "What is the distance from the CMBT/ Airport?",
    answer: `Koyembedu is 20 mins and Chennai Airport is just 20 min.`,
  },
  {
    question:
      "Can NRIs acquire or dispose residential property by way of gift?",
    answer: `Yes, the Reserve Bank has granted general permission to NRIs to acquire or dispose of NRI India Properties by way of gift from or to a relative who may be an Indian citizen or a person of Indian origin (PIO) whether resident in India or not.`,
  },
  {
    question: "What are the schools near to VGN GRANDEUR ?",
    answer: (
      <>
        <FaAngleDoubleRight /> Sri Krish International School <br />
        <FaAngleDoubleRight /> Amrita International School <br />
        <FaAngleDoubleRight /> Little Flower School <br />
        <FaAngleDoubleRight /> Omega International School <br />
        <FaAngleDoubleRight /> Vellammal School <br />
        <FaAngleDoubleRight /> Maharishi School <br />
        <FaAngleDoubleRight /> Masi Matriculation School <br />
        <FaAngleDoubleRight /> GOLD CIRCLE INTERNATIONAL PLAY SCHOOL <br />
        <FaAngleDoubleRight /> Lilliput Kids Care And Tuition Center <br />
        <FaAngleDoubleRight /> Kalakshetra Matriculation School <br />
        <FaAngleDoubleRight /> Happy Kids <br />
        <FaAngleDoubleRight /> Aerokids Kattupakkam <br />
        <FaAngleDoubleRight /> APPLE KIDS INTERNATIONAL PRE-SCHOOL <br />
        <FaAngleDoubleRight /> AVL Matriculation Higher Secondary School <br />
        <FaAngleDoubleRight /> Little Millennium <br />
        <FaAngleDoubleRight /> Orange Funskool <br />
        <FaAngleDoubleRight /> Sri Ramachandra College of Management <br />
        <FaAngleDoubleRight /> Junior Legends Play School <br />
        <FaAngleDoubleRight /> St Mary’s Matriculation Higher Secondary School{" "}
        <br />
        <FaAngleDoubleRight /> New Crescent English Medium School <br />
        <FaAngleDoubleRight /> Saint Mary’s High School <br />
        <FaAngleDoubleRight /> Grace Matriculation Higher Secondary School{" "}
        <br />
        <FaAngleDoubleRight /> The National International Matriculation Higher
        Secondary School <br />
        <FaAngleDoubleRight /> Swamys School <br />
        <FaAngleDoubleRight /> St. Paul’s Matriculation Higher Secondary School{" "}
        <br />
        <FaAngleDoubleRight /> Saint Anns MHSS <br />
        <FaAngleDoubleRight /> Navabharath Matriculation School <br />
        <FaAngleDoubleRight /> The Blue Bells <br />
        <FaAngleDoubleRight /> Shree Sathya Play School <br />
        <FaAngleDoubleRight /> Holy Christs Higher Secondary School <br />
        <FaAngleDoubleRight /> Pioneer School <br />
        <FaAngleDoubleRight /> Bon Secours Convent Generalate <br />
        <FaAngleDoubleRight /> Swamys Brindavan Kindergarden School <br />
        <FaAngleDoubleRight /> Happy Kids Play School <br />
        <FaAngleDoubleRight /> St Johns Matriculation Higher Secondary School{" "}
        <br />
        <FaAngleDoubleRight /> Avichi Higher Secondary School <br />
      </>
    ),
  },
  {
    question: "Any Hospitals nearby VGN GRANDEUR ?",
    answer: (
      <>
        <FaAngleDoubleRight /> Ramachandra Hospital <br />
      <FaAngleDoubleRight /> Saveetha Dental Hospital <br />
      <FaAngleDoubleRight /> Aravind Eye Hospital <br />
      <FaAngleDoubleRight /> Madha Hospital <br />
      <FaAngleDoubleRight /> Kedar Hospital <br />
      <FaAngleDoubleRight /> Muthukumaran Hospital <br />
      <FaAngleDoubleRight /> Miot Hospital <br />
      <FaAngleDoubleRight /> BE WELL Hospital <br />
      <FaAngleDoubleRight /> Panimalar Hospital <br />
      <FaAngleDoubleRight /> Meenakshi Ammal Hospital <br />
      <FaAngleDoubleRight /> Appollo Hospital <br />
      <FaAngleDoubleRight /> Dr. Mohan's Diabetes Specialities Centre <br />
      <FaAngleDoubleRight /> Dr Kanniraj's Magna Ortho Clinic <br />
      <FaAngleDoubleRight /> Mahalakshmi Multispeciality Hospital <br />
      <FaAngleDoubleRight /> SN Hospital <br />
      <FaAngleDoubleRight /> Star Laksmi Hospital <br />
      <FaAngleDoubleRight /> Lakshmi Hospital 24 Hrs <br />
      <FaAngleDoubleRight /> DR Multispeciality Clinic <br />
      <FaAngleDoubleRight /> Sugam Surgical Hospital <br />
      <FaAngleDoubleRight /> 24 Hours Hospital <br />
      <FaAngleDoubleRight /> DR Florrey Hospital <br />
      <FaAngleDoubleRight /> Jayam Hospital <br />
      <FaAngleDoubleRight /> Natchathira Hospitals <br />
      <FaAngleDoubleRight /> Venkateshwara Hospital <br />
      </>
    ),
  },
  {
    question:
      "Do you arrange for the site Visit?",
    answer: `YES, also vehicle support will provide.`,
  },
  {
    question: "	Are the titles of the land clear?",
    answer: `Yes ,  the title clear also major banks given APF(Approved Project Financial)`,
  },
  {
    question:
      "	Can we verify the original documents?",
    answer: `Yes, after paying booking advance customers having chance to verify the original docs (Photo copy).`,
  },
  {
    question:"Is there any differential  pricing based on the plots ?",
    answer: (
        <>
        Yes , For Corner Rs.200/-  <br/>
        East & North (Rs.100/-  Road width Rs 100.
        </>
    ),
  },
   {
    question:"Will I get assistance from you for processing the housing loan? ",
    answer: 'Yes , we organize the home loan   for plot and we provide (75% to 90 % )from the Agreement  value ',
  },
   {
    question:"Can I make 100% down payment for Plots and if so will there be any discounts provided? ",
    answer: 'Yes. We need to discuss in person ',
  },
   {
    question:"What happen if I cancel my booking? ",
    answer: '1%-is charges for cancelation. ',
  },
   {
    question:"What is a initial payment for booking a plot? ",
    answer: '5% Booking  advance .',
  },
   {
    question:"When can I do the registration ?",
    answer: 'Within 30 days from the date of RERA. ',
  },
   {
    question:"What is the different road width we provide inside the community? ",
    answer: 'From 7.2meters , 9meters, 10Metres, roads are available inside of Site',
  },
   {
    question:"What should a buyer keep in mind while purchasing a residential plot?",
    answer: 'He has to check the legal documents  ,the location , Appreciation value , Schools near by ,Hospitals near by ,Supermarket market, Bus stop, Railway Station.',
  },
   {
    question:"What documents do we require during the time of booking? ",
    answer: 'Pass port size photo and pan card & Aadhar Card copy and blocking cheque',
  },
   {
    question:"When can we do construction in the plots ?",
    answer: 'Can start Immediately , since we have all the facilities available.',
  },
  {
    question:"Where is the  Registration office for VGN GRANDEUR ? ",
    answer:'The Registration office is in Saidapet.',
  }
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
