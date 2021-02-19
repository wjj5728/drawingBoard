// const fs = require('fs');
// const path = require('path');
// import fs from 'fs';
// import path from 'path';

// const dir = '../../components/';
// const categories: string[] = fs.readdirSync(path.resolve(__dirname, dir));
// console.log(categories);

// categories.map(item => {
//   config[item] = [];
//   const components = fs.readdirSync(path.resolve(__dirname, dir + item));
//   components.map((i: string) => {
//     config[item].push({
//       name: i,
//     });
//   });
// });
// export const config: {
//   [prop: string]: Array<{ name: string }>;
// } = {};
enum categories {
  basis = 'basis',
  animation = 'animation',
}
export interface ConfigItem {
  type: string;
  name: string;
  icon: string;
  config: {
    custom?: Object;
    style: Object;
  };
}
export interface Config {
  [prop: string]: Array<ConfigItem>;
}
export const GlobalConfig: Config = {
  basis: [
    {
      type: 'basis',
      name: 'Text',
      icon: 'video-camera',
      config: {
        custom: {},
        style: {
          height: '60px',
          width: '100px',
        },
      },
    },
  ],
  animation: [
    {
      type: 'animation',
      name: 'lottie',
      icon: 'video-camera',
      config: {
        custom: {},
        style: {
          height: '60px',
          width: '100px',
        },
      },
    },
  ],
};
type langConfig = {
  [prop in keyof Config]: string;
};
export const lang: langConfig = {
  animation: '动画',
  basis: '基础',
};
