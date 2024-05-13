import "./App.css";
import Title from "./components/Title/Title";
import Title1 from "./components/Titles";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import SupperButton from "./components/SupperButton";
import Name from "./components/Name";
import StyledName from "./components/StyledName";

function App() {
  return (
    <div className="App">
      <Title />
      <Wrapper>
        <Title1>
          lorem import Title from "./components/Title/Title"; import Title1 from
          "./components/Titles"; import Wrapper from "./components/Wrapper";
        </Title1>
      </Wrapper>
      <Button primary={true}>Click me please</Button>
      <Button>Click me please</Button>
      <SupperButton primary>I am a supper Button</SupperButton>
      <StyledName>lorem Lorem Lorem</StyledName>
    </div>
  );
}

export default App;
