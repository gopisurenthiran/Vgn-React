import axios from "axios";

const API_URL = "https://vgnhomes.ayatiworks.com/Vgnhomesapi/Contact_support.php";

export const ContactEnquiry = async (data) => {
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
