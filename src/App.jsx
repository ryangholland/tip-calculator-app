function App() {
  return (
    <>
      <header className="container header-container">
        <h1>S P L I</h1>
        <h1>T T E R</h1>
      </header>

      <main className="container main-container">
        <div className="calc-div">
          <form>
            <div className="form-group">
              <label htmlFor="bill">Bill</label>
              <div className="input-group">
                <img src="/icon-dollar.svg" alt="Bill Icon" />
                <input type="text" name="bill" id="bill" />
              </div>
            </div>
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
                  <input
                    type="radio"
                    id="fifteen"
                    name="tip"
                    value="15%"
                    checked
                  />
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
            <div className="form-group">
              <label htmlFor="people">Number of People</label>
              <div className="input-group">
                <img src="/icon-person.svg" alt="People Icon" />
                <input type="text" name="people" id="people" />
              </div>
            </div>
          </form>
        </div>
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
      </main>
    </>
  );
}

export default App;
