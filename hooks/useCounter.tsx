import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
      if(counter === 999) return;
        setCounter(counter + 1);
    }

    const decrement = () => {
      if(counter === 1) return;
        setCounter(counter - 1);
    }


  return {
    //Properties
    counter,

    //Methods
    increment, 
    decrement,
  }
};
