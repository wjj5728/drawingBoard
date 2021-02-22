interface Pos {
  x: number;
  y: number;
}
export function styleMerge(config, posInfo: Pos) {
  let defaultStyle = {
    width: '100%',
  };
  return Object.assign(defaultStyle, config.style ?? {}, {
    position: 'absolute',
    left: posInfo.x + 'px',
    top: posInfo.y + 'px',
  });
}
