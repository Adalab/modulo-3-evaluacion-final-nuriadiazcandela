import React from 'react';
import '../stylesheet/App.scss';

const Filters = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label className="label" htmlFor="name">
        Busca un personaje:
      </label>
      <input
        className="input"
        type="text"
        id="name"
        value={props.filterName}
        onChange={handleFilter}
      />
    </form>
  );
};
export default Filters;
