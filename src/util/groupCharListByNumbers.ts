import { stringIsNumber } from "./stringIsNumber";

export function groupCharListByNumbers(charList: string[]): string[] {
    return charList.reduce((
        acc: string[],
        curr: string,
        i: number,
        charList: string[]
    ) => {

        const currentStringIsNumber = stringIsNumber(curr);
        const previousStringIsNumber = stringIsNumber(charList[i - 1]);
        const currIsDot = curr === '.';
        const concatNumber = currentStringIsNumber && previousStringIsNumber;

        if (concatNumber || currIsDot) {
            acc[acc.length - 1] += curr;
        } else {
            acc.push(curr);
        }
        return acc;
    }, []);
}
