import React from 'react';

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  value: RatingValuePropsType;
  onClick: (value: RatingValuePropsType) => void;
};

const RatingSecret = (props: RatingPropsType) => {
  console.log('Rating is rendering');

  return (
    <div>
      <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
      <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
      <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
      <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
      <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>
  );
};

export const Rating = React.memo(RatingSecret)

type StarPropsType = {
  selected: boolean;
  onClick: (value: RatingValuePropsType) => void;
  value: RatingValuePropsType;
}

function Star(props: StarPropsType) {
  console.log('Start is rendering');
  return (
    <span onClick={() => {props.onClick(props.value)}}>
      {props.selected ? <b>star </b> : 'star '}
    </span>
  )
}
