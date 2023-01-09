import './App.css';
import Header from "./components/Header";
const name = "Mehmet";
const surname = "Sonmez";
const isLoggedIn = true; // koşullu render
function App() {
  return (
    <>
      <Header />
      <h1>
        {isLoggedIn ? `Benim adım ${name} Soyadım ${surname}`: "Giriş Yapmadınız"};
      </h1>
      {/* {!isLoggedIn && "Giriş Yapmadınız."} */}
    </>
  );
}

export default App;