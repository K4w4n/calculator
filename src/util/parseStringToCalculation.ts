import { groupCharListByNumbers } from "./groupCharListByNumbers";
import { getColorByValue } from "./getColorByValue";
import { ICalculationItem } from "../interfaces/calculation";

export function parseStringToCalculation(calculationStr: string): ICalculationItem[] {

    const charList: string[] = Array.from(calculationStr);
    const charListGrouped: string[] = groupCharListByNumbers(charList);

    const calculation: ICalculationItem[] = charListGrouped.map(char => {
        return {
            color: getColorByValue(char),
            children: char,
        };
    });
    return calculation;;
}
