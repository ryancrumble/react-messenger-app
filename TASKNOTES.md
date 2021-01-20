# Notes about Messenger app task

**Date:** 20.01.2021

## Goals

##### Main Goal

- [ ] The user should be able to write messages in the chat window and see them appear.
- [ ] The user should be able to select a friend and see his chat with this friend.
- [ ] Time Limit: < 2 hours

##### Sub goals

- [ ] Persisting chat history.
- [ ] Talking to a backend.
- [ ] Multiple users.

##### Personal Goals

- [ ] Generate data, not manually write.
- [ ] Expand on previous knowledge.
- [ ] Use new technologies.

## Design

- Inspiration from Telegram and Whatsapp

#### Vue.js or React?

- **React** due to quick setup, 'app-not-website' design, and power of js, it's _reactive_
- **Vue.js**, imo, better for webpages/screen views

#### Styling

- **Javascript object** is quick and straight forward.

#### Data source or mock?

- **jsonplaceholder** did not have all data I wanted (and wanted randomly generated data).
- Combined **json-server** with **faker**. Quick to boot up. Use **axios** for calls.

#### State Management - Is it necessary?

- Helpful with managing API calls in one place.

- **Redux** is verbose to set up. **Context API** is good for small decisions.

#### Component library or none?

- Can easily set up a page by utilising pre-made components and consistent design. **Semantic UI** looks good.
- Also, I want to challenge myself and use new technology (always learning).

#### Testing

- **Jest** for unit testing.
- Integration tests not in scope.

## Process

1. Draw a design, scaffold the app.
2. Started with data. Get into ideal shape.
3. Build frontend app with components (no data)
4. Integrate with API

## Results

- Scope too large for time limit.
- Challenge with Semantic UI. (e.g. `<Input />`, `<Feed/>` components).
- Data generator could be simplified.
- Tried too many tasks at once (aiming to reach time limit)
- NEED A NEW COMPUTER!!! Compile time took 6-8 seconds every document save. Apps crashed.

## Final Thoughts

Main or sub goals not achieved, however, personal goals are ticked. I am happy with what I achieved, albeit incomplete. My planning and choice of technologies. To expand, I would use a different styling approach (modules or stylerd components) and add Redux to handle API logic. Converting the json-server to a dedicated backend (Node.js & Express).
