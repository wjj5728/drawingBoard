enum MoveActionType {
  ZOOM = 'zoom',
  MOVE = 'move',
}
export function MoveAction(
  el: HTMLDivElement,
  type: keyof typeof MoveActionType
) {
  el.addEventListener('mousedown', (e: MouseEvent) => {
    let x_down = e.clientX;
    let y_down = e.clientY;
    let leftDown = el.offsetLeft;
    let topDown = el.offsetTop;
    el.onmousemove = (e: MouseEvent) => {
      let x_move = e.clientX;
      let y_move = e.clientY;
      let x_now = x_move - x_down;
      let y_now = y_move - y_down;
      let diffx = x_move - x_down;
      let diffy = y_move - y_down;
      let parent = el.parentNode as HTMLDivElement;
      let height = parseFloat(window.getComputedStyle(parent).height);
      let width = parseFloat(window.getComputedStyle(parent).width);
      if (type == 'MOVE') {
        el.style.position = 'absolute';
        el.style.top = topDown + y_now + 'px';
        el.style.left = leftDown + x_now + 'px';
      } else if (type == 'ZOOM') {
        console.log('diffx', diffx);
        console.log('diffy', diffy);
        parent.style.height = height + diffy + 'px';
        parent.style.width = width + diffx + 'px';
      }
    };
    el.onmouseup = function () {
      this.onmousemove = this.onmouseup = null;
    };
    return false;
  });
}
