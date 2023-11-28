import PropTypes from "prop-types";

function Results({ tipPerPerson, totalPerPerson, reset }) {
  return (
    <div className="results-div">
      <div>
        <div className="results-display">
          <div className="results-display-left">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div className="results-display-right">
            <h2>${tipPerPerson}</h2>
          </div>
        </div>
        <div className="results-display">
          <div className="results-display-left">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div className="results-display-right">
            <h2>${totalPerPerson}</h2>
          </div>
        </div>
      </div>

      <button className="btn" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}

Results.propTypes = {
  tipPerPerson: PropTypes.string,
  totalPerPerson: PropTypes.string,
};

export default Results;
