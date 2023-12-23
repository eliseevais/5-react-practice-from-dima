import React, {useState} from "react";
import {UncontrolledRating, } from "./UncontrolledRating";
import { action } from '@storybook/addon-actions';


export default {
  component: UncontrolledRating,
};

const callback = action('rating was changed inside component');

export const UncontrolledRatingEmpty = () => {
  return (
    <UncontrolledRating defaultValue={0} onChange={callback}/>
  )
};

export const UncontrolledRating1 = () => {
  return (
    <UncontrolledRating defaultValue={1} onChange={callback}/>
  )
};

export const UncontrolledRating2 = () => {
  return (
    <UncontrolledRating defaultValue={2} onChange={callback}/>
  )
};

export const UncontrolledRating3 = () => {
  return (
    <UncontrolledRating defaultValue={3}  onChange={callback}/>
  )
};

export const UncontrolledRating4 = () => {
  return (
    <UncontrolledRating defaultValue={4}  onChange={callback}/>
  )
};

export const UncontrolledRating5 = () => {
  return (
    <UncontrolledRating defaultValue={5} onChange={callback}/>
  )
};