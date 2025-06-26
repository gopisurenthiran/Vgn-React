import React from 'react';
import { Tab, Nav } from 'react-bootstrap';

const LocationAdvantages = () => {
  return (
    <section className="pd-board9 pd-widget" id="advantage">
      <div className="section-title7">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board9">
        <Tab.Container defaultActiveKey="school">
          <Nav variant="tabs" className="nav nav-tabs" role="tablist">
            <Nav.Item className="nav-item">
              <Nav.Link eventKey="school" className="nav-link" role="tab">
                Nearby Locations
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="tab-content mt-3">
            <Tab.Pane eventKey="school" className="tab-pane active" role="tabpanel">
              <div className="tab-desc">
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> 300 mts from Sri Ramakrishna School</p>
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> 300 mts from Kone Krishna Kalyana Mandapam</p>
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> 1 km from Tambaram Bus Stand and Railway Station</p>
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> 1 km from Shri Anand Jain Vidyalaya & Chennai Bypass</p>
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> 1 km from Hindu Mission Hospital & AG Hospital</p>
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> 1.9 km from MCC College</p>
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> 3 km from MEPZ</p>
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> 3.5 km from Shriram IT Gateway</p>
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> 4.5 km from Kishkinta Theme Park</p>
                <p><i className="fa fa-angle-double-right" aria-hidden="true"></i> Closer to Chennai Airport</p>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

export default LocationAdvantages;
