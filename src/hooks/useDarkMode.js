import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    const [changeMode, setChangeMode] = useLocalStorage('isDark');
    
    useEffect(() => {
        const body = document.querySelector('body');
        if (changeMode) {
            // add dark-mode class to body element
            body.classList.add('dark-mode');
        } else {
            // remove dark-mode class from body element
            body.classList.remove('dark-mode');
        }
    },[changeMode])
    return [changeMode, setChangeMode];
}
