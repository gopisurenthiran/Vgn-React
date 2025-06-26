// api.js
export const sendEnquiry = async (data) => {
  try {
    const response = await fetch("https://vgnhomes.ayatiworks.com/Vgnhomesapi/OngoingEnquiry.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.text();
    return { ok: response.ok, message: result };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { ok: false, message: "Network error" };
  }
};
