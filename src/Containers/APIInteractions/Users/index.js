import React, { useCallback, useEffect, useState } from 'react';
import FormRow from './FormRow';
import User from './User';

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // console.log(Object.keys(users[0]));

  const fetchUsers = useCallback(() => {
    setLoading(true);
    fetch(`https://gorest.co.in/public-api/users?page=${page}`)
      .then((res) => {
        return res.json();
      })
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="App-users-table">
      <input
        type="number"
        value={page}
        onChange={(e) => setPage(parseInt(e.target.value, 10))}
      />

      {loading && (
        <div className="fa-6x">
          <i className="fa fa-spinner fa-pulse"></i>
        </div>
      )}

      {!loading && !error && (
        <>
          <table>
            <thead>
              <tr>
                {/* {users.length > 0 &&
                  Object.keys(users[0]).map((theading) => {
                    return <th key={theading}>{theading}</th>;
                  })} */}
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return <User key={user.email} user={user} />;
              })}
            </tbody>
          </table>

          <FormRow />
        </>
      )}

      {error && (
        <span>
          An error has occurred.
          {` `}
          {error}
        </span>
      )}
    </div>
  );
}

export default Users;
