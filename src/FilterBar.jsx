import React from "react";

const FilterBar = ({ onFilterChange }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => onFilterChange("all")}>All</button>
      <button onClick={() => onFilterChange("Support")}>Support</button>
      <button onClick={() => onFilterChange("Medic")}>Medic</button>
      <button onClick={() => onFilterChange("Assault")}>Assault</button>
      <button onClick={() => onFilterChange("Defender")}>Defender</button>
      <button onClick={() => onFilterChange("Captain")}>Captain</button>
      <button onClick={() => onFilterChange("Witch")}>Witch</button>
    </div>
  );
};

export default FilterBar;
