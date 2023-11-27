import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";
import PropTypes from "prop-types";

function Calculator(props) {
  return (
    <div className="calc-div">
      <form>
        <Bill bill={props.bill} setBill={props.setBill} />
        <Tip />
        <People />
      </form>
    </div>
  );
}

Calculator.propTypes = {
  bill: PropTypes.number,
  setBill: PropTypes.func,
};

export default Calculator;
