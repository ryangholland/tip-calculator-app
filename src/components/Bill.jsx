import { useState } from "react";

function Bill() {
  const [billAmount, setBillAmount] = useState(0);

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
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default Bill;
