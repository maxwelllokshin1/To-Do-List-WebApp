import React from "react";

interface Props {
  onFilterChange?: (value: string) => void;
}

const Scrollspy = ({ onFilterChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  return (
    <>
      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand" href="#">
          To-Do List
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
              onChange={handleChange}
            />

            <datalist id="datalistOptions">
              <option value="Active" />
              <option value="Complete" />
            </datalist>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Scrollspy;
