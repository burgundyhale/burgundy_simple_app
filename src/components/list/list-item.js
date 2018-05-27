import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ item, completed }) => {
  const checked = completed || null;

  const onChecked = evt => {
    evt.preventDefault();
    // TODO: implement checked update to list item
    console.log(evt);
  };

  return (
    <li className="uk-border-bottom oh-list-links">
      <input
        type="checkbox"
        id={`${item}-checkbox`}
        name={item}
        checked={checked}
        onChange={evt => onChecked(evt)}
      />
      <label htmlFor={`${item}-checkbox`} id={`${item}-label`}>
        {item}
      </label>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.string,
  completed: PropTypes.bool,
};

export default ListItem;
