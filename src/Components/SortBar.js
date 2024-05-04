import React from "react";
import { useState } from "react";

const SortBar = ({onSort}) => {
    const [sortBy, setSortBy] = useState('health');

    const handleSort = (e) => {
        setSortBy(e.target.value);
        onSort(e.target.value);
      };


      return (
        <div className="mb-4">
          <label htmlFor="sort-by">Sort by:</label>
          <select id="sort-by" aria-label="sort" onChange={handleSort}>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
          </select>
        </div>
      );
    };
    
    export default SortBar;