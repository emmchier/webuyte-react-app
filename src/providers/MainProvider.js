import { useState } from 'react';

// import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { MainContext } from '../context';

export const MainProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  // const imageListRef = ref(storage, 'images/');
  //   listAll(imageListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImages(url);
  //       });
  //     });
  //   });
  // }, []);

  const getProducts = (categoryId) => {
    setLoadingProducts(true);
    const items = categoryId
      ? query(collection(db, 'items'), where('category', '==', categoryId))
      : collection(db, 'items');
    getDocs(items)
      .then(({ docs }) => {
        const wineList = docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(wineList);
      })
      .finally(() => setLoadingProducts(false));
  };

  return (
    <MainContext.Provider
      value={{
        getProducts,
        products,
        setProducts,
        loadingProducts,
        setLoadingProducts,
        // images,
        // setImages,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
