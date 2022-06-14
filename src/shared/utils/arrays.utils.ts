export function isNotEmpty<T>(arr: T[] | undefined): arr is T[] {
    return Array.isArray(arr) && arr.length > 0;
}

export function isEmpty<T>(arr: T[] | undefined): arr is T[] {
    return Array.isArray(arr) && arr.length === 0;
}

export function add(arr: number[] | undefined): number {
    if (!Array.isArray(arr)) {
        return 0;
    } else {
        return arr.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        );
    }
}
