import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force scroll to top and remove hash before render
if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname);
}
window.scrollTo({ top: 0, left: 0 });

createRoot(document.getElementById("root")!).render(<App />);

// Enable smooth scroll after initial load settles
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.documentElement.classList.add("smooth-scroll");
  });
});
