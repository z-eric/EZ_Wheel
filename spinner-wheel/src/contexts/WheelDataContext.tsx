import { createContext } from "react";

export interface WheelOption{
    label: string, 
    value: number,
}

const fallbackOptions: WheelOption[] = [
  {
    label: 'Foo',
    value: 1,
  },
  {
    label: 'Bar',
    value: 1,
  }
]

export const WheelDataContext = createContext<WheelOption[]>(fallbackOptions);