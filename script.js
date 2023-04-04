//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button');

let activeBlockId = null;

function setActiveBlockId(id) {
  activeBlockId = id;
  gridItems.forEach(item => item.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function changeColor() {
  if (!activeBlockId) return;
  const color = colorInput.value;
  document.getElementById(activeBlockId).style.backgroundColor = color;
}

function reset() {
  gridItems.forEach(item => item.style.backgroundColor = 'transparent');
  setActiveBlockId(null);
}

gridItems.forEach(item => {
  item.addEventListener('click', () => setActiveBlockId(item.id));
});

changeButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', reset);
