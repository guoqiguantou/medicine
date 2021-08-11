import { useEffect, useRef } from 'react';

//忽略useEffect组件初次渲染
const useEffect_ignoreFirst = (effect, deps) => {
    const initializedRef = useRef(false)
    useEffect(() => {
        if (initializedRef.current) {
            let result = effect();
            if (result) return result;
        } else {
            initializedRef.current = true;
        }
    }, deps)
}
export default useEffect_ignoreFirst