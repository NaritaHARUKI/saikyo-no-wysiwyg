type ColorKeys = "red" | "blue" | "green" | "yellow" | "magenta" | "cyan" | "white" | "black"

type Config = {
    bold: {
      start: string;
      end: string;
    };
    color: {
      [colorName: string]: {
        start: string;
        end: string;
      };
    };
    italic: {
      start: string;
      end: string;
    };
  };
  
export type { ColorKeys, Config };
  