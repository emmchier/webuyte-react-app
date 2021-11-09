import { useState } from "react";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import MainTheme from "./providers/MainThemeProvider";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
  const [counterCart, setCounterCart] = useState(0);

  return (
    <MainTheme>
      <GlobalStyles />
      <Navbar counter={counterCart} />
      <HomePage counterCart={counterCart} setCounterCart={setCounterCart} />
    </MainTheme>
  );
};

export default App;
