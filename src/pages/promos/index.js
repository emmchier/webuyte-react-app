import React, { useContext } from 'react';

import Section from '../../components/atomic-design/atoms/section';
// import PromosList from '../../components/atomic-design/organisms/promos/promos-list';
// import { MainContext } from '../../context';

const PromosPage = () => {
  //   const { loadingPromos, promos } = useContext(MainContext);
  //   console.log(promos);

  //   return <Section>{loadingPromos ? <h4>Cargando...</h4> : <PromosList items={promos} />}</Section>;
  return <Section>Promos</Section>;
};

export default PromosPage;
