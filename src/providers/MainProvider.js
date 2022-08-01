import { useState } from 'react';

// import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { MainContext } from '../context';

export const MainProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(false);
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

  const getProduct = (itemId) => {
    setLoadingProducts(true);
    const ref = doc(db, 'items', itemId);
    getDoc(ref)
      .then((doc) => {
        const wine = { ...doc.data(), id: doc.id };
        setProduct(wine);
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
        product,
        setProduct,
        getProduct,
        loadingProduct,
        setLoadingProduct,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
