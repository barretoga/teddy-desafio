declare module 'single-spa' {
  export function registerApplication(
    appName: string,
    app: any,
    activityFn: (location: Location) => boolean,
    customProps?: object
  ): void;

  export function start(): void;
}
