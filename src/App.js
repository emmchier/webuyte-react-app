import MainTheme from "./providers/MainThemeProvider";
import { AppRouter } from "./router/AppRouter";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
  return (
    <MainTheme>
      <GlobalStyles />
      <AppRouter />
    </MainTheme>
  );
};

export default App;
