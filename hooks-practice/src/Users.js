import React from 'react';

const Users = ({ allUsers }) => {
  return (
    <div>
      {allUsers.map((user, idx) =>
        <div className="User" key={idx}>
          <div className="User-name">
            {user.name}
          </div>
          <div className="User-company">
            {user.company.name}
            <br />
            {user.company.catchPhrase}
          </div>
        </div>
      )}
    </div>
  )
}

export default Users;
