import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'

function User() {

  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      <h4>
        {loading && <div>Loading...</div>}
        <p>User ID : {id}</p>
        {!loading && <code>{JSON.stringify(user)}</code>}
      </h4>
      <br />
      <Link to={`/users/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
    </div>
  )
}

export default User