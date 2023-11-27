function People() {
  return (
    <div className="form-group">
      <label htmlFor="people">Number of People</label>
      <div className="input-group">
        <img src="/icon-person.svg" alt="People Icon" />
        <input type="text" name="people" id="people" />
      </div>
    </div>
  );
}

export default People;
