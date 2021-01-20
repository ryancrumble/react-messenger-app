import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Input, Comment, Button, Segment } from "semantic-ui-react";
import ScrollView from "../common/ScrollView";
import Loader from "../common/Loader";

import { formatDateToText } from "../../utils/dateTime";
import db from "../../db.json";

const Message = ({ message }) => {
  return (
    <Comment>
      <Comment.Avatar
        as='a'
        src='https://react.semantic-ui.com/images/avatar/small/helen.jpg'
      />
      <Comment.Content>
        <Comment.Author>{message.sender}</Comment.Author>
        <Comment.Metadata>
          <div>{formatDateToText(message.time)}</div>
        </Comment.Metadata>
        <Comment.Text>{message.text}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

const MessageField = ({ onSubmit }) => {
  const submitMessage = (e) => {
    // Send message to api
    console.log("submit message!");
  };
  return (
    <Segment>
      <div style={styles.messageField}>
        <div style={styles.messageFieldInput}>
          <Input fluid placeholder='Write a message' />
        </div>
        <div style={styles.messageFieldButton}>
          <Button icon='send' onClick={submitMessage} />
        </div>
      </div>
    </Segment>
  );
};

MessageField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const ConversationPane = () => {
  const [loading, setLoading] = useState(true);
  const [conversation, setConversation] = useState([]);

  const fetchData = () => {
    setConversation(db.conversations[0]);
    setLoading(false);
  };

  const sendMessage = (text, sender) => {
    // Post request to API
    const newMessage = {
      text,
      sender,
      time: Date.now(),
    };

    setConversation([...conversation, newMessage]);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversation]);

  return loading ? (
    <Loader />
  ) : (
    <Segment style={styles.conversationPane}>
      <ScrollView style={styles.conversationFeed}>
        {conversation.messages.map((msg) => (
          <Message message={msg} />
        ))}
      </ScrollView>
      <MessageField onSubmit={sendMessage} />
    </Segment>
  );
};

const styles = {
  conversationPane: {
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
  },
  conversationFeed: {
    height: "90%",
  },
  messageField: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "10%",
    padding: "1rem 2rem",
  },
  messageFieldInput: {
    width: "90%",
  },
  messageFieldButton: { width: "10%", paddingLeft: "1rem" },
};

export default ConversationPane;
