import React, {useCallback, useMemo, useState} from "react";
import {UsersPropsType} from "./ReactMemo.stories";

export default {
  title: 'useMemo'
};

export const DifficultCountingExample = () => {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(3);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random()
      }
      tempResultA = tempResultA * i
    }
    return tempResultA
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }
  ;

  return (
    <>
      <input value={a} onChange={(event) => setA(+event.currentTarget.value)}/>
      <input value={b} onChange={(event) => setB(+event.currentTarget.value)}/>
      <hr/>
      <div>
        Result for a: {resultA}
      </div>
      <div>
        Result for b: {resultB}
      </div>
    </>
  )
}

const UsersSecret = (props: UsersPropsType) => {
  console.log('USERS SECRET');
  return (
    <div>
      {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
  )
};

const Users = React.memo(UsersSecret);

export const HelpToReactMemo = () => {
  console.log('Example from HelpToReactMemo')
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Dima', 'Miron', 'Artem']);

  const newUsersArray = useMemo(() => {
    const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
    return newArray
  }, [users])

  const addUser = () => {
    const newUsers = [...users, 'Sveta' + new Date().getTime()];
    setUsers(newUsers);
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => addUser()}>add user</button>
      {counter}
      <Users users={newUsersArray}/>
    </>
  )
}

export const LikeUseCallback = () => {
  console.log('Example from LikeUseCallback');
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(['HTML', 'JS', 'CSS']);

  // const newBooksArray = useMemo(() => {
  //   const newArray = books.filter(b => b.toLowerCase().indexOf('a') > -1);
  //   return newArray
  // }, [books])

  // const addBook = () => {
  //   console.log('books', books)
  //   const newBooks = [...books, 'Angular' + new Date().getTime()];
  //   setBooks(newBooks);
  // }

  const memoizedBooks = useMemo(() => {
    return () => {
      console.log('books', books)
      const newBooks = [...books, 'Angular' + new Date().getTime()];
      setBooks(newBooks);
    }
  }, [books])

  const memoizedBooks2 = useCallback(() => {
      console.log('books', books)
      const newBooks = [...books, 'Angular' + new Date().getTime()];
      setBooks(newBooks);
  }, [books])

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Books
        // books={newBooksArray}
        addBook={memoizedBooks2}/>
    </>
  )
};

type BookSSecretPropsType = {
  // books: Array<string>;
  addBook: () => void
}

const BooksSecret = (props: BookSSecretPropsType) => {
  console.log('BOOKS SECRET');
  return (
    <div>
      <button onClick={() => props.addBook()}>add book</button>
      {/*{props.books.map((book, index) => <div key={index}>{book}</div>)}*/}
    </div>
  )
};

const Books = React.memo(BooksSecret);