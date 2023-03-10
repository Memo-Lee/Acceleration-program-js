import { useState, useEffect } from 'react';
import axios from 'axios'
import { NavLink, Outlet } from 'react-router-dom'
function Users() {

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]); //boş array
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className='body'>

      <div>
        <h1>Users</h1>

        {loading && <div>Loading...</div>}
        <ul>
          {!loading &&
            users?.map((user) => (
              <li key={user.id}>
                <NavLink
                  to={`/users/${user.id}`}
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}>{user.name}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Users