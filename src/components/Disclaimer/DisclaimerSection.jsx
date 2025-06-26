import { Container, Form } from "react-bootstrap";
import React from "react";

import headBorder from "/head-border.png";
export default function DisclaimerSection() {
  return (
    <section
      className="contact-form-section spad bg"
      style={{ padding: "60px 0" }}
    >
        <div className="container">
     <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="heading2 mb-4">
              <h4>
                <span className="head-border">
                  <img src={headBorder} alt="head-border" />
                </span>
                Disclaimer
              </h4>
              <p className="mt-3" style={{textAlign:"justify"}}>
               The information contained in this website is for general information purposes only. The information is provided by www.vgnhomes.org, a property of VGN HOMES PRIVATE LIMITED. While we endeavour to keep the information up to date and correct, any visitor on this website automatically agrees to comply with and be bound by the following terms and conditions of use. Visitors are presumed to have read, understood and agreed to terms and conditions of this site. VGN HOMES PRIVATE LIMITED can alter or revoke any terms or conditions of this website without notice.
              </p>
              <p className="mt-3" style={{textAlign:"justify"}}>
               Through this website you are able to link to other websites which are not under the control of VGN HOMES PRIVATE LIMITED. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
              <p className="mt-3" style={{textAlign:"justify"}}>
              Every effort is made to keep the website up and running smoothly. However, VGN HOMES PRIVATE LIMITED takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
              </p>
              <p className="mt-3" style={{textAlign:"justify"}}>
               The amenities, specifications, facilities, surrounding infrastructure, stock images and features shown and/or mentioned and the image renders used herein are purely indicative and for representational purposes and may differ from the actuals. Photographs of interiors, surroundings or location are digitally enhanced unless otherwise mentioned. Not all photos may have been shot at site. Products, features, light fittings, pictures, images, etc. shown as illustrations are for reference only. The colours, shades of walls, tiles etc. shown in the images are for the purpose of representation only and may vary upon actual construction.
              </p>
              <p className="mt-3" style={{textAlign:"justify"}}>
               All images, the interiors and furniture items displayed therein are to give a perspective to the customer and are not part of the flat to be sold to the customer. This is only an invitation to offer and does not constitute an offer. The purpose of this brochure /booklet /prospectus /advertisement /website is, to indicate to the customers the extent of the amenities and facility that may come up in the project as per the present approved layout. Any prospective sale shall strictly be governed by the terms and conditions of the agreement for sale to be entered into between the parties. In a project where we are mere development managers, the respective developer/promoter of such project is solely liable and responsible for, inter alia, the construction, title and procuring approvals from competent authorities for such project.
              </p>
            </div>
          </div>
        </div>
        </div>
   
      
    </section>
  );
}
