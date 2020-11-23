import React from 'react';

const Filters = () => {
  const handleFilter = (ev) => {
    console.log(ev.target.value);
  };

  return (
    <form>
      <label htmlFor="">Search character:</label>
      <input type="text" id="name" onChange={handleFilter} />
    </form>
  );
};
export default Filters;
