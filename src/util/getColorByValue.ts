import { Colors } from "../interfaces/calculation";
import { stringIsNumber } from "./stringIsNumber";

export function getColorByValue(value: string): Colors {

    const greyChars: string[] = ['(', ')', '.'];
    const orangeChars: string[] = ['+', '-', 'x', '/'];

    if (stringIsNumber(value) || greyChars.includes(value)) {
        return 'grey';
    }
    else if (orangeChars.includes(value)) {
        return 'orange';
    } else {
        return 'red';
    }

}
