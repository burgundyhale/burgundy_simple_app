import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";

import ListItem from "./list-item";

class List extends React.Component {
  render() {
    const { name, listItems } = this.props.list;

    const items = map(listItems, listItem => {
      const { item, completed } = listItem;
      return <ListItem key={item} item={item} completed={completed} />;
    });

    return (
      <div className="bsa-list-wrapper bsa-margin-bottom">
        <h2 className="bsa-h2">{name}</h2>
        <ul className="bsa-ul">{items}</ul>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.object,
};

export default List;
