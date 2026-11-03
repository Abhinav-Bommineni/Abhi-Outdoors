
const markerInfo = {
  "About me": {
    title: "A little about me",
    text: "I'm Abhi. A student, wildlife photographer, naturalist, musician, runner and a few other things that don't fit into a single box. I spend much of my time learning about the natural world, exploring new interests and figuring out how things works.",
    link: "about-me.html"
  },

  "Birdwatching": {
    title: "Birdwatching",
    text: "Birds are one of my biggest sources of curiosity. I spend time observing them, learning their calls and behaviour, and documenting the species around me.",
    link: "birds.html"
  },

  "Photography": {
    title: "Photography",
    text: "Photography gives me a reason to slow down and pay attention. I photograph birds, wildlife, landscapes and the small details that are easy to miss.",
    link: "photography.html"
  },

  "Ecology": {
    title: "Ecology & Conservation",
    text: "I'm interested in how ecosystems work, how species interact and how landscapes can be restored.",
    link: "ecology.html"
  },

  "Running": {
    title: "Running",
    text: "Running is my way of exploring places, testing my limits and spending time outdoors. From easy trails to timed races, there's usually a pair of running shoes nearby.",
    link: "running.html"
  },

  "Music": {
    title: "Music",
    text: "I play guitar and drums, and enjoy writing songs. I'm drawn to fingerpicked melodies, thoughtful lyrics and music that feels a little lived-in.",
    link: "music.html"
  },

  "Exploring": {
    title: "Exploring",
    text: "Trekking, field trips and unfamiliar places are all part of the appeal. I'm happiest when there's somewhere new to explore or something new to learn.",
    link: "exploring.html"
  },

  "Writing": {
    title: "Writing",
    text: "I write about nature, ideas, projects and whatever else I can't quite leave alone. This website is where some of those notes and stories come together.",
    link: "writing.html"
  }
};

const map = document.querySelector(".about-map");
const centreContent = document.getElementById("centre-content");
const markers = document.querySelectorAll(".map-marker");
const aboutMarker = document.querySelector(".marker-about");

if (map && centreContent) {

  // Make marker clicks replace the central text
  markers.forEach(marker => {
    marker.addEventListener("click", () => {
      const label = marker.querySelector(".marker-label");
      if (!label) return;

      const info = markerInfo[label.textContent.trim()];
      if (!info) return;

centreContent.innerHTML = `
  <h1>${info.title}</h1>
  <p>${info.text}</p>
  ${info.link ? `
    <a class="map-explore-button" href="${info.link}">
      Read more here ↗
    </a>
  ` : ""}
`;
    });
  });

}