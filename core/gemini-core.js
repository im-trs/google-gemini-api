const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function queryGeminiProVisionAPI(image, prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const imageParts = [
    fileToGenerativePart(image, "image/jpeg"),
  ];

  const result = await model.generateContent([prompt, ...imageParts], {
    temperature: 0.75,
    top_p: 0.7,
  });

  const response = await result.response;
  return response.text();
}

module.exports = queryGeminiProVisionAPI;
