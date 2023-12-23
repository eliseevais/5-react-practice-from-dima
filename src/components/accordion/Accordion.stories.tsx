import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
  component: Accordion,
};

const onChangeHandler = action('onChangeHandler')

export const CollapsedAccordion = () => {
  return (
    <Accordion titleValue={'Menu Collapsed Accordion'}
               collapsed={true}
               onChange={onChangeHandler}
    />
  )
};

export const OpenedAccordion = () => {
  return (
    <Accordion titleValue={'Menu Open Accordion'}
               collapsed={false}
               onChange={() => {
               }}
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
    />
  )
};