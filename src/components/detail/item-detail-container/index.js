import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

import Section from '../../common/section';
import ItemDetail from '../item-detail';
import { CartContext } from '../../../context';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const { loading, setLoading } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const ref = doc(db, 'items', itemId);
    getDoc(ref)
      .then((doc) => {
        const wine = { ...doc.data(), id: doc.id };
        setProduct(wine);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return <Section>{loading ? <h4>Cargando...</h4> : <ItemDetail item={product} />}</Section>;
};

export default ItemDetailContainer;
