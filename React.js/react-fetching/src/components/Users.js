
import {useEffect,useState} from 'react';
// import axios from 'axios';

function Users() {
    const [users,setUsers] = useState([]); //boş bir array
    const [isLoading,setIsLoading] = useState(true); //default true
    
    //fecth
    
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e)=> console.log(e))
      .finally(() => setIsLoading(false));
    }, []);

    // axios
    
    // useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setUsers(res.data))
    //   .catch((e)=> console.log(e))
    //   .finally(() => setIsLoading(false));
    // }, []);
    
  return (
    <div>
        <h1>Users</h1>
        {isLoading && <div>Loading...</div>}
        {users.map((users)=> (
            <div key={users.id}>{users.name}</div>
        ))}
    </div>
  )
}

export default Users