import React from 'react';
import Card from '../UI/Card';
import { UsersStateType } from '../../App';

import './UsersList.scss';

type UsersListProps = {
  users: UsersStateType[];
  usersClass: string;
};

const UsersList = ({ users, usersClass }: UsersListProps) => {
  return (
    <Card className={usersClass}>
      <ul>
        {users.map((user, i) => (
          <li key={i + 1}>
            {user.username} {user.age} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
