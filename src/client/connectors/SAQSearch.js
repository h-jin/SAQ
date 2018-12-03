import { connect } from "react-redux";
import SAQSearch from "components/SAQSearch";

export default connect(
    ({ list }) => ({ productList: list })
)(SAQSearch);