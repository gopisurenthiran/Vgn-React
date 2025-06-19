// src/services/apiService.js

export const postFormData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(
        Object.entries(data).reduce((formData, [key, value]) => {
          formData.append(key, value);
          return formData;
        }, new FormData())
      ),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return await response.json(); // adjust if API returns plain text
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
