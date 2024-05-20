
export function stringIsNumber(stringOrNumber: string | undefined): boolean {
    return !isNaN(Number(stringOrNumber));
}
