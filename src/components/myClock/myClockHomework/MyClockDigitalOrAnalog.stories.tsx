import React from "react";
import {ClockDigitalOrAnalog} from "./MyClockDigital";

export default {
  title: 'MyClockHomework',
  component: ClockDigitalOrAnalog
};

type ClockPropsType = {

}
export const MyClockDigitalOrAnalogHomework = (props: ClockPropsType) => {
  return (
    <ClockDigitalOrAnalog/>
  )
};
