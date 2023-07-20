import { useState } from "react";

export const useCount = (initial = 1, stock, minimo = 1) => {
  const [count, setCount] = useState(initial);

  const restar = () => {
    count > minimo && setCount(count - 1);
  };
  const sumar = () => {
    count < stock && setCount(count + 1);
  };
  const reset = () => {
    setCount(initial);
  };

  return { count, restar, sumar, reset };
};
