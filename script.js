const webConsole = document.getElementById("webConsole");
const gApiKey = (document.getElementById("InputAPI_KEY").value);

function sendPrompt() {
    webConsole.innerHTML = gApiKey;
}
