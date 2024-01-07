import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnOff} from "../components/onOff/OnOff";

export default {
  title: 'input',
  // component: OnOff
};

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
  let [value, setValue] = useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let actialValue = event.currentTarget.value;
    setValue(actialValue);
  }

  return (
    <>
      <input onChange={onChange}/>- {value}
    </>
  )
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  let [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>();
  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }

  return (
    <><input ref={inputRef}/>
      <button onClick={save}>save</button>
      - {value}
    </>
  )
}
export const ControlledInput = () => <input value={'it-incubator.by'}/>;
