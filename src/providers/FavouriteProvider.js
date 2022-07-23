import { doc, updateDoc, collection, getDocs, query, where, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { FavouriteContext } from '../context';
import { db } from '../firebase';

export const FavouriteProvider = ({ children }) => {
  const [favouriteList, setFavouriteList] = useState([]);
  const [loadingFavourites, setLoadingFavourites] = useState(false);

  const getFavourites = () => {
    setLoadingFavourites(true);
    const items = query(collection(db, 'items'), where('isFavourite', '==', true));
    getDocs(items)
      .then(({ docs }) => {
        const favList = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setFavouriteList(favList);
      })
      .finally(() => setLoadingFavourites(false));
  };

  useEffect(() => {
    getFavourites();
    console.log('favorites');
  }, []);

  const addFavourite = (item, bool) => {
    const docRef = doc(db, 'items', item.id);
    updateDoc(docRef, {
      isFavourite: bool,
    }).then(() => {
      getDoc(docRef).then((doc) => {
        console.log(doc.data(), doc.id);
      });
    });
    // const ref = collection(db, 'favorites');
    // addDoc(ref, item).then((response) => {
    //   console.log(response, item.id);
    // });
  };

  //   const deleteFavourite = (item) => {
  //     const docRef = doc(db, 'favorites', item.id);
  //     deleteDoc(docRef).then((docDeleted) => {
  //       console.log(docDeleted + 'doc eliminado');
  //     });
  //   };

  const clearFavourites = () => setFavouriteList([]);

  return (
    <FavouriteContext.Provider
      value={{
        getFavourites,
        favouriteList,
        setFavouriteList,
        loadingFavourites,
        setLoadingFavourites,
        clearFavourites,
        addFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
