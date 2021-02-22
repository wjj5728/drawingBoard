export interface componentItem {
  uuid: string;
  name: string;
  style: {
    color?: string;
    height?: number;
    width?: number;
    rotation?: number;
    zIndex?: number;
  };
  custom: {
    text?: string;
  };
}
