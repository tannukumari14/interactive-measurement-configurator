const line2 = document.getElementById('line2'); // Fixed the correct reference
const distanceDisplay = document.getElementById('distance');

let isDragging = false;
let initialY;

line2.addEventListener('mousedown', (e) => {
  isDragging = true;
  initialY = e.clientY - line2.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let newY = e.clientY - initialY;
    newY = Math.max(50, Math.min(newY, 198)); // Restrict movement within container
    line2.style.top = `${newY}px`;
    updateDistance();
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

function updateDistance() {
  const line1 = document.getElementById('line1');
  const distance = Math.abs(line2.offsetTop - line1.offsetTop);
  distanceDisplay.textContent = distance;
}

updateDistance(); // Initial call to display the default distance
