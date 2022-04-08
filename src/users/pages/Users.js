import React from 'react';
import UserList from '../components/UserList';
export default function Users() {
  let USERS = [
    {
      id: 'u1',
      image: 'none',
      name: 'zijun',
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
}
