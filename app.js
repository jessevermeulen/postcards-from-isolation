import anime from "animejs";

document.addEventListener("DOMContentLoaded", () => {
  anime
    .timeline({
      easing: "easeInOutCirc",
      duration: 750,
    })
    .add({
      targets: ".wrapper",
      opacity: [0, 1],
    })
    .add({
      targets: ".a",
      translateY: ["38.45254243%", 0],
    })
    .add({
      targets: ".b",
      points: {
        value: [
          "262.88 99.33 258.69 103.44 283.4 128.16 191.64 128.16 216.36 103.44 212.17 99.33 180.35 131.14 212.17 162.96 216.36 158.77 191.64 134.13 283.4 134.13 258.69 158.77 262.88 162.96 294.7 131.14 262.88 99.33",
          "262.88 99.33 258.69 103.44 283.4 128.16 11.29 128.16 36.01 103.44 31.82 99.33 0 131.14 31.82 162.96 36.01 158.77 11.29 134.13 283.4 134.13 258.69 158.77 262.88 162.96 294.7 131.14 262.88 99.33",
        ],
      },
      opacity: [0, 1],
    })
    .add(
      {
        targets: ".e",
        opacity: [0, 0.2],
      },
      "-=750"
    )
    .add({
      targets: ".button__wrapper",
      opacity: 1,
    });
});

const button = document.getElementsByClassName("button")[0];

const stateChange = () => {
  tlUnited.play();

  tlUnited.finished.then(() => {
    tlUnited.reverse();
  });

  button.getAttribute("aria-pressed") == "true"
    ? button.setAttribute("aria-pressed", "false")
    : button.setAttribute("aria-pressed", "true");
};

document
  .getElementsByClassName("button__wrapper")[0]
  .addEventListener("click", stateChange);

const tlUnited = anime
  .timeline({
    easing: "easeInOutCirc",
    duration: 750,
    autoplay: false,
  })
  .add({
    targets: "main",
    background: "#000",
  })
  .add(
    {
      targets: "svg",
      fill: "#fff",
    },
    "-=750"
  )
  .add(
    {
      targets: ".a",
      translateY: "-38.45254243%",
      opacity: 0,
    },
    "-=750"
  )
  .add(
    {
      targets: ".b",
      points: {
        value: [
          "262.88 99.33 258.69 103.44 283.4 128.16 11.29 128.16 36.01 103.44 31.82 99.33 0 131.14 31.82 162.96 36.01 158.77 11.29 134.13 283.4 134.13 258.69 158.77 262.88 162.96 294.7 131.14 262.88 99.33",
          "82.53 99.33 78.34 103.44 103.05 128.16 11.29 128.16 36.01 103.44 31.82 99.33 0 131.14 31.82 162.96 36.01 158.77 11.29 134.13 103.05 134.13 78.34 158.77 82.53 162.96 114.35 131.14 82.53 99.33",
        ],
      },
      opacity: 0,
    },
    "-=750"
  )
  .add(
    {
      targets: ".e",
      translateY: "-30.59785226%",
      opacity: [0.2, 1],
    },
    "-=750"
  )
  .add(
    {
      targets: ".c",
      opacity: 1,
    },
    "-=600"
  );
