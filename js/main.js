const btn = document.querySelector('.button');
const divBottom = document.querySelector('#div2');
const divTop = document.querySelector('#div1');

let isMouseDown = false;
let initialClickedPosition;

window.onload = () => {
  const usersLastPosition = localStorage.getItem('lastPosition');
  if (usersLastPosition === 'top') {
    moveButtonUp();
  } else if (usersLastPosition === 'bottom') {
    moveButtonDown();
  }
};

btn.addEventListener('touchstart', e => {
  console.log('down');
  isMouseDown = true;
  btn.classList.add('active');
  initialClickedPosition = e.pageY - btn.offsetTop;
});

btn.addEventListener('touchend', () => {
  isMouseDown = false;
  btn.classList.remove('active');
});
btn.addEventListener('touchcancel', () => {
  isMouseDown = false;
  btn.classList.remove('active');
});
btn.addEventListener('touchmove', e => {
  btn.classList.add('active');
  // if button was neved clicked mousemove doest nothing
  if (!isMouseDown) return;
  e.preventDefault();

  const cursorPosition = e.pageY - btn.offsetTop;
  const distanceMoved = cursorPosition - initialClickedPosition;

  // Drags down buttom
  if (distanceMoved > 15) {
    moveButtonDown();
    // Drags up buttom
  } else if (distanceMoved < -15) {
    moveButtonUp();
  }
});

const moveButtonDown = () => {
  console.log('moved down');
  btn.style.top = '60%';
  divTop.classList.add('hasIndex');
  divTop.style.transform = 'translateY(10%)';
  divBottom.style.transform = 'translateY(50%)';
  divTop.classList.add('topDivActive');
  divBottom.classList.remove('bottomDivActive');
  isMouseDown = false;
  localStorage.setItem('lastPosition', 'bottom');
};

const moveButtonUp = () => {
  console.log('moved up');
  btn.style.top = '40%';
  divTop.classList.remove('hasIndex');
  divTop.style.transform = 'translateY(0%)';
  divBottom.style.transform = 'translateY(40%)';
  divBottom.classList.add('bottomDivActive');
  divTop.classList.remove('topDivActive');
  isMouseDown = false;
  localStorage.setItem('lastPosition', 'top');
};
