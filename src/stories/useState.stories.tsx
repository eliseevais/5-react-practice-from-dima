import React, {useMemo, useState} from "react";

export default {
  title: 'useState demo'
};

function generateData() {
  console.log('generateData is bad');
  return 1
}

const changer = (state: number) => {
  console.log('changer')
  return state + 1
}

export const Example1 = () => {
  // const initValue = useMemo(generateData, []);
  // реакт запоминает возвращаемое значение функции в useState, работает как
  // useMemo

  const [counter, setCounter] = useState<number>(generateData);

  return (
    <>
      <button onClick={() => setCounter(changer)}>+</button>
      <div>
        Result : {counter}
      </div>
    </>
  )
}