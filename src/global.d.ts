declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// global.d.ts
// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }
