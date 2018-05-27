import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "lodash";

import Header from "./header";
import List from "./list";

class ListApp extends Component {
  render() {
    const lists = map(this.props.listData, (list, index) => (
      <List key={index} list={list} />
    ));

    return (
      <div className="bsa">
        <Header />
        {lists}
      </div>
    );
  }
}

ListApp.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.object),
};

export default ListApp;
