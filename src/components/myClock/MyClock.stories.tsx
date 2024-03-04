import React from "react";
import {Clock} from "./MyClock";

export default {
  title: 'MyClock',
  component: Clock
};

type ClockPropsType = {

}
export const MyClockBaseExample = (props: ClockPropsType) => {
  return (
    <Clock/>
  )
};
