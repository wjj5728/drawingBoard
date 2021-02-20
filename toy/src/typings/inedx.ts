export interface componentItem {
  uuid: string;
  name: string;
  text?: string;
  style: {
    color?: string;
    height: number;
    width: number;
    rotation: number;
  };
  custom?: {};
}
