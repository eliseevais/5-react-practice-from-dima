import React, {useState} from "react";
import {OnOff} from "./OnOff";
import { action } from '@storybook/addon-actions';

export default {
  component: OnOff,
};

const callback = action('clicked on or off')

export const OnMode = () => {
  return (
    <OnOff on={true} onChange={callback}
    />
  )
};

export const OffMode = () => {
  return (
    <OnOff on={false} onChange={callback}
    />
  )
};

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return (
    <OnOff on={value} onChange={setValue}
    />
  )
};

