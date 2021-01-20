import React from "react";
import {
  Dimmer,
  Loader as SemanticLoader,
  Image,
  Segment,
} from "semantic-ui-react";

const Loader = () => (
  <Segment>
    <Dimmer active>
      <SemanticLoader />
    </Dimmer>
    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
);

export default Loader;
