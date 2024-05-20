import { groupCharListByNumbers } from "./groupCharListByNumbers";
import { getColorByValue } from "./getColorByValue";
import { ICalculationItem } from "../interfaces/calculation";
import { addPointInMilhar } from "./addPointInMilhar";

export function parseStringToCalculation(calculationStr: string): ICalculationItem[] {

    const charList: string[] = Array.from(calculationStr.replaceAll('.', ','));
    const charListGrouped: string[] = groupCharListByNumbers(charList).map(addPointInMilhar);

    const calculation: ICalculationItem[] = charListGrouped.map(char => {
        return {
            color: getColorByValue(char),
            children: char,
        };
    });
    return calculation;;
}
