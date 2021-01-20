import React from "react";
import { Container as SemanticContainer } from "semantic-ui-react";

const Container = (props) => {
  return (
    <SemanticContainer style={styles.container}>
      {props.children}
    </SemanticContainer>
  );
};

export default Container;

const styles = {
  container: {
    height: "100vh",
  },
};
