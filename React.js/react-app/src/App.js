import './App.css';
import User from "./components/User";

const friends = [
  {
    id:0,
    name:"Ahmet",
  },
  {
    id:1,
    name:"Erdem",
  },
  {
    id:2,
    name:"Beyza",
  },
];
function App() {
  return (
    <>
      <User 
        name="Mehmet" 
        surname="Seven" 
        age={24} 
        isLoggedIn={true} 
        friends={friends}
        address = {{
          title : 'Istanbul/Beylikdüzü',
          zip : 34500
        }}
        />
    </>
  );
}

export default App;