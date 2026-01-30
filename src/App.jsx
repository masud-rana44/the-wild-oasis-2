import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

function App() {
  return (
    <>
      <GlobalStyles />
      <Button>Click Me</Button>

      <Input placeholder="Enter your name ..." />
    </>
  );
}

export default App;
