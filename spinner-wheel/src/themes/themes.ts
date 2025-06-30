export type Theme = {
  isCSS: boolean,
  cssName: string,
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
  numColors: 10,
  // colors: {
  //   primary: 'turquoise',
  //   secondary: 'teal',
  // }
}

const testTheme: Theme = {
  isCSS: true,
  cssName: 'testTheme',
  numColors: 7,
}

const lavender: Theme = {
  isCSS: false,
  cssName: 'lavenderHue',
  hues: [
    '260'
  ],

}

export const themeList = [
  defaultTheme,
  testTheme,
  lavender,
]