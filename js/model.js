class AnimateBtn {
  constructor(mouseIsDown, startingPointYAxis, lastPosition) {
    this.mouseIsDown = mouseIsDown;
    this.startingPointYAxis = startingPointYAxis;
    this.lastPosition = localStorage.getItem('lastPosition') || null;
  }

  moveButtonUp() {
    console.log('dragdown');
    btn.style.top = '60%';
    divTop.classList.add('hasIndex');
    divTop.classList.add('topDivActive');
    divBottom.classList.remove('bottomDivActive');
    state.animate.mouseIsDown = false;
    localStorage.setItem('lastPosition', 'top');
  }

  moveButtonDown() {
    btn.style.top = '40%';
    divTop.classList.remove('hasIndex');
    divBottom.style.transform = 'translateY(40%)';
    divBottom.classList.add('bottomDivActive');
    divTop.classList.remove('topDivActive');
    localStorage.setItem('lastPosition', 'top');
  }
}
