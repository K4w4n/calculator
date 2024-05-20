import { useEffect, useState } from "react";
import { parseStringToCalculation } from "../util/parseStringToCalculation";
import { ICalculationItem } from "../interfaces/calculation";
import * as mathjs from "mathjs";
import { useExpression } from "./useExpression";

export function useCalculate() {

    const { expression, setExpression } = useExpression();
    const [result, setResult] = useState<string>();
    const calculation: ICalculationItem[] = parseStringToCalculation(expression);

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
        setExpression('');
        setResult(undefined);
    }

    function handleOnClickBackspace() {
        setExpression(expression.slice(0, -1));
    }

    function handleOnClickParentheses(key: string) {
        setExpression(`${expression}${key}`);
    }

    function handleOnClickNumber(key: number) {
        setExpression(`${expression}${key}`);
    }

    function handleOnClickOperation(key: string) {
        setExpression(`${expression}${key.replace('*', 'x')}`);
    }

    function handleOnClickEqual(key: string) {
        try {
            const result: number = mathjs.evaluate(expression.replaceAll('x', '*'));
            setResult(isNaN(result) ? 'error' : result.toString());
        } catch (error) {
            setResult('error');
        }
    }

    function handleOnClickPoint(_key: string) {
        setExpression(`${expression}.`);
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