import React, { useState } from "react";
import { getSearchResult } from "../redux/action-redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default function DashBoard() {
  const [item, setItems] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.app.items);
  const isAuth = useSelector((state) => state.app.isAuth);
  console.log("isAuth: ", isAuth);
  const handleOnChange = (e) => {
    setItems(e.target.value);
  };
  const handleOnClick = () => {
    dispatch(getSearchResult(item));
  };
  if (isAuth) {
    console.log("ITEMS: ", items);
  }
  return (
    <>
      <input type="text" placeholder="Search food" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Search</button>
      {items &&
        items.map((item) => {
          return <p>{item.restaurant.name}</p>;
        })}
    </>
  );
}
