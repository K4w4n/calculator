import { useParameters } from './useParameters';

export function useExpression() {
  const [parameters, setParameters] = useParameters();

  return {
    expression: parameters.expression || '',
    setExpression(expression: string) {
      setParameters({ ...parameters, expression });
    },
  };

}
