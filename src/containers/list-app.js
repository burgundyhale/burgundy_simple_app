import { connect } from "react-redux";

import ListApp from "../components/list-app";
import getListData from "../actions/get-list-data";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  listData: getListData(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListApp);
