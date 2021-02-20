enum Dr {
  /** 左上 */
  lt = 'lt',
  /**右上 */
  rt = 'rt',
  /**左下 */
  lb = 'lb',
  /**右下 */
  rb = 'rb',
  /** 中上 */
  ct = 'ct',
  /** 中下 */
  cb = 'cb',
  /** 左中 */
  cl = 'cl',
  /** 右中 */
  cr = 'cr',
}
type DR = keyof typeof Dr;
export function MoveAction(el: HTMLDivElement) {
  el.addEventListener('mousedown', (e: MouseEvent) => {
    let isPointDot = (<Element>e.target).classList.contains('j-dot');
    if (isPointDot) return;
    let x_down = e.clientX;
    let y_down = e.clientY;
    let leftDown = el.offsetLeft;
    let topDown = el.offsetTop;
    document.onmousemove = (e: MouseEvent) => {
      let x_move = e.clientX;
      let y_move = e.clientY;
      let x_now = x_move - x_down;
      let y_now = y_move - y_down;
      el.style.position = 'absolute';
      el.style.top = topDown + y_now + 'px';
      el.style.left = leftDown + x_now + 'px';
    };
    el.onmouseup = function () {
      document.onmousemove = this.onmouseup = null;
    };
  });
}

export function ZoomAction(el: HTMLDivElement) {
  el.addEventListener('mousedown', (e: MouseEvent) => {
    let x_down = e.clientX;
    let y_down = e.clientY;
    let dr = (<Element>e.target).getAttribute('data-dr') as DR;
    let parent = el.parentNode as HTMLDivElement;
    let height = parseFloat(window.getComputedStyle(parent).height);
    let width = parseFloat(window.getComputedStyle(parent).width);
    let top = parseFloat(window.getComputedStyle(parent).top);
    let left = parseFloat(window.getComputedStyle(parent).left);
    document.onmousemove = (e: MouseEvent) => {
      let x_move = e.clientX;
      let y_move = e.clientY;
      let diffx = x_move - x_down;
      let diffy = y_move - y_down;
      (function check(dr: DR) {
        switch (dr) {
          case 'rt':
            parent.style.height = height - diffy + 'px';
            parent.style.top = top + diffy + 'px';
            parent.style.width = width + diffx + 'px';
            break;
          case 'lt':
            parent.style.height = height - diffy + 'px';
            parent.style.top = top + diffy + 'px';
            parent.style.width = width - diffx + 'px';
            parent.style.left = left + diffx + 'px';
            break;
          case 'lb':
            parent.style.height = height + diffy + 'px';
            parent.style.width = width - diffx + 'px';
            parent.style.left = left + diffx + 'px';
            break;
          case 'cb':
            parent.style.height = height + diffy + 'px';
            break;
          case 'ct':
            parent.style.height = height - diffy + 'px';
            parent.style.top = top + diffy + 'px';
            break;
          case 'rb':
            parent.style.width = width + diffx + 'px';
            parent.style.height = height + diffy + 'px';
            break;
          case 'cl':
            parent.style.width = width - diffx + 'px';
            parent.style.left = left + diffx + 'px';
            break;
          case 'cr':
            parent.style.width = width + diffx + 'px';
            break;
          default:
            const exhaustiveCheck: never = dr;
            break;
        }
      })(dr);
    };
    document.onmouseup = el.onmouseup = function () {
      document.onmousemove = this.onmouseup = null;
    };
  });
}
export function uuid() {
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
}
function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
