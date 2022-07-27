import React, { useContext, useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Section from '../../components/atomic-design/atoms/section';
import DetailItem from '../../components/atomic-design/organisms/detail/detail-item';
import { CartContext } from '../../context';
import { db } from '../../firebase';

const ProductDetailPage = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const { loadingCart, setLoadingCart } = useContext(CartContext);

  useEffect(() => {
    setLoadingCart(true);
    const ref = doc(db, 'items', itemId);
    getDoc(ref)
      .then((doc) => {
        const wine = { ...doc.data(), id: doc.id };
        setProduct(wine);
      })
      .finally(() => setLoadingCart(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return <Section>{loadingCart ? <h4>Cargando...</h4> : <DetailItem item={product} />}</Section>;
};

export default ProductDetailPage;
