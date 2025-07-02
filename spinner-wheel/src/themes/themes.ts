export type Theme = {
  isCSS: boolean,
  cssName: string,
  niceName: string,
  numColors?: number,
  hues?: string[],
  lightLevel?: number,
}

const defaultTheme: Theme = {
  isCSS: true,
  cssName: 'defaultTheme',
  niceName: 'Circus Wheel',
  numColors: 10,
}

const watermelonTheme: Theme = {
  isCSS: true,
  cssName: 'watermelonTheme',
  niceName: 'Watermelon',
  numColors: 9,
}

const oceanTheme: Theme = {
  isCSS: true,
  cssName: 'oceanTheme',
  niceName: 'Ocean',
  numColors: 10,
}

const bananaTheme: Theme = {
  isCSS: true,
  cssName: 'bananaTheme',
  niceName: 'Banana',
  numColors: 8,
}

const lavender: Theme = {
  isCSS: false,
  cssName: 'lavenderHue',
  niceName: 'Purple Gradient',
  hues: [
    '260',
    '240',
    '270',
  ],

}

const sunset: Theme = {
  isCSS: false,
  cssName: 'sunsetHue',
  niceName: 'Sunset Gradient',
  hues: [
    '0',
    '30',
    '50',
  ],
  lightLevel: 80,
}

const autoRainbow: Theme = {
  isCSS: false,
  cssName: 'autoRainbow',
  niceName: 'Automatic Rainbow',
  hues: [],
}

export const themeList = [
  defaultTheme,
  watermelonTheme,
  oceanTheme,
  bananaTheme,
  autoRainbow,
  lavender,
  sunset,
]