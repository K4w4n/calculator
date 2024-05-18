import { useState } from "react";
import { parseStringToCalculation } from "../util/parseStringToCalculation";
import { ICalculationItem } from "../interfaces/calculation";
import * as mathjs from "mathjs"

export function useCalculate() {

    const [stringCalculation, setStringCalculation] = useState<string>('');
    const [result, setResult] = useState<string>();
    const calculation: ICalculationItem[] = parseStringToCalculation(stringCalculation);

    function handleOnClickClear(_key: string) {
        setStringCalculation('');
        setResult(undefined);
    }

    function handleOnClickParentheses(key: string) {
        setStringCalculation(`${stringCalculation}${key}`);
    }

    function handleOnClickNumber(key: number) {
        setStringCalculation(`${stringCalculation}${key}`);
    }

    function handleOnClickOperation(key: string) {
        setStringCalculation(`${stringCalculation}${key}`);
    }

    function handleOnClickEqual(key: string) {
        // eslint-disable-next-line no-eval
        try {
            setResult(mathjs.evaluate(stringCalculation.replaceAll('x', '*')));
        } catch (error) {
            setResult('error');
        }
    }

    function handleOnClickPoint(key: string) {
        setStringCalculation(`${stringCalculation}${key}`);
    }

    return {
        handleOnClickClear,
        handleOnClickParentheses,
        handleOnClickNumber,
        handleOnClickOperation,
        handleOnClickEqual,
        handleOnClickPoint,
        calculation,
        result,
    };
}