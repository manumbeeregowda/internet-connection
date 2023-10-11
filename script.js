let message = document.getElementById("message");

let messageOnline = () => {
  message.textContent = "Internet Connection Available";
  message.style.cssText = "background-color: #0f0; color: #000";
};
let messageOffline = () => {
  message.textContent = "No Internet Connection";
  message.style.cssText = "background-color: #ffdde0; color: #d32f2f";
};

if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);