import PropTypes from "prop-types";
import { useState } from "react";

function Tip({ tip, setTip }) {
  const [changingCustom, setChangingCustom] = useState(false);
  const [custom, setCustom] = useState(0);

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
            onChange={() => {
              setTip(0.05);
              setCustom(0);
              setChangingCustom(false);
            }}
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
            onChange={() => {
              setTip(0.1);
              setCustom(0);
              setChangingCustom(false);
            }}
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
            onChange={() => {
              setTip(0.15);
              setCustom(0);
              setChangingCustom(false);
            }}
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
            onChange={() => {
              setTip(0.25);
              setCustom(0);
              setChangingCustom(false);
            }}
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
            onChange={() => {
              setTip(0.5);
              setCustom(0);
              setChangingCustom(false);
            }}
          />
          <label htmlFor="fifty" className="radio-btn">
            50%
          </label>
        </div>
        <div>
          {!changingCustom && (
            <>
              <input
                type="radio"
                id="custom"
                name="tip"
                value="custom"
                checked={changingCustom}
                onChange={() => {
                  setTip(0);
                  setChangingCustom(!changingCustom);
                }}
              />
              <label htmlFor="custom" className="radio-btn">
                Custom
              </label>
            </>
          )}
          {changingCustom && (
            <>
              <input
                type="number"
                id="customAmount"
                name="customAmount"
                step="1"
                min="00"
                max="100"
                placeholder="00"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setTip(e.target.value * 0.01);
                }}
              ></input>
            </>
          )}
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
