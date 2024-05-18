import { styled } from "styled-components";
import colors from "./colors";

export const Calculator = styled.div`
    background-color: ${colors.white};
    padding: 2rem;
    border-radius: 1rem;
`;

export const Display = styled.div`
    background-color: ${colors.white};
    height: 8rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: end;
    border-bottom: 1px solid ${colors.grayLight};
`;

export const Calculation = styled.div<{
    $hasResult: boolean,
}>`
    transition: font-size 100ms linear;
    height: 2rem;
    padding-bottom: 1rem;
    font-size: ${({ $hasResult }) => $hasResult ? '1.5rem' : '3rem'};
`;

export const FontOrange = styled.span`
    margin: 0.1rem;
    color: ${colors.orangeLight};
`;

export const FontGray = styled.span`
    margin: 0.1rem;
    color: ${colors.gray};
`;

export const Result = styled.div<{
    $hasError: boolean,
}>`
    font-size: 3rem;
    color: ${({ $hasError }) => $hasError? colors.red : colors.grayDark};
`;

export const Buttons = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    width: 500px;
    height: 600px;
`;

export const Button = styled.button`
    transition: 150ms linear background-color;
    &:not(:disabled) {
        cursor: pointer;
    }
    background-color: ${colors.semiWhite};
    color: ${colors.gray};
    border-radius: 2.5rem;
    font-size: 2.5rem;
    font-weight: 400;
    &:hover:not(:disabled) {
        background-color: ${colors.grayLight};
    }
    &:disabled {
        background-color: ${colors.white};
    }
`;

export const ButtonOrange = styled(Button)`
    background-color: ${colors.orange};
    color: ${colors.white};
    &:hover:not(:disabled) {
        background-color: ${colors.orangeDark};
    }
    &:disabled{
        background-color: ${colors.orangeLight};
    }
`;


export const ButtonGreen = styled(Button)`
    background-color: ${colors.green};
    color: ${colors.white};
    &:hover:not(:disabled) {
        background-color: ${colors.greenDark};
    }
    &:disabled{
        background-color: ${colors.greenLight};
    }
`;

export const ButtonRed = styled(Button)`
    background-color: ${colors.redLight};
    color: ${colors.red};
    &:hover:not(:disabled) {
        color: ${colors.redLight};
        background-color: ${colors.red};
    }
`;

export const ButtonZero = styled(Button)` 
    grid-column-start: 1;
    grid-column-end: 3;
`;