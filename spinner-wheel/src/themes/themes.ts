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

// const watermelonTheme: Theme = {
//   isCSS: true,
//   cssName: 'watermelonTheme',
//   niceName: 'Watermelon',
//   numColors: 8,
// }

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
  niceName: 'Lavender',
  hues: [
    '260',
    '240',
    '270',
  ],

}

const autoRainbow: Theme = {
  isCSS: false,
  cssName: 'autoRainbow',
  niceName: 'Full Spectrum',
  hues: [],
}

const dracula: Theme = {
  isCSS: false,
  cssName: 'draculaHue',
  niceName: 'Dracula',
  hues: [
    '353',
  ],
  lightLevel: 60,
}

const paintingONM: Theme = {
  isCSS: true,
  cssName: 'paintingONM',
  niceName: 'Oak November Moon',
  numColors: 8,
}

const paintingNRRL: Theme = {
  isCSS: true,
  cssName: 'paintingNRRL',
  niceName: 'Night Red Rock Lake',
  numColors: 8,
}

const meadow: Theme = {
  isCSS: false,
  cssName: 'meadowHue',
  niceName: 'Meadow',
  hues: [
    '100',
    '110',
    '90',
    '280',
    '55',
  ],
  lightLevel: 40,
}

export const themeList = [
  defaultTheme,
  bananaTheme,
  oceanTheme,
  paintingONM,
  paintingNRRL,
  //watermelonTheme,
  meadow,
  lavender,
  dracula,
  autoRainbow,
]