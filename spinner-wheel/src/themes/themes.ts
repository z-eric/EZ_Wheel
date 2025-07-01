export type Theme = {
  isCSS: boolean,
  cssName: string,
  niceName: string,
  numColors?: number,
  hues?: string[],
  // colors?: {
  //   primary?: string,
  //   secondary?: string,
  //   trim?: string,
  //   highlight?: string,
  //   selected?: string,
  // }
}

const defaultTheme: Theme = {
  isCSS: true,
  cssName: 'defaultTheme',
  niceName: 'Standard',
  numColors: 10,
  // colors: {
  //   primary: 'turquoise',
  //   secondary: 'teal',
  // }
}

const watermelonTheme: Theme = {
  isCSS: true,
  cssName: 'watermelonTheme',
  niceName: 'Watermelon',
  numColors: 9,
}

const lavender: Theme = {
  isCSS: false,
  cssName: 'lavenderHue',
  niceName: 'Purple Gradient',
  hues: [
    '260'
  ],

}

export const themeList = [
  defaultTheme,
  watermelonTheme,
  lavender,
]