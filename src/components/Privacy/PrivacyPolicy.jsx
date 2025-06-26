import React, { useState } from "react";

import { FaAngleDoubleRight } from "react-icons/fa";

const faqData = [
  {
    question: "INFORMATION WE MAY COLLECT FROM YOU",
    answer: (
      <>
       <b> We May Collect and Process the Following Data About You:</b>
        <br /><br/>
        i) Information you give us. You may give us information about you by filling in forms on our sites, or by submitting your CV, or by corresponding with us by phone, e-mail or otherwise or, by you interacting with any of our business partners, suppliers or sub-contractors (including real estate agents, sales agents and our professional advisors) engaged on our behalf. This includes information you provide when you register to use our sites, subscribe to our service, email us, arrange property viewings with us, request brochures from us, complete an enquiry form, provide your CV and when you report a problem with our sites. The information you give us may include your name, address, e-mail address, phone number and any other information relevant to your enquiry or request for information or services which we may request and you may choose to provide to us from time to time.

        <br /><br/>
        ii) Information we collect about you. We may automatically collect: technical information, including the IP address, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform; and information about your visit, including the full URL clickstream to, through and from our sites; materials you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information, and methods used to browse away from the page and any phone number used to call our customer service number.

        <br /><br/>
        iii) Information we receive from other sources. We may receive information about you if you use our sites or the other services we provide. In this case we will have informed you when we collected that data that it may be shared internally and combined with data collected on our sites. We also work closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, credit reference agencies) and may receive information about you from them.
        
      </>
    ),
  },
  
  {
    question: "USE MADE OF THE INFORMATION",
     answer: (
      <>
       <b> We Use Information Held About You in The Following Ways:</b>
        <br /><br/>
        i) Information you give to us. We will use this information: to carry out our obligations arising from any contracts entered into between you and us and to provide you with the information and services that you request from us relating to the projects, properties, ventures or opportunities detailed on our sites or otherwise notified to you; to provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about; to provide you, or permit selected third parties to provide you, with information about opportunities, goods or services we feel may interest you. If you are an existing customer, we will only contact you by e-mail, WhatsApp, SMS, telephone or your preferred method of contact if different, with information about opportunities, goods and services similar to those which were the subject of a previous sale or negotiations of a sale to you. If you are a new customer, and where we permit third parties to use your data, we (or they) will contact you by e-mail, WhatsApp, SMS, telephone or your preferred method of contact if different only if you have consented to this.

        <br /><br/>
        ii) Information we collect about you. We will use this information: to administer our sites and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes; to improve our sites to ensure that content is presented in the most effective manner for you and for your computer; to allow you, when required, to participate in interactive features of our service; as part of our efforts to keep our sites safe and secure; to measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you; to make suggestions and recommendations to you and other users of our sites about goods or services that may interest you or them.

        <br /><br/>
        iii) Information we receive from other sources. We may combine this information with information you give to us and information we collect about you. This includes but is not limited to information we receive from our sales agents. We may use this information and the combined information for the purposes set out above (depending on the types of information we receive).
        
      </>
    ),
  },
  {
    question: "DISCLOSURE OF YOUR INFORMATION",
     answer: (
      <>
       <b> We Use Information Held About You in The Following Ways:</b>
        <br /><br/>
        A) We may share your personal information with any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries.
        <br /><br/>
       B) We may share your information with selected third parties including, where applicable: i. Business partners, suppliers and sub-contractors (including, but not limited to, estate agents, sales agents and our professional advisors) for the performance of any contract or any potential contract we may enter into with them or you, or in relation to any ancillary requirements; ii. Advertisers and advertising networks that require the data to select and serve relevant adverts to you and others; and iii. Analytics and search engine providers that assist us in the improvement and optimization of our sites.

        <br /><br/>
       C) We may disclose your personal information to third parties: i. If we sell or buy any business or assets, we may disclose your personal data to the prospective seller or buyer of such business or assets; ii. If VGN Homes Private Limited or substantially all of its assets are acquired by a third party, your personal data will be one of the transferred assets; and iii. If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements; or to protect the rights, property, or safety of VGN Homes Private Limited, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.
       <br/><br/>
       D) We may share your non sales related information such as Cookies, Email IDs, Phone number etc. to external parties. But we do not share your sales related information such as PAN Card No, Credit / Debit Card details, Preference details with the external parties.
        
      </>
     ),
  },
  {
    question:
      "WHERE WE STORE YOUR PERSONAL DATA",
    answer: (
      <>
       <b> We Use Information Held About You in The Following Ways:</b>
        <br /><br/>
      A) The data that we collect from you may be transferred, stored and processed by staff who work for us or for one of our suppliers or one of our group companies. Such staff maybe engaged in, among other things, the fulfilment of your order or enquiry and the provision of support services. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely.

        <br /><br/>
       B) We have put in place appropriate technical and organizational measures to guard against unauthorized or unlawful processing of personal data and accidental loss or destruction of, or damage to, personal data. Unfortunately, the transmission of information via the internet is not completely secure and we cannot guarantee the security of your data transmitted to our sites and any transmission is at your own risk. We may share your non sales related information such as Cookies, Email IDs, Phone number etc. to external parties. But we do not share your sales related information such as PAN Card No, Credit / Debit Card details, Preference details with the external parties.

        
      </>
     ),
  },
  {
    question: "WEB BROWSER COOKIES",
    answer: `Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert the Users when cookies are being sent. If they do so, note that some parts of the Site may not function properly.`,
  },
  {
    question:
      "CHANGES TO THIS PRIVACY POLICY",
    answer: `VGN Homes shall update this privacy policy at its sole discretion, from time to time and if we do, we will post any changes on this page. Users are advised to check this page for any changes in the privacy policy and to stay informed about how the personal information of the Users is protected by us. If the Users continue to visit and access this website after those changes are in effect, the Users are deemed to have agreed to the new policy. The Users hereby acknowledge and agree that it is their responsibility to review this privacy policy periodically and become aware of modifications.`,
  },
  {
    question:
      "CONTACT US",
    answer: `If you have any questions about this Privacy Policy, the practices of this website, or your dealings with this website, please contact us at: VGN Homes Private Limited.`,
  },
 
];

const Privacypolicy = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };



  return (
     <section
         className="property-section latest-property-section spad bg"
         
       >
         <div className="container">
           <div className="row">
             <div className="col-lg-12 text-center">
               <p style={{textAlign:"justify"}}>
                VGN Group of companies (that is, our subsidiaries, our ultimate holding company and its subsidiaries) ("we", "our", "us") are committed to protecting and respecting your privacy. This privacy policy (together with our terms of use and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting www.vgnhomes.orgor any other of our websites / mobile applications to which this privacy policy applies ("Sites") or otherwise providing us with information you are accepting and consenting to the practices described in this policy.
               </p>
             </div>
   
             <div className="col-lg-12">
               <div className="pd-widget" id="about-vgn">
                 <div className="wrapper">
                   {faqData.map((item, index) => (
                     <div className="container-txt" key={index}>
                       <div
                         className="question"
                         onClick={() => toggleAnswer(index)}
                         style={{ cursor: "pointer" }}
                       >
                         {item.question}
                       </div>
                       {activeIndex === index && (
                         <div className="answercont" >
                           <div className="answer">{item.answer}</div>
                         </div>
                       )}
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
  );
};

export default Privacypolicy;
