export type Colors = 'grey' | 'orange' | 'red';

export interface ICalculationItem {
    color: Colors,
    children: string | number,
};