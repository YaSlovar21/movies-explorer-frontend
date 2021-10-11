import React from 'react';

export const useLocalStorageList = (key,defaultValue) => {
    const [ state, setState ] = React.useState(()=>JSON.parse(localStorage.getItem(key)||defaultValue))
    React.useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])
    return [ state, setState ]
}

