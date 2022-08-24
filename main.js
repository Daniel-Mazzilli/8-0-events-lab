// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// node list of colors in palette
const colorList = document.querySelectorAll(`.color`);
// currentColor
const currentColor = document.querySelector(`#current-color`);
// palette
const palette = document.querySelector(`#palette`);

// add event listener to each colorItem, update the currentColor once a colorItem is clicked
colorList.forEach((colorItem) => {
  colorItem.addEventListener(`click`, () => {
    currentColor.style.backgroundColor = colorItem.style.backgroundColor;
  });
});

// alternate way to update currentColor
// palette.addEventListener(`click`, (el) => {
//   if(el.target.className === `color`){
//     currentColor.style.backgroundColor = el.target.style.backgroundColor
//   }
// })

// node list for cells in grid
const gridCells = document.querySelectorAll(`#canvas .cell`);

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

// button div
const buttonDiv = document.createElement(`div`)
buttonDiv.setAttribute(`class`, `buttons`)
currentColor.before(buttonDiv)
buttonDiv.style.display = `grid`
buttonDiv.style.gridTemplateColumns = `5fr 1fr 1fr 5fr`
buttonDiv.style.columnGap = `60px`
buttonDiv.style.marginTop = `30px`

// reset button
const reset = document.createElement(`button`);
buttonDiv.append(reset);
reset.textContent = `RESET`;
reset.style.gridColumn = `2`
reset.style.height = `40px`
reset.addEventListener(`click`, () => {
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = `white`;
  });
});

// fill-all button
const fillAll = document.createElement(`button`)
buttonDiv.append(fillAll)
fillAll.textContent = `FILL-ALL`
fillAll.addEventListener(`click`, () => {
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = currentColor.style.backgroundColor
  })
})