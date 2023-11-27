import PropTypes from "prop-types";

function People({ people, setPeople }) {
  return (
    <div className="form-group">
      <label htmlFor="people">Number of People</label>
      <div className="input-group">
        <img src="/icon-person.svg" alt="People Icon" />

        <input
          type="number"
          id="people"
          name="people"
          step="1"
          min="2"
          max="50"
          placeholder="2"
          value={people}
          onChange={(e) => setPeople(+e.target.value)}
        ></input>
      </div>
    </div>
  );
}

People.propTypes = {
  people: PropTypes.number,
  setPeople: PropTypes.func,
};

export default People;
