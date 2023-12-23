import React, {useState} from 'react';
import {UncontrolledOnOff} from "./components/onOff/UncontrolledOnOff";
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingValuePropsType} from "./components/rating/Rating";
import './App.css';
import {
  UncontrolledAccordion
} from "./components/accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import {OnOff} from "./components/onOff/OnOff";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(4);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="App">
      {/*<PageTitle title={"Hello from title"} />*/}
      <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
      {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}

      <Accordion titleValue={'Menu'}
                 collapsed={accordionCollapsed}
                 onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
      />

      <UncontrolledAccordion titleValue={'UncontrolledMenu'}/>

      <Rating value={ratingValue} onClick={setRatingValue}/>
      {/*<UncontrolledRating/>*/}
    </div>
  );
};

type PageTitlePropsType = {
  title: string;
}

function PageTitle(props: PageTitlePropsType) {
  console.log("Page title is rendering");
  return <h1>{props.title}</h1>
}

export default App;
