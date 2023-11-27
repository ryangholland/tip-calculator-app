function Results() {
  return (
    <div className="results-div">
      <div>
        <div className="results-display">
          <div className="results-display-left">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div className="results-display-right">
            <h2>$4.27</h2>
          </div>
        </div>
        <div className="results-display">
          <div className="results-display-left">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div className="results-display-right">
            <h2>$32.79</h2>
          </div>
        </div>
      </div>

      <button className="btn">Reset</button>
    </div>
  );
}

export default Results;
