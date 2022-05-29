function FilterInput({ filter, changeHandler }) {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={changeHandler} value={filter}></input>
    </label>
  );
}

export default FilterInput;
