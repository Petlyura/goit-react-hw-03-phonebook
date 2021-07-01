import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filterValue, onFilterChange }) => (
  <div>
    <label>
      Search contacts by name
      <input type="text" value={filterValue} onChange={onFilterChange} />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
