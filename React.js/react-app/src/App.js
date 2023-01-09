import './App.css';
import User from "./components/User";
function App() {
  return (
    <>
      <User name="Mehmet" surname="Seven" age={24} isLoggedIn={true} />
    </>
  );
}

export default App;