import React, {useReducer, useState} from 'react';

type UncontrolledAccordionPropsType = {
  titleValue: string;
  //collapsed: boolean;
};

type ActionPropsType = {
  type: string
}

const reducer = (state: boolean, action: ActionPropsType) => {
  if (action.type === 'SET-COLLAPSED') {
    return !state;
  }

  return state;
};

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
  console.log('Accordion is rendering');

  let [collapsed, dispatch] = useReducer(reducer, false);

  return (
    <div>
      <UncontrolledAccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)} />
      { !collapsed && <UncontrolledAccordionBody />}
    </div>
  );
};

// export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
//   console.log('Accordion is rendering');
//
//   let [collapsed, setCollapsed] = useState(true);
//
//   return (
//     <div>
//       <UncontrolledAccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)} />
//       { !collapsed && <UncontrolledAccordionBody />}
//     </div>
//   );
// };


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

