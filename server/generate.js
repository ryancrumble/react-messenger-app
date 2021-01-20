/**
 * @file Generate.js
 * @description Used to create random data on boot
 */

/**
 * @interface Recipient: {id: string, name: string, avatar: string}
 * @interface Message: {text: string, time: Date, sender: string}
 * @interface Conversation: {id: string, recipient: Recipient, messages: Array<Message>}
 */

const faker = require("faker");

module.exports = () => {
  /**
   * @description generates random users
   * @param count: number
   * @returns Array<Recipient>
   */
  const generateUsers = (count) => {
    return new Array(count).fill({}).map(() => ({
      id: faker.random.alphaNumeric(8),
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
    }));
  };

  /**
   * @description generates random messages for a conversation
   * @param user: recipients: Array<string>
   * @param maxCount: number
   * @returns Array<object>:
   */
  const generateMessages = (users, maxCount) => {
    const messages = [];
    const messageCount = Math.floor(Math.random() * maxCount + 1);

    for (let i = 0; i < messageCount; i++) {
      messages.push({
        text: faker.lorem.sentences(Math.floor(Math.random() * 2 + 1)),
        sender: users[Math.floor(Math.random() * users.length)],
        time:
          i !== 0
            ? faker.date.recent(1, new Date(messages[i - 1].time))
            : faker.date.recent(1, new Date()),
      });
    }

    return messages;
  };

  /**
   * @description generates random conversations and contacts for a user
   * @param currentUser: number
   * @param recipients: Array<Recipient>
   * @returns Array<Conversation>
   */
  const generateConversations = (currentUser, recipients) => {
    return new Array(recipients.length).fill({}).map((item, i) => ({
      id: faker.random.alphaNumeric(16),
      recipient: recipients[i],
      messages: generateMessages([currentUser.id, recipients[i].id], 30),
    }));
  };

  /**
   * @description Creates a list of recent history for the user
   * @param conversations: Array<Conversation>
   * @returns {id: number, recipient: Recipient, recentMessage: Message}
   */
  const getHistory = (conversations) => {
    return conversations.map((con) => {
      return {
        id: con.id,
        recipient: con.recipient,
        recentMessage: con.messages[0],
      };
    });
  };

  const currentUser = generateUsers(1)[0];
  const recipients = generateUsers(10);
  const conversations = generateConversations(currentUser, recipients);

  return {
    profile: currentUser,
    history: getHistory(conversations),
    conversations,
  };
};
