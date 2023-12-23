import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React, {useState} from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
  component: UncontrolledAccordion,
};

const onChangeHandler = action('onChangeHandler')

export const UncontrolledAccordionMode = () => {
  return (
    <UncontrolledAccordion titleValue={'UncontrolledAccordionMode'}
    />
  )
};