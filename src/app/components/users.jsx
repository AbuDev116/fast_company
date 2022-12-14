import React from 'react';
import User from './user';

const Users = ({ users, ...rest }) => {
  const renderUsers = () => {
    return users.length !== 0 ? (
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Профессия</th>
            <th scope="col">Качества</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user._id} {...user} onDelete={rest.onDelete} onChange={rest.onChange} />
          ))}
        </tbody>
      </table>
    ) : (
      false
    );
  };

  return <>{renderUsers()}</>;
};

export default Users;
