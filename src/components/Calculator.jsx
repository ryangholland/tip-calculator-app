import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";

function Calculator() {
  return (
    <div className="calc-div">
      <form>
        <Bill />
        <Tip />
        <People />
      </form>
    </div>
  );
}

export default Calculator;
