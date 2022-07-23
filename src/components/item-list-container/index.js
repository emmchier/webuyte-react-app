import React, { useContext, useEffect, useState } from 'react';

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

import { useParams } from 'react-router';
import ItemList from './item-list';
import Section from '../common/section';
import { CartContext } from '../../context';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const items = categoryId
      ? query(collection(db, 'items'), where('category', '==', categoryId))
      : collection(db, 'items');
    getDocs(items)
      .then(({ docs }) => {
        const wineList = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(wineList);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  return <Section>{loading ? <h4>Cargando...</h4> : <ItemList items={products} />}</Section>;
};

export default ItemListContainer;
