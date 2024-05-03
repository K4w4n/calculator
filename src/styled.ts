import { styled } from "styled-components";
import colors from "./colors";

export const Calculator = styled.div`
    background-color: ${colors.white};
    padding: 2rem;
    border-radius: 1rem;
`;

export const Display = styled.div`
    background-color: ${colors.white};
    padding-bottom: 3rem;
    text-align: end;
`;

export const Calculation = styled.div`
    padding-bottom: 1rem;
`;

export const FontOrange = styled.span`
    margin: 0.1rem;
    color: ${colors.orangeLight};
`;

export const FontGray = styled.span`
    margin: 0.1rem;
    color: ${colors.gray};
`;

export const Result = styled.div`
    font-size: 3rem;
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
    cursor: pointer;
    background-color: ${colors.semiWhite};
    color: ${colors.gray};
    border-radius: 2.5rem;
    font-size: 2.5rem;
    font-weight: 400;
    &:hover {
        background-color: ${colors.grayLight};
    }
`;

export const ButtonOrange = styled(Button)`
    background-color: ${colors.orange};
    color: ${colors.white};
    &:hover {
        background-color: ${colors.orangeDark};
    }
`;


export const ButtonGreen = styled(Button)`
    background-color: ${colors.green};
    color: ${colors.white};
    &:hover {
        background-color: ${colors.greenDark};
    }
`;

export const ButtonRed = styled(Button)`
    background-color: ${colors.redLight};
    color: ${colors.red};
    &:hover {
        color: ${colors.redLight};
        background-color: ${colors.red};
    }
`;

export const ButtonZero = styled(Button)` 
    grid-column-start: 1;
    grid-column-end: 3;
`;