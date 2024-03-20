import React, {useEffect, useState} from "react";
import './MyClockWithDima.css'

type MyClockWithDimaPropsType = {
  mode?: 'digital' | 'analog'
};

const getTwoDigitsString = (num: number) => num < 10
  ? '0' + num
  : num;


type ClockViewPropsType = {
  date: Date
}

export const DigitalViewMode: React.FC<ClockViewPropsType> = ({date}) => {
  return (
    <div className={"myClock"}>
      <span>{getTwoDigitsString(date.getHours())}</span>
      :
      <span>{getTwoDigitsString(date.getMinutes())}</span>
      :
      <span>{getTwoDigitsString(date.getSeconds())}</span>
    </div>
  )
}

export const AnalogViewMode: React.FC<ClockViewPropsType> = ({date}) => {

  const secondsStyle = {
    transform: `rotate(${date.getSeconds() * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotate(${date.getMinutes() * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${date.getHours() * 30}deg)`
  };

  return (
    <>
      <div className={"clock"}>
        <div className={"analog-clock"}>
          <div className={"dial seconds"} style={secondsStyle}/>
          <div className={"dial minutes"} style={minutesStyle}/>
          <div className={"dial hours"} style={hoursStyle}/>
        </div>
      </div>

    </>
  )
}


export const MyClockWithDima = (props: MyClockWithDimaPropsType) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('MyClockHomework tik-tik')
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, []);

  let viewMode;
  switch (props.mode) {
    case 'analog':
      viewMode = <AnalogViewMode date={date}/>
      break;
    case 'digital':
    default:
      viewMode = <DigitalViewMode date={date}/>
  }

  return <>{viewMode}</>
}