import {useState} from 'react';

function App() {
  // State her değiştirdiğinde comp tekrar render edilir.
  // useState => return içerisin de her hangi bir yerde kullanabiliriz.
  const [name,setName] = useState('Mehmet');
  const [age,setAge] = useState(19);
  const [friends,setFriends] = useState(["Ahmet", "Murat"]);
  const [address,setAddress] = useState({title:'Ankara',zip:2554})
  const [form,setForm] = useState({name:"",surname:""});
  const onChangeInput = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  }
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
    <hr/>
    <br/>
    <h2>Address</h2>
    <div>
      {address.title} {address.zip}
    </div>
    <button onClick={()=> setAddress({...address , title:"Istanbul",zip:34500})}>
      New Address
    </button>
    <hr/>
    <br/>
    <h2>InputExample</h2>
    <input name="name" value={form.name} onChange={onChangeInput}></input>
    <br/>
    <input name="surname" value={form.surname} onChange={onChangeInput}></input>
    <br/>
    {form.name}{form.surname}
    </div>
  );
}

export default App;
