import React, { useState } from "react";
import { getSearchResult } from "../redux/action-redux/actionCreator";
import { useDispatch } from "react-redux";

export default function DashBoard() {
  const [item, setItems] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setItems(e.target.value);
  };
  const handleOnClick = () => {
    dispatch(getSearchResult(item));
  };

  return (
    <>
      <input type="text" placeholder="Search food" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Search</button>
    </>
  );
}
