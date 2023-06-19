console.log("Hello from the content script!");

// Create a new iframe element
const iframe = document.createElement("iframe");

// Set the source URL for the iframe
iframe.src = "https://cheatgpt-frontend.vercel.app/";

// Set the position and size of the iframe using CSS
iframe.allowTransparency = "true";
iframe.style.position = "fixed";
iframe.style.bottom = "0";
iframe.style.left = "0";
iframe.style.width = "200px";
iframe.style.height = "200px";

// Append the iframe to the document body
document.body.appendChild(iframe);
