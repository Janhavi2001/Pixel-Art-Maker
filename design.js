// genration
function makeGrid() {
  //getting grid width
  const gridWidth = document.getElementById('width').value;
  //getting grid height
  const gridHeight = document.getElementById('height').value;
  
  const canvas = document.getElementById('pixel_canvas');
  canvas.innerHTML = '';
  //An event listener such that whenever any cell is clicked it calls addEvent function and changes it's color.
  for (let i = 0; i < gridHeight; i++) {
    let row = canvas.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener('click', function(event) {
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}

document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});