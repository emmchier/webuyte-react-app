import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import MainTheme from "./providers/MainThemeProvider";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
  return (
    <MainTheme>
      <GlobalStyles />
      <Navbar />
      <HomePage />
    </MainTheme>
  );
};

export default App;
