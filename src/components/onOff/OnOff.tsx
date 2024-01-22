import React, {useState} from 'react';

type PropsType = {
  on: boolean;
  onChange: (on: boolean) => void;
};

const OnOffSecret = (props: PropsType) => {
  console.log('on' + props.on);
  console.log('onBTN:' + props.on);

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    margin: '5px 0 0 5px',
    padding: '2px',
    backgroundColor: props.on? 'green' : 'white',
  };
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    margin: '5px 0 0 5px',
    padding: '2px',
    backgroundColor: props.on ? 'white' : 'red',
  };
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: props.on ? 'green' : 'red',

  };

  const onClicked = () => {
    props.onChange(true)
  };
  const offClicked = () => {
    props.onChange(false)
  }

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>On
      </div>
      <div style={offStyle} onClick={offClicked}>Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};

export const OnOff = React.memo(OnOffSecret)

