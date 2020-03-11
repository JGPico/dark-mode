import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    
    useEffect(() => {
        if (darkMode) {
            console.log("Hmm");
        }
    },[])
}

export default useDarkMode;