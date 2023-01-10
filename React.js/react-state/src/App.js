import {useState} from 'react';

function App() {
  // State her değiştirdiğinde comp tekrar render edilir.
  // useState => return içerisin de her hangi bir yerde kullanabiliriz.
  const [name,setName] = useState('Mehmet');
  const [age,setAge] = useState(19);
  const [friends,setFriends] = useState(["Ahmet", "Murat"]);
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={()=> setAge(25)}>Change Age</button>
      <button onClick={()=> setName("Ahmet")}>Change Name</button>
    <hr/>
    <br/>
    <h2>Friends</h2>
    {friends.map((friends,index)=>(
      <div key={index}>{friends}</div>
    ))}
    <br/>
    <button onClick={()=> setFriends([...friends,"Ayşe"])}>
        Add new friends
    </button>
    
    
    
    
    </div>

  );
}

export default App;
