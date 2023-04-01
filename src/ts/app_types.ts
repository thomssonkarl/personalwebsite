export type ColorValueHex = `#${string}` 

export interface TerminalTheme {
    themeBGColor: ColorValueHex 
    themeToolbarColor: ColorValueHex 
    themeColor: ColorValueHex
    themePromptColor: ColorValueHex
}

interface Commands {
    help: () => JSX.Element;
    clear: string;
    aboutme: string;
  }
  
type RedirectFunction = () => void;

type Command = (() => JSX.Element) | string;

export type CommandsExtended = Commands & {
    [key: string]: Command | RedirectFunction;
};