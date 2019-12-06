import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import FashionTable from "./components/FashionTable";
import FashionActionBar from "./components/FashionActionBar";

const Fashion = props => {
  const { authUser, isPending } = props;

  return (
    <>
      <FashionActionBar></FashionActionBar>
      <FashionTable />
    </>
  );
};

// const mapStateToProps = ({ auth }) => ({
//   authUser: auth && auth.user,
//   isPending: auth.isPending
// });

export default Fashion;
