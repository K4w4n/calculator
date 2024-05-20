import { useEffect, useState } from "react";
import { parseStringToCalculation } from "../util/parseStringToCalculation";
import { ICalculationItem } from "../interfaces/calculation";
import * as mathjs from "mathjs";

export function useCalculate() {

    const [stringCalculation, setStringCalculation] = useState<string>('');
    const [result, setResult] = useState<string>();
    const calculation: ICalculationItem[] = parseStringToCalculation(stringCalculation);

    useEffect(() => {

        document.addEventListener('keydown', keyHandler);

        return () => document.removeEventListener('keydown', keyHandler);

    });

    function keyHandler(e: KeyboardEvent) {

        e.preventDefault();

        const keyNumber: number = Number(e.key);

        if (!isNaN(keyNumber)) handleOnClickNumber(Number(e.key));

        else if (['(', ')'].includes(e.key)) handleOnClickParentheses(e.key);

        else if (['+', '-', '*', '/'].includes(e.key)) handleOnClickOperation(e.key);

        else if (['Enter', '='].includes(e.key)) handleOnClickEqual(e.key);

        else if (['.', ','].includes(e.key)) handleOnClickPoint(e.key);

        else if (e.key === 'Backspace') handleOnClickBackspace();

        else if (e.key === 'Delete') handleOnClickClear(e.key);

    }

    function handleOnClickClear(_key: string) {
        setStringCalculation('');
        setResult(undefined);
    }

    function handleOnClickBackspace() {
        setStringCalculation(stringCalculation.slice(0, -1));
    }

    function handleOnClickParentheses(key: string) {
        setStringCalculation(`${stringCalculation}${key}`);
    }

    function handleOnClickNumber(key: number) {
        setStringCalculation(`${stringCalculation}${key}`);
    }

    function handleOnClickOperation(key: string) {
        setStringCalculation(`${stringCalculation}${key.replace('*', 'x')}`);
    }

    function handleOnClickEqual(key: string) {
        // eslint-disable-next-line no-eval
        try {
            const result: number = mathjs.evaluate(stringCalculation.replaceAll('x', '*'));
            setResult(isNaN(result) ? 'error' : result.toString());
        } catch (error) {
            setResult('error');
        }
    }

    function handleOnClickPoint(_key: string) {
        setStringCalculation(`${stringCalculation}.`);
    }

    return {
        handleOnClickClear,
        handleOnClickBackspace,
        handleOnClickParentheses,
        handleOnClickNumber,
        handleOnClickOperation,
        handleOnClickEqual,
        handleOnClickPoint,
        calculation,
        result,
    };
}