import { useState, useEffect } from "react";

// хук возвращает ширину экрана через пол секунды
// таким образом в компоненте, где он монитируется знаем ширину экрана

export default function useWindowResize() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setTimeout(setWindowWidth(window.innerWidth), 500);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return windowWidth;
}