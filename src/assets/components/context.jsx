import { createContext } from "react";

export const tema = {
    claro:{
    font: "#1f1f1f",
    background: "#fff"
    },
    oscuro:{
        font: "#fff",
        background: "#333",
        border: "1px solid #5a5a5aff"
    }
}

const ThemeContext = createContext(tema.claro);

export default ThemeContext;