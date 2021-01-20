import Container from "./components/common/Container";
import Messenger from "./components/Messenger/Messenger";

const style = {
  app: {
    display: "flex",
    justifyContent: "center",
  },
};

function App() {
  return (
    <div className='App' style={style.app}>
      <Container>
        <Messenger />
      </Container>
    </div>
  );
}

export default App;
