import { useCalculate } from './hooks/useCalculate';
import { ICalculationItem } from './interfaces/calculation';
import { Button, ButtonGreen, ButtonOrange, ButtonRed, ButtonZero, Calculator, Buttons, Display, Calculation, Result, FontOrange, FontGray, Menu, BackspaceIconStyled } from './styled';

function App() {

  const {
    handleOnClickClear,
    handleOnClickParentheses,
    handleOnClickNumber,
    handleOnClickOperation,
    handleOnClickEqual,
    handleOnClickPoint,
    handleOnClickBackspace,
    calculation,
    result,
  } = useCalculate();

  return (
    <Calculator>

      <Display>

        <Calculation $hasResult={result !== undefined}>
          {
            calculation.map((calculation: ICalculationItem, i: number) => {

              return calculation.color === 'orange'

                ? <FontOrange key={i} children={calculation.children} />

                : <FontGray key={i} children={calculation.children} />

            })}
        </Calculation>

        <Result
          children={result}
          $hasError={result === 'error'} />

      </Display>

      <Menu>
        <BackspaceIconStyled onClick={handleOnClickBackspace} />
      </Menu>

      <Buttons>

        {/* Line 1 */}

        <ButtonRed
          children='C'
          onClick={() => handleOnClickClear('C')} />

        <Button
          children='('
          onClick={() => handleOnClickParentheses('(')} />

        <Button
          children=')'
          onClick={() => handleOnClickParentheses(')')} />

        <ButtonOrange
          children='/'
          onClick={() => handleOnClickOperation('/')} />

        {/* Line 2 */}

        {Array(3).fill(0).map((_, i: number) => (
          <Button
            children={7 + i}
            onClick={() => handleOnClickNumber(7 + i)}
            key={i} />
        ))}

        <ButtonOrange
          children='x'
          onClick={() => handleOnClickOperation('x')} />

        {/* Line 3 */}

        {Array(3).fill(0).map((_, i: number) => (
          <Button
            children={4 + i}
            onClick={() => handleOnClickNumber(4 + i)}
            key={i} />
        ))}

        <ButtonOrange
          children='-'
          onClick={() => handleOnClickOperation('-')} />

        {/* Line 4 */}
        {Array(3).fill(0).map((_, i: number) => (
          <Button
            children={1 + i}
            onClick={() => handleOnClickNumber(1 + i)}
            key={i} />
        ))}

        <ButtonOrange
          children='+'
          onClick={() => handleOnClickOperation('+')} />

        {/* Line 5 */}

        <ButtonZero
          children='0'
          onClick={() => handleOnClickNumber(0)} />

        <Button
          children='.'
          onClick={() => handleOnClickPoint('.')} />

        <ButtonGreen
          children='='
          onClick={() => handleOnClickEqual('=')} />

      </Buttons>

    </Calculator>
  );
}

export default App;
