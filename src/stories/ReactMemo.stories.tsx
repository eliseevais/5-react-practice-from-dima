import React, {useState} from "react";

export default {
  title: 'React.memo demo'
};

type NewMessagesCounterPropsType = {
  count: number
};
type UsersPropsType = {
  users: Array<string>
};

const NewMessagesCounter = (props: NewMessagesCounterPropsType) => {
  return <div>{props.count}</div>
};

const UsersSecret = (props: UsersPropsType) => {
  console.log('USERS');
  return (
    <div>
      {props.users.map((user, index) => <div key={index}>{user}</div> )}
    </div>
  )
};

const Users = React.memo(UsersSecret);

export const Example1 = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Dima', 'Valera', 'Artem']);

  const addUser = () => {
    const usersCopy = [...users];
    usersCopy.push('Sveta');
    console.log('usersCopy', usersCopy);
    setUsers(usersCopy);
  };

  return (
    <>
      <button onClick={() => setCounter(counter+1)}>+</button>
      <button onClick={addUser}>add user</button>
      <NewMessagesCounter count={counter}/>
      <Users users={users}/>
    </>
  )
}