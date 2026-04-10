

import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: (document.getElementById("prompt").value),
    });
    webConsole.innerHTML = response.text;
}



const webConsole = document.getElementById("webConsole");
const gApiKey = (document.getElementById("InputAPI_KEY").value);
webConsole.innerHTML = "SavitAIr Response";

function sendPrompt() {
    webConsole.innerHTML = gApiKey;
}
