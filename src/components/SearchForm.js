import React from "react";
import "../App.css";

function SearchForm(props) {

  return (
    <form className="input-form" onSubmit={props.search}>
      <input
        className="input-box"
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="Company Quote?"
      />
      <input className="submit-box" type="submit" value="Submit" />
    </form>
  );
}

export default SearchForm;
