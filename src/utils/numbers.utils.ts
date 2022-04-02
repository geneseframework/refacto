export function percentage(part: number, total: number): number {
    return total ? Math.round(part * 10000 / total) / 100 : 0;
}
