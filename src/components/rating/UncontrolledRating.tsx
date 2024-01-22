import React, {useState} from 'react';
import {RatingValuePropsType} from "./Rating";

type UncontrolledRatingPropsType = {
  // value: number;
  defaultValue?: RatingValuePropsType;
  onChange: (value: RatingValuePropsType) => void;
}

const UncontrolledRatingSecret = (props: UncontrolledRatingPropsType) => {
  console.log('Rating is rendering');

  let [value, setValue] = useState<RatingValuePropsType>(props.defaultValue ? props.defaultValue : 0);

  return (
    <div>
      <Star selected={value > 0} setValue={() => {setValue(1);  props.onChange(1); }} />
      <Star selected={value > 1} setValue={() => {setValue(2); props.onChange(2);}} />
      <Star selected={value > 2} setValue={() => {setValue(3); props.onChange(3); }} />
      <Star selected={value > 3} setValue={() => {setValue(4); props.onChange(4);}} />
      <Star selected={value > 4} setValue={() => {setValue(5); props.onChange(5);}} />
    </div>
  );
};

export const UncontrolledRating = React.memo(UncontrolledRatingSecret);

type StarPropsType = {
  selected: boolean;
  setValue: () => void;
};

function Star(props: StarPropsType) {
  console.log('Start is rendering');
  return (
    <span onClick={() => {
      props.setValue()
    }}>
      {props.selected ? <b>star </b> : 'star '}
    </span>
  )
};
