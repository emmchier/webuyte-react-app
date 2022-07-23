import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { CartContext } from '../context';
import { db } from '../firebase';

export const FavouriteProvider = ({ children }) => {
  const [favouriteList, setFavouriteList] = useState([]);
  const [loadingFavourites, setLoadingFavourites] = useState(false);

  useEffect(() => {
    setLoadingFavourites(true);
    const items = collection(db, 'favourites');
    getDocs(items)
      .then(({ docs }) => {
        const favList = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setFavouriteList(favList);
      })
      .finally(() => setLoadingFavourites(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('favourites');
  }, []);

  const clearFavourites = () => setFavouriteList([]);

  return (
    <CartContext.Provider
      value={{
        favouriteList,
        setFavouriteList,
        loadingFavourites,
        setLoadingFavourites,
        clearFavourites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
