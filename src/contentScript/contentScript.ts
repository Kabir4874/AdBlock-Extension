const rules: {
  [url: string]: () => void;
} = {
  "https://www.nytimes.com/section/technology": filterNYTTechnology2,
};

function filterNYTTechnology() {
  const app = document.getElementById("site-content");
  const wrapper = document.getElementById("top-wrapper");
  app.removeChild(wrapper);
}

function filterNYTTechnology2() {
  const divs = document.getElementsByTagName("div");
  for (const div of divs) {
    if (div.className.indexOf("ad") != -1) {
      div.style.display = "none";
    }
  }
}

if (document.URL in rules) {
  rules[document.URL]();
}
