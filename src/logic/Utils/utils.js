const cells = document.querySelectorAll('.cell');
export function getRandomCell() {
   return cells[Math.floor(Math.random() * cells.length)];
}
