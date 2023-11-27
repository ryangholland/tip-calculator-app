import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";
import PropTypes from "prop-types";

function Calculator(props) {
  return (
    <div className="calc-div">
      <form>
        <Bill bill={props.bill} setBill={props.setBill} />
        <Tip tip={props.tip} setTip={props.setTip} />
        <People people={props.people} setPeople={props.setPeople} />
      </form>
    </div>
  );
}

Calculator.propTypes = {
  bill: PropTypes.number,
  setBill: PropTypes.func,
  tip: PropTypes.number,
  setTip: PropTypes.func,
  people: PropTypes.number,
  setPeople: PropTypes.func,
};

export default Calculator;
