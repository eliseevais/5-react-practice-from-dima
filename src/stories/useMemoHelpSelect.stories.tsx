import React, {useMemo, useState} from "react";
import {Select} from "../components/select/Select";

export default {
  title: 'help to select'
};

type valueSelectPropsType = {
  value: string;
  title: string;
  peopleCount: number
}

export const SelectWithValue = () => {
  const [value, setValue] = useState('2')

  return (
    <>
      <Select onChange={setValue}
              value={value}
              items={[
                {value: '1', title: 'Moscow'},
                {value: '2', title: 'Tula'},
                {value: '3', title: 'Kaluga'}
              ]}
      />
    </>
  )
};

export const HelpToSelectFromMemo = () => {
  console.log('HelpToSelectFromMemo')
  const [counter, setCounter] = useState(0);
  const [valueForSelect, setValueForSelect] = useState('2');
  const [valueForSelect1, setValueForSelect1] = useState('2');
  const [valueForSelect2, setValueForSelect2] = useState('2');
  const [valueForSelect3, setValueForSelect3] = useState('2');

  const [cities, setCities] = useState([
    {value: '1', title: 'Moscow', peopleCount: 1000},
    {value: '2', title: 'Tula', peopleCount: 100},
    {value: '3', title: 'Kaluga', peopleCount: 200}
  ]);

  const newCitiesWithFirstLetter = useMemo(() => {
    let newCitiesWithFirstLetter = cities.filter(city => city.title[0] === 'T');
    return newCitiesWithFirstLetter
  }, [cities]);

  const newCitiesWithPeopleMore = useMemo(() => {
    let newCitiesWithPeopleMore = cities.filter(city => city.peopleCount > 500);
    return newCitiesWithPeopleMore
  }, [cities]);

  const newCitiesWithLetter = useMemo(() => {
    let newCitiesWithLetter = cities.filter(city => city.title.toLowerCase().indexOf('u') > -1);
    return newCitiesWithLetter
  }, [cities]);

  const addCity = () => {
    const newCities = [...cities, {
      value: '4',  title: 'minsk', peopleCount: 1000
    }];
    setCities(newCities);
  }

  return (
    <>
      start cities
      <Select onChange={setValueForSelect}
              value={valueForSelect}
              items={cities}
      />
      <hr/>
      new Cities With First Letter T
      <Select onChange={setValueForSelect1}
              value={valueForSelect1}
              items={newCitiesWithFirstLetter}
      />
      <hr/>
      new Cities With People More 500
      <Select onChange={setValueForSelect2}
              value={valueForSelect2}
              items={newCitiesWithPeopleMore}
      />
      <hr/>
      new Cities With Letter u
      <Select onChange={setValueForSelect3}
              value={valueForSelect3}
              items={newCitiesWithLetter}
      />
      <hr/>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => addCity()}>add city</button>
      {counter}
    </>
  )
}