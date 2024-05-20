import { stringIsNumber } from "./stringIsNumber";

const formatter = new Intl.NumberFormat('pt-BR');

export function addPointInMilhar(numberItem: string | undefined): string {

    return stringIsNumber(numberItem)
        ? formatter.format(Number(numberItem))
        : numberItem || '';
}
