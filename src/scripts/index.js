import "../styles/index.scss";

import Glide from "@glidejs/glide";

//new Glide(".glide").mount();

new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 1
}).mount();
