import { createContext } from "react";

const TextContext = createContext("");

export const TextProvider = TextContext.Provider;
export const TextConsumer = TextContext.Consumer;

export default TextContext;
