import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useTheme } from "../../store";
import Filter from "./styles";

interface Props {
  onFilter(filteredRegion: string): void;
  onSearch(searchValue: string): void;
}

const FilterSearch: React.FC<Props> = ({ onFilter, onSearch }) => {
  const { mode } = useTheme();
  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  const setFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(event.target.value);
  };

  return (
    <Filter mode={mode}>
      <div className="search">
        <AiOutlineSearch className="search-icon" />

        <input
          type="text"
          name="search"
          placeholder="Search for a country"
          onChange={handleSearchValue}
        />
      </div>

      <div className="select-box">
        <select
          className="select"
          name="filter"
          id="filter"
          onChange={setFilter}
        >
          <option value="all">Filter by region (All)</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </Filter>
  );
};

export default FilterSearch;
