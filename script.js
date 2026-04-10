const webConsole = document.getElementById("webConsole");

function sendPrompt() {
    webConsole.innerHTML = env.local.G_API;
}
