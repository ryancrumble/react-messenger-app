import React, { useState, useEffect } from "react";
import { Image, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

import Loader from "../common/Loader";
import db from "../../db.json";

const UserDetails = (props) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);

  const fetchData = () => {
    setProfile(db.profile);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Segment style={styles.container}>
      <Image
        src={"https://react.semantic-ui.com/images/avatar/small/joe.jpg"}
      />
      <span>{profile.name}</span>
    </Segment>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetails;

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "1rem",
    height: "100px",
  },
};
