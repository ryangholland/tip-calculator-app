import PropTypes from "prop-types";

function Bill({ bill, setBill }) {
  return (
    <div className="form-group">
      <label htmlFor="bill">Bill</label>
      <div className="input-group">
        <img src="/icon-dollar.svg" alt="Bill Icon" />
        <input
          type="number"
          id="bill"
          name="bill"
          step="0.01"
          min="0.00"
          placeholder="$0.00"
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        ></input>
      </div>
    </div>
  );
}

Bill.propTypes = {
  bill: PropTypes.number,
  setBill: PropTypes.func,
};

export default Bill;
