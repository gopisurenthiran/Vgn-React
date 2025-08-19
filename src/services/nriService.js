import axios from "axios";

const API_URL = "https://www.vgnhomes.org/Vgnhomesapi/nri_enquiry.php";

export const NriEnquiry = async (data) => {
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
