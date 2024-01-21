import {Select} from './Select';
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Select',
  component: Select
};

export const SelectWithValue = () => {
  const [value, setValue] = useState('2')

  return (
    <>
      <Select onChange={setValue}
              value={value}
              items={[
                {value: '1', title: 'Moscow'},
                {value: '2', title: 'Tula'},
                {value: '3', title: 'Kaluga'}
              ]}
      />
    </>
  )
};

export const SelectWithoutValue = () => {
  const [value, setValue] = useState(null)
  return (
    <>
      <Select onChange={setValue}
              value={value}
              items={[
                {value: '1', title: 'Moscow'},
                {value: '2', title: 'Tula'},
                {value: '3', title: 'Kaluga'}
              ]}
      />
    </>
  )

}