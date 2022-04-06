import React from "react";

const Input = (props) => {
    return (
        <input
          type="text"
          placeholder="Add an item"
          onChange={props.onChange}
          value={props.value}
        />
    );
};

export default Input;