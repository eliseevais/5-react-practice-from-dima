import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
  titleValue: string;
  //collapsed: boolean;
}
export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
  console.log('Accordion is rendering');

  let [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <UncontrolledAccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)} />
      { !collapsed && <UncontrolledAccordionBody />}
    </div>
  );
};

type UncontrolledAccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
  console.log('AccordionTitle is rendering');
  return (
    <h3 onClick={() => {props.onClick()}}>---{props.title}---</h3>
  )
};

function UncontrolledAccordionBody() {
  console.log('AccordionBody is rendering');
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

