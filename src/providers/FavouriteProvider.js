import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { FavouriteContext } from '../context';
import { db } from '../firebase';

export const FavouriteProvider = ({ children }) => {
  const [favouriteList, setFavouriteList] = useState([]);
  const [loadingFavourites, setLoadingFavourites] = useState(false);

  const getFavourites = () => {
    setLoadingFavourites(true);
    const items = query(collection(db, 'items'), where('isFavourite', '==', true));
    // const items = collection(db, 'favorites');
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
        getFavourites();
      });
    });
  };

  // const addFavourite = (item) => {
  //   const docRef = collection(db, 'favorites');
  //   addDoc(docRef, item).then((response) => {
  //     console.log(response, item.id);
  //   });
  // };

  // const deleteFavourite = (id) => {
  //   const docRef = doc(db, 'favourites', id);
  //   deleteDoc(docRef).then((docDeleted) => {
  //     console.log(docDeleted + 'doc eliminado');
  //     getFavourites();
  //   });
  // };

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
        // deleteFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
