import { createContext } from "react";
import '../../darkmode/main.css'

export const themes = {
    dark: "",
    light: "white-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => { },
});