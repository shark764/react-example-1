import React from 'react';
import { DateTime } from 'luxon';

function User({ user }) {
  // console.log(Object.values(user));
  return (
    <tr>
      {Object.entries(user).map(([key, cell], index) => {
        if (key === 'created_at' || key === 'updated_at') {
          return (
            <td key={index.toString()}>
              {DateTime.fromISO(cell).toLocaleString(
                DateTime.DATETIME_FULL_WITH_SECONDS,
              )}
            </td>
          );
        }
        if (key === 'gender') {
          return (
            <td key={index.toString()}>
              {cell === 'Male' ? (
                <i className="fa fa-male" style={{ color: 'lightskyblue' }} />
              ) : (
                <i className="fa fa-female" style={{ color: 'lightcoral' }} />
              )}
            </td>
          );
        }
        if (key === 'status') {
          return (
            <td key={index.toString()}>
              {cell === 'Active' ? (
                <i className="fa fa-check" style={{ color: 'lightgreen' }} />
              ) : (
                <i
                  className="fa fa-user-slash"
                  style={{ color: 'lightsalmon' }}
                />
              )}
            </td>
          );
        }
        return <td key={index.toString()}>{cell}</td>;
      })}
    </tr>
  );
}

export default User;
