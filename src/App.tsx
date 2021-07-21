import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

export type UsersStateType = {
  age: number;
  username: string;
};

const App = () => {
  const [users, setUsers] = useState<UsersStateType[]>([]);

  const addUserHandler = (uName: string, uAge: number) => {
    setUsers((prevList) => {
      return [...prevList, { age: uAge, username: uName }];
    });
  };

  return (
    <>
      <AddUser input="input" onAddUser={addUserHandler} />
      <UsersList users={users} usersClass="users" />
    </>
  );
};

export default App;
