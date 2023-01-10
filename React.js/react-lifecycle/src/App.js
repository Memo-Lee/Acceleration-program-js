import {useState,useEffect} from 'react';

function App() {
  /* useEffect ve useState gibi hooklar 
  if,while vs. gibi kontrol mekanizmalarının içerisinde bulunmaz.*/
  const [number,setNumber] = useState(0);
  const [name,setName] = useState("Mehmet");
  useEffect(() => {
    console.log("Component mount edildi.");
  }, []); //dependency array
  useEffect(()=> {
    console.log("number state güncellendi");
  },[number]);
  useEffect(()=> {
    console.log("name state güncellendi");
  },[name]);
  return (
    <div className="App">
        <h1>{number}</h1>
        <br/>
        <button onClick={()=> setNumber(number + 1)}>Click Number</button>
        <br/>
        <h1>{name}</h1>
        <br/>
        <button onClick={()=> setName("Ahmet")}>Click Name</button>
    </div>
  );
}

export default App;
