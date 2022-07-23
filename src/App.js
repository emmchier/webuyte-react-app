import { CartProvider } from './providers/CartProvider';
import { FavouriteProvider } from './providers/FavouriteProvider';
import MainTheme from './providers/MainThemeProvider';
import { AppRouter } from './router/AppRouter';
import { GlobalStyles } from './styles/globalStyles';

const App = () => {
  return (
    <MainTheme>
      <GlobalStyles />
      <FavouriteProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </FavouriteProvider>
    </MainTheme>
  );
};

export default App;
