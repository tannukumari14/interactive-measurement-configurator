const line2 = document.getElementById('line2'); 
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
    newY = Math.max(50, Math.min(newY, 198)); 
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

updateDistance(); 

const line1=document.getElementById("line1");
const distanceDisplayLine1= document.getElementById("distance")


let isDraggingLine1= false;
let initialX;

line1.addEventListener('mousedown', (e) => {
  isDragging = true;
  initialX = e.clientX - line1.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let newX = e.clientX - initialX;
    newX = Math.max(50, Math.min(newX, 198)); 
    line1.style.top = `${newX}px`;
    updateDistance();
  }
});

document.addEventListener('mouseup', () => {
  isDraggingLine1 = false;
});

function updateDistance() {
  const line2 = document.getElementById('line2');
  const distance = Math.abs(line1.offsetTop - line2.offsetTop);
  distanceDisplay.textContent = distance;
}

updateDistance(); 
