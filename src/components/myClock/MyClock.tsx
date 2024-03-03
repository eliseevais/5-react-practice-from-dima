import React, {useEffect, useState} from "react";
import styles from './MyClock.module.css';

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
    <div className={styles.clock}>
      <span>{hoursString}</span>
      :
      <span>{minutesString}</span>
      :
      <span>{secondsString}</span>
    </div>
  )
}