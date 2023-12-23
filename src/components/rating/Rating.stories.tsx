import {Rating, RatingValuePropsType} from './Rating';
import React, {useState} from "react";

export default {
  component: Rating,
};

export const RatingEmpty = () => {
  return (
    <Rating value={0} onClick={x => x}
    />
  )
};

export const Rating1 = () => {
  return (
    <Rating value={1} onClick={x => x}
    />
  )
};

export const Rating2 = () => {
  return (
    <Rating value={2} onClick={x => x}
    />
  )
};

export const Rating3 = () => {
  return (
    <Rating value={3} onClick={x => x}
    />
  )
};

export const Rating4 = () => {
  return (
    <Rating value={4} onClick={x => x}
    />
  )
};

export const Rating5 = () => {
  return (
    <Rating value={5} onClick={x => x}
    />
  )
};

export const RatingChanging = () => {
  const [rating, setRating] = useState<RatingValuePropsType>(3)
  return (
    <Rating value={rating} onClick={setRating}
    />
  )
};