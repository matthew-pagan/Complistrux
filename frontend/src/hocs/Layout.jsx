import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";
import Appnav from "../components/Appnav";


const Layout = (props) => {
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  }, []);
  
  return(
    <div>
      <Appnav/>
      {props.children}

    </div>
);
}
export default connect(null, { checkAuthenticated, load_user})(Layout);