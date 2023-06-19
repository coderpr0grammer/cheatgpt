console.log("Hello from the content script!");

// Create a new iframe element
const iframe = document.createElement("iframe");

let showIframe = true;

// Set the source URL for the iframe
iframe.src = "https://cheatgpt-frontend.vercel.app/";

// Set the position and size of the iframe using CSS
iframe.allowTransparency = "true";
iframe.style.position = "fixed";
iframe.style.borderWidth = '0px';
iframe.style.borderStyle = "solid"
iframe.style.bottom = "0";
iframe.style.left = "0";
iframe.style.width = "150px";
iframe.style.height = "200px";

function handleKeyboardShortcut(event) {
    // Check if Ctrl key and H key are pressed simultaneously
    if (event.ctrlKey && event.key === "h") {
      // Perform your desired action here

      console.log("Custom keyboard shortcut detected: Ctrl+H");

      showIframe = !showIframe;

      if (showIframe) {
        iframe.style.display = 'block';
      } else {
        iframe.style.display = 'none';

      }
      
      // Add your code to perform the action you want
      // For example, you can show/hide an element, execute a function, etc.
    }
  }
  
  // Attach the event listener to the 'keydown' event
  document.addEventListener("keydown", handleKeyboardShortcut);

// Append the iframe to the document body
document.body.appendChild(iframe);

