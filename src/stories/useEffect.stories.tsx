import React, {useEffect, useState} from "react";

export default {
  title: 'useEffect demo'
};

export const SimpleExampleUseEffect = () => {

  const [counter, setCounter] = useState<number>(1);
  const [fake, setFake] = useState<number>(1);

  console.log('SimpleExampleUseEffect')

  useEffect(() => {
    console.log('useEffect every render')
    document.title = counter.toString()
  });

  useEffect(() => {
    console.log('useEffect only first render (componentDidMount)')
    document.title = counter.toString()
  }, []);

  useEffect(() => {
    console.log('useEffect first render and every counter change')
    document.title = counter.toString()
  }, [counter]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>counter+</button>
      <div> Result : {counter} </div>
      <hr/>
      <button onClick={() => setFake(fake + 1)}>fake+</button>
      <div> Fake: {fake} </div>
    </>
  )
}

export const SetTimeOutExampleUseEffect = () => {

  const [counter, setCounter] = useState<number>(1);
  const [fake, setFake] = useState<number>(1);

  console.log('SetTimeOutExampleUseEffect')

  useEffect(() => {
    setInterval(() => {
      console.log('tik: ' + counter)
      setCounter(state => state + 1)
    }, 1000)
  }, []);

  return (
    <>
      Hello, counter: {counter} - fake: {fake}
    </>
  )
};

export const Clock = () => {

  useEffect(() => {
    setInterval(() => {
      let now = new Date();
      let clock = document.getElementById("clock");
      clock.innerHTML = now.toLocaleTimeString();
    },1000);
  }, []);

  return (
    <>
      <div id="clock"></div>
    </>
  )
}
