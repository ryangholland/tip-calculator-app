import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0.15);
  const [people, setPeople] = useState(2);

  let tipPerPerson = ((bill * tip) / people).toFixed(2);
  let totalPerPerson = ((bill * tip) / people + bill / people).toFixed(2);

  return (
    <>
      <Header />
      <main className="container main-container">
        <Calculator
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <Results tipPerPerson={tipPerPerson} totalPerPerson={totalPerPerson} />
      </main>
    </>
  );
}

export default App;
