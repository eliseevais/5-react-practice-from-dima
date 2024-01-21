import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
  component: Accordion,
};

const onChangeHandler = action('accordion mode change event fired');
const onClickHandler = action('some item was clicked');

export const CollapsedAccordion = () => {
  return (
    <Accordion titleValue={'Menu Collapsed Accordion'}
               collapsed={true}
               onChange={onChangeHandler}
               items={[]}
               onClick={onClickHandler}
    />
  )
};

export const OpenedAccordion = () => {
  return (
    <Accordion titleValue={'Menu Open Accordion'}
               collapsed={false}
               onChange={() => {
               }}
               items={[{title: 'Dina', value: 1}, {title: 'Katya', value: 2}, {title: 'Sveta', value: 3}, {title: 'Viktor', value: 4}]}
               onClick={onClickHandler}
    />
  )
};

export const DemoAccordion = () => {

  const [collapsed, setCollapsed] = useState(false)
  return (
    <Accordion titleValue={'Menu Demo Accordion'}
               collapsed={collapsed}
               onChange={() => {
                 setCollapsed(!collapsed)
               }}
               items={[
                 {title: 'Dina', value: 1},
                 {title: 'Katya', value: 2},
                 {title: 'Sveta', value: 3},
                 {title: 'Viktor', value: 4}
               ]}
               // onClick={onClickHandler}
               onClick={(value) => alert(`user ${value} should be happy`)}
    />
  )
};