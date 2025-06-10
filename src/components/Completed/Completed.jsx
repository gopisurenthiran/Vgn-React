import React from "react";
import { FaObjectGroup, FaBuilding, FaCalendar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";


const completedProjects = [
  {
    image: "/completed70.jpg",
    name: "VGN Mahalakshmi nagar Phase XIV",
    size: "1105 Sq.ft",
    type: "Plots",
    location: "Velappanchavadi, Chennai.",
    year: "2024",
  },
  {
    image: "/completed68.jpg",
    name: "VGN CH40",
    size: "1592 Sq.Ft.",
    type: "Plots",
    location: "Anna Nagar, Chennai.",
    year: "2024",
  },
  {
    image: "/completed69.jpg",
    name: "VGN Windsor Park Phase - VII",
    size: "2176 Sq.Ft.",
    type: "Flats",
    location: "Poonamallee, Chennai.",
    year: "2024",
  },
   {
    image: "/completed67.jpg",
    name: "VGN Serene",
    size: "1216, 1958 Sq feet",
    type: "Flats",
    location: "Kundrathur, Chennai.",
    year: "2024",
  },
  {
    image: "/completed66.jpg",
    name: "VGN Brillianze Phase II",
    size: "1354 Sq feet",
    type: "Flats",
    location: "Ponmar, Chennai.",
    year: "2024",
  },
  {
    image: "/completed65.jpg",
    name: "VGN Exotica",
    size: "12 Premium Signature Homes",
    type: "Flats",
    location: "Velappanchavadi, Chennai.",
    year: "2024",
  },
  {
    image: "/completed65.jpg",
    name: "VGN Exotica",
    size: "12 Premium Signature Homes",
    type: "Flats",
    location: "Velappanchavadi, Chennai.",
    year: "2024",
  },
  {
    image: "/completed64.jpg",
    name: "VGN Santhosh Nagar",
    size: "1030 Sq.Ft.",
    type: "Plots",
    location: "Aranvoyal (Thirumazhisai).",
    year: "2024",
  },
  {
    image: "/completed63.jpg",
    name: "VGN Southern Fortune",
    size: "2747 Sq.Ft.",
    type: "Plots",
    location: "Potheri, Chennai.",
    year: "2024",
  },
   {
    image: "/completed62.jpg",
    name: "VGN Mugavari",
    size: "1404, 3490 Sq.Ft.",
    type: "Plots",
    location: "Tambaram, Chennai.",
    year: "2024",
  },
  {
    image: "/completed54.jpg",
    name: "VGN Sparkle",
    size: "914 Sq.Ft.",
    type: "Plots",
    location: "Avadi, Chennai.",
    year: "2023",
  },
  {
    image: "/completed61.jpg",
    name: "VGN Southern Chirpy",
    size: "1375 Sq.Ft.",
    type: "Plots",
    location: "Potheri, Chennai.",
    year: "2023",
  },
  {
    name: "VGN Brillianze",
    image: "/completed59.jpg",
    size: "646 - 1921 Sq.Ft.",
    type: "Plots",
    location: "Ponmar, Chennai",
    year: "2023",
  },
  {
    name: "VGN Bloom",
    image: "/completed60.jpg",
    size: "819 - 2120 Sq.Ft.",
    type: "Plots",
    location: "Avadi, Chennai",
    year: "2023",
  },
  {
    name: "VGN Hive Phase II",
    image: "/completed58.jpg",
    size: "602 - 1538 Sq.Ft.",
    type: "Plots",
    location: "Ambattur, Chennai",
    year: "2023",
  },
  {
    name: "VGN CH40 Phase - II",
    image: "/completed57.jpg",
    size: "635 - 2571 Sq.Ft.",
    type: "Plots",
    location: "Anna nagar, Chennai",
    year: "2022",
  },
  {
    name: "VGN SAMUDRA",
    image: "/completed56.jpg",
    size: "908 - 1911 Sq.Ft.",
    type: "Plots",
    location: "Chromepet, Chennai",
    year: "2022",
  },
  {
    name: "VGN DIVINE",
    image: "/completed55.jpg",
    size: "2 BHK Apartments",
    type: "Flats",
    location: "Velappanchavadi, Chennai",
    year: "2022",
  },
  {
    image: "/completed52.jpg",
    name: "VGN SPARKLE - PHASE II & III",
    size: "733 - 1747 Sq.Ft",
    type: "Plots",
    location: "Sekkadu, Avadi",
    year: 2021,
  },
  {
    image: "/completed46.jpg",
    name: "VGN HIVE",
    size: "646 - 1589 Sq.Ft",
    type: "Plots",
    location: "Ambattur",
    year: 2021,
  },
  {
    image: "/completed47.jpg",
    name: "VGN VARNABHOOMI PHASE - I",
    size: "610 - 1736 Sq.Ft",
    type: "Plots",
    location: "Pudupakkam, OMR",
    year: 2020,
  },
  {
    image: "/completed45.jpg",
    name: "VGN HIGHNESS",
    size: "607 - 2193 Sq.Ft",
    type: "Plots",
    location: "Srinivasapuram, Iyyappanthangal",
    year: 2020,
  },
  {
    image: "/completed44.jpg",
    name: "VGN FLORENCE",
    size: "2BHK",
    type: "Flats",
    location: "VGN Mahalakshmi Nagar, Thiruverkadu",
    year: 2020,
  },
  {
    image: "/completed43.jpg",
    name: "VGN EXPANZA",
    size: "2BHK",
    type: "Flats",
    location: "Melpakkam, Avadi",
    year: 2020,
  },
   {
    image: "/completed42.jpg",
    name: "VGN PEARL BLOSSOM",
    size: "2BHK, 3BHK",
    type: "Flats",
    location: "Villinjampakkam, Avadi",
    year: "2020",
  },
  {
    image: "/completed50.jpg",
    name: "VGN WINDSOR PARK PHASE - VI",
    size: "751 - 1200 Sq.Ft",
    type: "Plots",
    location: "Melpakkam, Avadi",
    year: "2019",
  },
  {
    image: "/completed40.jpg",
    name: "VGN SANDSTONE",
    size: "2BHK",
    type: "Flats",
    location: "VGN Mahalakshmi Nagar, Thiruverkadu",
    year: "2019",
  },
  {
    image: "/completed49.jpg",
    name: "VGN WINDSOR PARK PHASE - V",
    size: "606 - 2525 Sq.Ft",
    type: "Plots",
    location: "Melpakkam, Avadi",
    year: "2018",
  },
  {
    image: "/completed38.jpg",
    name: "VGN ORVILLE",
    size: "634 - 2181 Sq.Ft",
    type: "Plots",
    location: "Kolapakkam",
    year: "2018",
  },
  {
    image: "/completed37.jpg",
    name: "VGN DERBYSHIRE",
    size: "2BHK",
    type: "Flats",
    location: "Villinjampakkam, Avadi",
    year: "2018",
  },
   {
    image: "/completed36.jpg",
    name: "VGN SMART VILLA",
    size: "2BHK",
    type: "Flats",
    location: "Mogappair West",
    year: "2018",
  },
  {
    image: "/completed35.jpg",
    name: "VGN BROOK VILLE",
    size: "2BHK",
    type: "Flats",
    location: "Villinjampakkam, Avadi",
    year: "2018",
  },
  {
    image: "/completed34.jpg",
    name: "VGN EDINBURGH",
    size: "1BHK, 2BHK",
    type: "Flats",
    location: "Villinjampakkam, Avadi",
    year: "2018",
  },
  {
    image: "/completed53.jpg",
    name: "VGN WINDSOR PARK PHASE - IV",
    size: "607 - 2335",
    type: "Plots",
    location: "Melpakkam, Avadi",
    year: "2017",
  },
  {
    image: "/completed33.jpg",
    name: "VGN SERENITY GROVE",
    size: "624 - 3341",
    type: "Plots",
    location: "Ayappakkam",
    year: "2017",
  },
  {
    image: "/completed32.jpg",
    name: "VGN TULIP",
    size: "1BHK",
    type: "Flats",
    location: "Kattankulathur",
    year: "2017",
  },
  {
    image: "/completed31.jpg",
    name: "VGN HARMONY",
    size: "2BHK, 3BHK",
    type: "Flats",
    location: "Mogappair West",
    year: 2017,
  },
  {
    image: "/completed30.jpg",
    name: "VGN MONTE CARLO",
    size: "614 - 5440 Sq.Ft",
    type: "Plots",
    location: "Nolambur, Mogappair west",
    year: 2016,
  },
  {
    image: "/completed29.jpg",
    name: "VGN ROYAL COURT",
    size: "602 - 893 Sq.Ft",
    type: "Plots",
    location: "Mugalivakkam",
    year: 2016,
  },
  {
    image: "/completed28.jpg",
    name: "VGN ROYALE",
    size: "2BHK",
    type: "Flats",
    location: "Villinjampakkam, Avadi",
    year: 2016,
  },
  {
    image: "/completed51.jpg",
    name: "VGN WINDSOR PARK PHASE - I, II & III",
    size: "600 - 3442 Sq.Ft",
    type: "Plots",
    location: "Melpakkam, Avadi",
    year: 2015,
  },
  {
    image: "/completed27.jpg",
    name: "VGN GRAND HISTORIA",
    size: "1043 - 1890 Sq.Ft",
    type: "Plots",
    location: "Thiruneermalai",
    year: 2015,
  },
   {
    name: "VGN MAHALAKSHMI NAGAR",
    image: "/completed26.jpg",
    size: "615 - 2362",
    type: "Plots",
    location: "Ayyampakkam, Thiruverkadu",
    year: 2015,
  },
  {
    name: "VGN SHANTHI NAGAR",
    image: "/completed25.jpg",
    size: "985 - 1644",
    type: "Plots",
    location: "Ambathur",
    year: 2015,
  },
  {
    name: "VGN SOUTHERN COUNTY",
    image: "/completed24.jpg",
    size: "1200 - 2733",
    type: "Plots",
    location: "Kavanur, Kattankulathur",
    year: 2015,
  },
  {
    name: "VGN SOUTHERN COUNTY MAIN",
    image: "/completed23.jpg",
    size: "1261 - 3728",
    type: "Plots",
    location: "Kattankullathur",
    year: 2015,
  },
  {
    name: "VGN SPRING FIELD",
    image: "/completed22.jpg",
    size: "630 - 3827",
    type: "Plots",
    location: "Villijambakkam, Avadi",
    year: 2015,
  },
  {
    name: "VGN CEE PAA",
    image: "/completed21.jpg",
    size: "1928 - 2725",
    type: "Plots",
    location: "Kavanur",
    year: 2014,
  },
  {
    image: "/completed20.jpg",
    name: "VGN HOLLY HOCK",
    size: "2BHK, 3BHK",
    type: "Flats",
    location: "Paleripattu, Avadi",
    year: 2014,
  },
  {
    image: "/completed19.jpg",
    name: "VGN DYNASTY",
    size: "2BHK",
    type: "Flats",
    location: "Melpakkam",
    year: 2014,
  },
  {
    image: "/completed18.jpg",
    name: "VGN SOUTHERN CORDIAL",
    size: "3BHK",
    type: "Flats",
    location: "Kattankulathur",
    year: 2013,
  },
  {
    image: "/completed17.jpg",
    name: "VGN AMITY",
    size: "2BHK, 2.5BHK, 3BHK",
    type: "Flats",
    location: "Paruthipattu, Avadi",
    year: 2013,
  },
  {
    image: "/completed16.jpg",
    name: "VGN AMITY ANNEXE",
    size: "2BHK",
    type: "Flats",
    location: "Melpakkam, Avadi",
    year: 2013,
  },
  {
    image: "/completed15.jpg",
    name: "VGN ASTER",
    size: "2BHK",
    type: "Flats",
    location: "Nolambur",
    year: 2013,
  },
  {
    image: "/completed14.jpg",
    name: "VGN TRANQUIL",
    size: "1BHK, 2BHK, 2.5BHK",
    type: "Flats",
    location: "Kattankulathur",
    year: 2013,
  },
  {
    image: "/completed13.jpg",
    name: "VGN BLOOMINGDALE",
    size: "600 - 2953",
    type: "Plots",
    location: "Kongadu village, Sp kovil",
    year: 2013,
  },
  {
    image: "/completed12.jpg",
    name: "VGN SUMMERDALE",
    size: "626 - 3094",
    type: "Plots",
    location: "Kovur",
    year: 2013,
  },
  {
    image: "/completed11.jpg",
    name: "VGN AVIV SQUARE",
    size: "1BHK, 2BHK, 3BHK",
    type: "Flats",
    location: "Paleripattu, Avadi",
    year: 2012,
  },
  {
    image: "/completed10.jpg",
    name: "VGN LYTTON PARK",
    size: "1BHK, 2BHK",
    type: "Flats",
    location: "Thirutheri, Sp kovil",
    year: 2012,
  },
  {
    image: "/completed9.jpg",
    name: "VGN ROYAL OAK",
    size: "2BHK, 3BHK",
    type: "Flats",
    location: "Thirutheri, Sp kovil",
    year: 2012,
  },
   {
    name: "VGN SOUTHERN AVENUE",
    image: "/completed8.jpg",
    size: "1BHK, 1.5BHK, 2BHK, 2.5BHK, 3BHK",
    type: "Flats",
    location: "Kattankulathur",
    year: "2012",
  },
  {
    name: "VGN ERNEST PHASE-I",
    image: "/completed7.jpg",
    size: "1BHK",
    type: "Flats",
    location: "Melpakkam, Avadi",
    year: "2011",
  },
  {
    name: "VGN MISTY WOOD",
    image: "/completed6.jpg",
    size: "2BHK, 3BHK",
    type: "Flats",
    location: "Thirutheri, Sp kovil",
    year: "2011",
  },
  {
    name: "VGN IMPERIA PHASE - I",
    image: "/completed5.jpg",
    size: "1BHK, 2BHK, 3BHK",
    type: "Flats",
    location: "VGN Mahalakshmi Nagar, Thiruverkadu",
    year: "2011",
  },
  {
    name: "VGN SARANG AVENUE MAIN",
    image: "/completed4.jpg",
    size: "638 - 3767",
    type: "Plots",
    location: "Venbakkam, Sp kovil",
    year: "2011",
  },
  {
    name: "VGN SOUTHERN GARDEN",
    image: "/completed3.jpg",
    size: "993 - 3257",
    type: "Plots",
    location: "Kowl Bazzar, Pozhichalur",
    year: "2011",
  },
  {
    name: "VGN NORTHWOOD PARK",
    image: "/completed2.jpg",
    size: "1018 - 3120",
    type: "Plots",
    location: "Thirutheri, Sp kovil",
    year: "2008",
  },
  {
    name: "VGN GOKULAM GARDEN",
    image: "/completed39.jpg",
    size: "4169",
    type: "Plots",
    location: "Paruthipattu, Avadi",
    year: "2004",
  },
  {
    name: "VGN AVENUE",
    image: "/completed1.jpg",
    size: "656 - 3045",
    type: "Plots",
    location: "Mogappair West",
    year: "2003",
  },
];

export default function CompletedProjects() {
  return (
    <section className="property-section spad aos-animate bg" data-aos="zoom-in">
      <div className="container-fluid">
        <div className="row">
          {completedProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="as-item2" style={{float: "left"}}>
                <div className="property-item" style={{ marginbottom: "0px;" }}>
                  <div className="content">
                    <div className="grid">
                      <figure className="effect-goliath">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="img-fluid"
                        />
                        <div className="completed">
                          <h2 className="project-name">{project.name}</h2>
                        </div>
                        <figcaption>
                          <div className="complete-details w-100 text-end">
                            <div className="row">
                              <div className="col-lg-9 colleft col-md-6  text-start">
                                <span className="sq-txt">
                                  <FaObjectGroup className="me-1" />
                                  {project.size}
                                </span>
                              </div>
                              <div className="col-lg-3 colright col-md-6  text-end">
                                <span className="plot-txt">
                                  <FaBuilding className="me-1" />
                                  {project.type}
                                </span>
                              </div>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="pi-text pi-text1">
                    <ul className="list-unstyled">
                      <div className="row px-3">
                        <div className="col-lg-9 col-md-12">
                          <li>
                           <span> <HiOutlineLocationMarker className="me-1" /></span> 
                            {project.location}
                          </li>
                        </div>
                        <div className="col-lg-3 col-md-12 text-right">
                          <li>
                          <span> <FaCalendar className="me-1" /></span>  
                            {project.year}
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
