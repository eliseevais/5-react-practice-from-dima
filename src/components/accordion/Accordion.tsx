import React from 'react';

type ItemPropsType = {
  title: string;
  value: any
};

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: Array<ItemPropsType>;
  onClick: (value: any) => void
};

const AccordionSecret = (props: AccordionPropsType) => {
  console.log('Accordion is rendering');

  return (
    <div>
      <AccordionTitle title={props.titleValue}
                      onChange={props.onChange}
      />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  );
};
export const Accordion = React.memo(AccordionSecret)

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle is rendering');
  return (
    <h3 onClick={(event) => props.onChange()}>
      ---{props.title}---
    </h3>
  )
};


type AccordionBodyPropsType = {
  items: Array<ItemPropsType>;
  onClick: (value: any) => void
};

function AccordionBody(props: AccordionBodyPropsType) {
  console.log('AccordionBody is rendering');
  return (
    <ul>
      {props.items.map((i, index) => <li onClick={() => {
        props.onClick(i.value)
      }} key={index}>{i.title}</li>)}
    </ul>
  )
};

