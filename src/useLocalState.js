// hook to combine react state with local storage

import { useState, useEffect } from "react"

function useLocalState(key) {
    const [state, setState] = useState(() => {
        return window.localStorage.getItem(key);
    });
    
    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state]);
    
    return [state, setState];
}

export default useLocalState;