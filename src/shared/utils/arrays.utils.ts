export function isNotEmpty<T>(arr: T[] | undefined): arr is T[] {
    return Array.isArray(arr) && arr.length > 0;
}

export function isEmpty<T>(arr: T[] | undefined): arr is T[] {
    return Array.isArray(arr) && arr.length === 0;
}
