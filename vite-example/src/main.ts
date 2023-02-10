import "./style.css";

import { setupCounter } from "./counter";
import { posts } from "./get-posts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Demo Vite</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    ${posts
      .map((post) => {
        return `<div>
        <h3>${post.title}</h3>
        <p>${post.story}</p>
        </div>`;
      })
      .join("")}
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
