import React from "react";

const SortBar = ({ onSort, onFilter }) => {
  return (
    <div className="sort-bar">
      <button onClick={() => onSort("health")}>Sort by Health</button>
      <button onClick={() => onSort("damage")}>Sort by Damage</button>
      <button onClick={() => onSort("armor")}>Sort by Armor</button>
      <button onClick={() => onFilter("Support")}>Filter Support</button>
      <button onClick={() => onFilter("Medic")}>Filter Medic</button>
      <button onClick={() => onFilter("Assault")}>Filter Assault</button>
      <button onClick={() => onFilter("Defender")}>Filter Defender</button>
      <button onClick={() => onFilter("Captain")}>Filter Captain</button>
      <button onClick={() => onFilter("Witch")}>Filter Witch</button>
    </div>
  );
};

export default SortBar;
