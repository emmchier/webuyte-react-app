import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '../../components/atomic-design/atoms/button';
import Heading from '../../components/atomic-design/atoms/heading';
import Section from '../../components/atomic-design/atoms/section';
import Text from '../../components/atomic-design/atoms/text';
import { CartContext } from '../../context';

import { CloseOrderContent, CloseOrderInfo, TextContainer } from './styles';

const OrderDetailPage = () => {
  const navigate = useNavigate();
  const { order, setOrder } = useContext(CartContext);
  const { id } = order;

  const closeOrder = () => {
    setOrder({});
    navigate('/');
  };

  return (
    <>
      <CloseOrderContent>
        <Section>
          <Heading variant="h4">¡FELICIDADES POR TU COMPRA!</Heading>
        </Section>
      </CloseOrderContent>
      <CloseOrderInfo>
        <TextContainer>
          <Text>Para realizar el seguimiento, tu número de pedido es</Text>
          <Text>
            <span>{id}</span>
          </Text>
        </TextContainer>
        <Button ariaLabel="link" onClick={closeOrder}>
          Seguir comprando
        </Button>
      </CloseOrderInfo>
    </>
  );
};

export default OrderDetailPage;
