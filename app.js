let sizeDefault = 16;
const resetBtn = document.querySelector("button");
const container = document.querySelector(".container");

const createGrid = (amtOfGrids) => {
  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 960 / amtOfGrids;
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      //adding mouseenter listener to change background color
      gridBox.addEventListener("mouseenter", () => {
        gridBox.style.backgroundColor = "black";
      });

      row.appendChild(gridBox);
    }
    container.appendChild(row);
  }
};

createGrid(sizeDefault);

resetBtn.addEventListener("click", () => {
  let userSize = Number(prompt("what dimension do you want for the new grid?"));
  while (userSize > 100) {
    userSize = Number(prompt("Pick a smaller number-100 or less than 100."));
  }
  //deleting current boxes
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //and creating new ones
  createGrid(userSize);
});
