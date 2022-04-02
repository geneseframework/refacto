export function percentage(part: number, total: number): number {
    return Math.round(part * 10000 / total) / 100;
}
