import React, {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import { action } from '@storybook/addon-actions';

export default {
  component: UncontrolledOnOff,
};

const callback = action('clicked on or off')

export const OnMode = () => {
  return (
    <UncontrolledOnOff defaultOn={true} onChange={callback}
    />
  )
};

export const OffMode = () => {
  return (
    <UncontrolledOnOff defaultOn={false} onChange={callback}
    />
  )
};

export const BugMode = () => {
  return (
    <div>Unsync when change defaultValue when already rendered</div>
  )
};

export const DefaultInputValue = () => {
  return (
    <>
      <input value='yo' readOnly={true}/>
    </>
  )
};