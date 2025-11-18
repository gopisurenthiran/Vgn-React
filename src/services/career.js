// src/services/career.js
import axios from "axios";

// const API_URL = "https://vgnhomes.ayatiworks.com/Vgnhomesapi/careers.php";
// const API_URL = "https://www.vgnhomes.org/Vgnhomesapi/careers.php";

const API_URL = "https://www.vgnhomes.org/Vgnhomesapi/career_enquiry.php";
export const career = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Submit Enquiry Error:", error.response || error);
    throw error;
  }
};
