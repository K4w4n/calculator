import { stringIsNumber } from "./stringIsNumber";

export function groupCharListByNumbers(charList: string[]): string[] {
    return charList.reduce((
        acc: string[],
        curr: string,
        i: number,
        charList: string[]
    ) => {

        const previous: string = charList[i - 1];
        const currentIsNumber: boolean = stringIsNumber(curr);
        const previousIsNumber: boolean = stringIsNumber(previous);
        const currentIsDot: boolean = curr === ',';
        const previousIsDot: boolean = previous === ',';

        const isNumber
            = (previousIsNumber && currentIsNumber)
            || (previousIsNumber && currentIsDot)
            || (previousIsDot && currentIsNumber);

        if (isNumber) acc[acc.length - 1] += curr;
        else acc.push(curr);

        return acc;
    }, []);
}
