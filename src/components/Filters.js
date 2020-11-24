import React from 'react';
import '../stylesheet/App.scss';

const Filters = (props) => {
  const handleFilter = (ev) => {
    // console.log(ev.target.value);
    props.handleFilter(ev.target.value);
  };

  return (
    <form>
      <label className="label" htmlFor="name">
        Search by character:
      </label>
      <input className="input" type="text" id="name" onChange={handleFilter} />
    </form>
  );
};
export default Filters;
