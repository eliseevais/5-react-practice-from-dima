import React, {MouseEventHandler, useEffect, useState} from "react";
import styles from './MyClock.module.css';
import {MyClockAnalog} from "./MyClockAnalog";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;

type MyClockPropsType = {};

const getTwoDigitsString = (num: number) => num < 10
  ? '0' + num
  : num;

export const MyClock: React.FC = (props: MyClockPropsType) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('MyClock tik-tik')
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, []);

  const secondsString = getTwoDigitsString(date.getSeconds());
  const minutesString = getTwoDigitsString(date.getMinutes());
  const hoursString = getTwoDigitsString(date.getHours());

  return (
    <div className={styles.myClock}>
      <span>{hoursString}</span>
      :
      <span>{minutesString}</span>
      :
      <span>{secondsString}</span>
    </div>
  )
}

type ClockPropsType = {

}

export const Clock = (props: ClockPropsType) => {

  const [isAnalogValue, setIsAnalogValue] = useState<boolean>(true);
  const onCallbackIsAnalog = () => {
    setIsAnalogValue(!isAnalogValue)
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={onCallbackIsAnalog}>change view mode</button>
      {isAnalogValue
        ? <MyClockAnalog/>
        : <MyClock/>
      }
    </div>
  )
}