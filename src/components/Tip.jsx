function Tip() {
  return (
    <div className="form-group">
      <p>Select Tip %</p>

      <div className="radio-group">
        <div>
          <input type="radio" id="five" name="tip" value="5%" />
          <label htmlFor="five" className="radio-btn">
            5%
          </label>
        </div>
        <div>
          <input type="radio" id="ten" name="tip" value="10%" />
          <label htmlFor="ten" className="radio-btn">
            10%
          </label>
        </div>
        <div>
          <input type="radio" id="fifteen" name="tip" value="15%" checked />
          <label htmlFor="fifteen" className="radio-btn">
            15%
          </label>
        </div>
      </div>

      <div className="radio-group">
        <div>
          <input type="radio" id="twenty-five" name="tip" value="25%" />
          <label htmlFor="twenty-five" className="radio-btn">
            25%
          </label>
        </div>
        <div>
          <input type="radio" id="fifty" name="tip" value="50%" />
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

export default Tip;
