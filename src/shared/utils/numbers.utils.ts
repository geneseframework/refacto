export function percentage(part: number | undefined, total: number | undefined): number | undefined {
    if (part === undefined || !total) {
        return undefined;
    }
    return total ? Math.round(part * 10000 / total) / 100 : 0;
}

export function isPositive(nb: number | undefined): nb is number {
    return typeof nb === 'number' && nb > 0;
}
