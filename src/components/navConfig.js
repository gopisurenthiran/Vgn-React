const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'About Us',
    children: [
      { title: 'About VGN', path: '/about' },
      { title: 'Our Values', path: '/values' },
      { title: 'Message From Chairman', path: '/chairman' },
      { title: 'Our People', path: '/our-people' },
      { title: 'Testimonials', path: '/testimonial' }
    ]
  },
  {
    title: 'Projects',
    children: [
      { title: 'Ongoing Projects', path: '/ongoing-project' },
      { title: 'Completed Projects', path: '/completed-project' }
    ]
  },
  {
    title: 'Partners',
    children: [
      { title: 'Channel Partners', path: '/channel-partner' },
      { title: 'Land Enquiry / Joint Ventures', path: '/land-enquiry' }
    ]
  },
  { title: 'NRI', path: '/nri' },
  { title: 'iRefer', path: '/irefer' },
  {
    title: "Customer's Corner",
    children: [
      { title: 'Customer Support', path: '/customer-support' },
      { title: 'EMI Calculator', path: '/emi-calculator' }
    ]
  },
  {
    title: 'Contact Us',
    children: [
      { title: 'Address', path: '/contact' },
      { title: 'Careers', path: '/careers' }
    ]
  }
];

export default navConfig;
