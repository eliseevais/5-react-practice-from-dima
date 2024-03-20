import React from "react";
import {MyClockWithDima} from "./MyClockWithDima";

export default {
  title: 'MyClockWithDima',
  component: MyClockWithDima
};

export const MyClockDigitalExample = () => {
  return (
    <MyClockWithDima mode={'digital'}/>
  )
};

export const MyClockAnalogExample = () => {
  return (
    <MyClockWithDima mode={'analog'}/>
  )
};
