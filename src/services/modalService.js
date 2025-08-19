import axios from "axios";

const API_URL = "https://www.vgnhomes.org/Vgnhomesapi/upcoming_enquiry.php";

export const ModalService = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // assuming the API returns JSON
  } catch (error) {
    console.error("ModalService Error:", error?.response?.data || error.message);
    throw error;
  }
};
