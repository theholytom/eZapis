export function getItem(key: string) {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    } catch (error) {
        console.error("Error getting item from localStorage:", error);
    }
}

export function setItem(key: string, value: unknown) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error setting item in localStorage:", error);
    }
}

export function removeItem(key: string) {
    try {
        window.localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing item from localStorage:", error);
    }
}