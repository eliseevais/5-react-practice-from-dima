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
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('');
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setParentValue(event.currentTarget.value)
  }
  return (
    <>
      <input value={parentValue} onChange={onChangeHandler}/>
    </>
  )
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setParentValue(event.currentTarget.checked)
  }
  return (
      <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
  )
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2');
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(event.currentTarget.value)
  }
  return (
    <select value={parentValue} onChange={onChangeHandler}>
      <option>none</option>
      <option value={'1'}>Minsk</option>
      <option value={'2'}>Moscow</option>
      <option value={'3'}>Kiev</option>
    </select>
  )
};

export const ControlledInputWithFixedValue = () => <input
  value={'it-incubator.by'}/>;
