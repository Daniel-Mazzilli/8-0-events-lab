// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// node list of the colors in the palette
const colorList = document.querySelectorAll(`.color`);
// console.log(colorList)
const currentColor = document.querySelector(`#current-color`);

// add event listener to each colorItem, update the currentColor once a colorItem is clicked
colorList.forEach((colorItem) => {
  colorItem.addEventListener(`click`, () => {
    currentColor.style.backgroundColor = colorItem.style.backgroundColor;
  });
});

// node list for cells in grid
const gridCells = document.querySelectorAll(`#canvas .cell`);
// console.log(gridCells)

// add event listener to each cell, update grid backgroundColor by clicking on it
gridCells.forEach((cell) => {
  cell.addEventListener(`click`, () => {
    if (cell.style.backgroundColor === currentColor.style.backgroundColor) {
      cell.style.backgroundColor = `white`;
    } else {
      cell.style.backgroundColor = currentColor.style.backgroundColor;
    }
  });
});
