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

export const SetIntervalExampleUseEffect = () => {

  const [counter, setCounter] = useState<number>(1);
  const [fake, setFake] = useState<number>(1);

  console.log('SetTimeOutExampleUseEffect')

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('tik: ' + counter)
      setCounter(state => state + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
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
    }, 1000);
  }, []);

  return (
    <>
      <div id="clock"></div>
    </>
  )
}

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState<number>(1);
  console.log('Component rendered with ' + counter)

  useEffect(() => {
    console.log('Effect occurred ' + counter)
    return () => {
      console.log('RESET EFFECT ' + counter)
    }
  }, [counter]);

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={increaseCounter}>+</button>
    </>
  )
};

export const KeysTrackerExample = () => {
  const [text, setText] = useState('');
  console.log('Component rendered with ' + text);

  const handler = (event: KeyboardEvent) => {
    console.log(event.key)
    setText(text + event.key)
  }

  useEffect(() => {
    window.addEventListener('keypress', handler)

    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [text]);

  return (
    <div>Text: {text}</div>
  )
};

export const SetTimeOut3secondsExample = () => {
  const [text, setText] = useState('');
  console.log('Component rendered with ' + text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('TIMEOUT EXPIRED')
      setText('3 seconds passed')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [text]);

  return (
    <div>Text: {text}</div>
  )
};
