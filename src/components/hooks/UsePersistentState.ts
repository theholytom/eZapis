import { useState } from "react";
import { useEffect } from "react";
import { getItem, setItem } from "../utils/LocalStorage";

export function usePersistentState<T>(key: string, initialValue: T) {
    const [value, setValue] = useState(() => {
        const item = getItem(key);
        return (item as T) || initialValue;
    });

    useEffect(() => {
        setItem(key, value);
    }, [value]);

    return [value, setValue] as const;
}