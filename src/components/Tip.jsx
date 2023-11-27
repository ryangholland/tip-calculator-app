import PropTypes from "prop-types";

function Tip({ tip, setTip }) {
  return (
    <div className="form-group">
      <p>Select Tip %</p>

      <div className="radio-group">
        <div>
          <input
            type="radio"
            id="five"
            name="tip"
            value={0.05}
            checked={tip === 0.05}
            onChange={() => setTip(0.05)}
          />
          <label htmlFor="five" className="radio-btn">
            5%
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="ten"
            name="tip"
            value={0.1}
            checked={tip === 0.1}
            onChange={() => setTip(0.1)}
          />
          <label htmlFor="ten" className="radio-btn">
            10%
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="fifteen"
            name="tip"
            value={0.15}
            checked={tip === 0.15}
            onChange={() => setTip(0.15)}
          />
          <label htmlFor="fifteen" className="radio-btn">
            15%
          </label>
        </div>
      </div>

      <div className="radio-group">
        <div>
          <input
            type="radio"
            id="twenty-five"
            value={0.25}
            checked={tip === 0.25}
            onChange={() => setTip(0.25)}
          />
          <label htmlFor="twenty-five" className="radio-btn">
            25%
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="fifty"
            name="tip"
            value={0.5}
            checked={tip === 0.5}
            onChange={() => setTip(0.5)}
          />
          <label htmlFor="fifty" className="radio-btn">
            50%
          </label>
        </div>
        <div>
          <input type="radio" id="custom" name="tip" value="custom" />
          <label htmlFor="custom" className="radio-btn">
            Custom
          </label>
        </div>
      </div>
    </div>
  );
}

Tip.propTypes = {
  tip: PropTypes.number,
  setTip: PropTypes.func,
};

export default Tip;
