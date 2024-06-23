import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterText, selectValue } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const id = useId();
  const value = useSelector(selectValue);

  return (
    <div>
      <label htmlFor={id}>Contact</label>
      <br />
      <input
        type="text"
        id={id}
        value={value}
        onChange={({ target: { value } }) => dispatch(changeFilterText(value))}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
