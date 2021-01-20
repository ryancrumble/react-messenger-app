import React from "react";
import PropTypes from "prop-types";

const ScrollView = ({ children, style }) => {
  return (
    <div className='ScrollView' style={{ ...styles.container, ...style }}>
      {children}
    </div>
  );
};

ScrollView.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default ScrollView;

const styles = {
  container: {
    width: "inherit",
    height: "inherit",
    overflowY: "auto",
    overflowX: "hidden",
  },
};
