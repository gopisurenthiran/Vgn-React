import axios from "axios";

const API_URL = "https://www.vgnhomes.org/Vgnhomesapi/contact_enquiry.php";
// const API_URL = "https://vgnhomes.ayatiworks.com/Vgnhomesapi/senddata.php";

export const submitEnquiry = async (data) => {
  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // JSON response expected
  } catch (error) {
    console.error("Submit Enquiry Error:", error);
    throw error;
  }
};
