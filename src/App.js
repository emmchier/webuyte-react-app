import { CartProvider } from './providers/CartProvider';
import { FavouriteProvider } from './providers/FavouriteProvider';
import { MainProvider } from './providers/MainProvider';
import MainTheme from './providers/MainThemeProvider';
import { AppRouter } from './router/AppRouter';
import { GlobalStyles } from './styles/globalStyles';

const App = () => {
  return (
    <MainTheme>
      <GlobalStyles />
      <MainProvider>
        <FavouriteProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </FavouriteProvider>
      </MainProvider>
    </MainTheme>
  );
};

export default App;
