export const ChannelEnquiry = async (data) => {
  try {
    const response = await fetch(
      "https://www.vgnhomes.org/Vgnhomesapi/channelPartner.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const text = await response.text();

    // Try direct JSON first
    try {
      const json = JSON.parse(text);
      return json; // { status, message }
    } catch {
      // Handle concatenated JSON like: {...}{...}
      const parts = text
        .split("}{")
        .map((p, i, arr) => {
          if (arr.length > 1) {
            if (i === 0) return p + "}";
            if (i === arr.length - 1) return "{" + p;
            return "{" + p + "}";
          }
          return p;
        });

      const parsed = parts
        .map((p) => {
          try {
            return JSON.parse(p);
          } catch {
            return null;
          }
        })
        .filter(Boolean);

      if (parsed.length) {
        const allSuccess = parsed.every((p) => p.status === "success");
        const combinedMessage =
          parsed.map((p) => p.message).join(" ") ||
          (allSuccess
            ? "Form submitted successfully."
            : "Something went wrong.");

        return {
          status: allSuccess ? "success" : "error",
          message: combinedMessage,
        };
      }

      return { status: "error", message: "Invalid response from server." };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return { status: "error", message: "Network error. Please try again." };
  }
};
