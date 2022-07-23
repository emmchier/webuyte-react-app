import { CartProvider } from './providers/CartProvider';
import MainTheme from './providers/MainThemeProvider';
import { AppRouter } from './router/AppRouter';
import { GlobalStyles } from './styles/globalStyles';

const App = () => {
  return (
    <MainTheme>
      <GlobalStyles />
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </MainTheme>
  );
};

export default App;
