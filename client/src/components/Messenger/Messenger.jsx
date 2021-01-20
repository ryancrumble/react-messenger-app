import React from "react";
import HistoryPane from "./HistoryPane";
import ConversationPane from "./ConversationPane";
import UserDetails from "./UserDetails";

const mockUser = { username: "Jane Doe" };

const Messenger = (props) => {
  return (
    <div className='Messenger' style={styles.messenger}>
      <div style={styles.historyCol}>
        <UserDetails />
        <HistoryPane user={mockUser} />
      </div>
      <div style={styles.conversationCol}>
        <ConversationPane />
      </div>
    </div>
  );
};

export default Messenger;

const styles = {
  messenger: {
    height: "100vh",
    backgroundColor: "#F5F5F5",
    display: "flex",
  },
  historyCol: {
    height: "inherit",
    width: "30%",
    overflow: "hidden",
  },
  conversationCol: {
    height: "inherit",
    width: "70%",
    overflow: "hidden",
  },
};
