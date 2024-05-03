import { Button, ButtonGreen, ButtonOrange, ButtonRed, ButtonZero, Calculator, Buttons, Display, Calculation, Result, FontOrange, FontGray } from './styled';

function App() {
  return (
    <Calculator>

      <Display>

        <Calculation>
          <FontGray children="45" />
          <FontOrange children='+' />
          <FontGray children="("/>
          <FontGray children="1250"/>
          <FontOrange children='x' />
          <FontGray children="100"/>
          <FontGray children=")"/>
          <FontOrange children='/' />
          <FontGray children="10"/>
        </Calculation>

        <Result children='12,545' />

      </Display>

      <Buttons>
        <ButtonRed children='C' />
        <Button children='(' />
        <Button children=')' />
        <ButtonOrange children='/' />
        <Button children='7' />
        <Button children='8' />
        <Button children='9' />
        <ButtonOrange children='x' />
        <Button children='4' />
        <Button children='5' />
        <Button children='6' />
        <ButtonOrange children='-' />
        <Button children='1' />
        <Button children='2' />
        <Button children='3' />
        <ButtonOrange children='+' />
        <ButtonZero children='0' />
        <Button children='.' />
        <ButtonGreen children='=' />
      </Buttons>

    </Calculator>
  );
}

export default App;
