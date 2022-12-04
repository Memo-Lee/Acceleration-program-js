import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <p className='xyz'>
      lorem lorem lorem
      </p>    
      <label htmlFor='myinput'>
      Name
      <input id='myinput'/>
      </label>
    </>
  );
}

export default App;