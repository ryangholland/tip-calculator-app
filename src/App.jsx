import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

function App() {
  return (
    <>
      <Header />
      <main className="container main-container">
        <Calculator />
        <Results />
      </main>
    </>
  );
}

export default App;
