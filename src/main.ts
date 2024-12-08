import "./style.css";
import "@google/model-viewer";
import model from "./assets/Chair.webp";

document.querySelector("#ar-viewer")!.innerHTML = `
  <model-viewer
    src="${model}"
    shadow-intensity="1"
    ar
    alt="A 3D model carousel"
    reveal="manual"
    class="mb-6"
  >
  </model-viewer>
`;
