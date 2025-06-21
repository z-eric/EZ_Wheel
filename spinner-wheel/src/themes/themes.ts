export type Theme = {
  wedgeColors: string[],
  mainColors: {
    primary: string,
    secondary: string,
    trim?: string,
    highlight?: string,
    selected?: string,
  }
}

export const defaultTheme: Theme = {
  wedgeColors: [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
  ],
  mainColors: {
    primary: 'turquoise',
    secondary: 'teal',
  }
}

export const themeList = [
  defaultTheme,
]