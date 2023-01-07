import './App.css';
import Header from "./components/Header";
const name = "Mehmet";
const surname = "Sonmez";
function App() {
  return (
    <>
      <Header />
      <h1>
        {`Benim adım ${name} Soyadım ${surname}`};
      </h1>
    </>
  );
}

export default App;