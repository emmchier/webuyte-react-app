import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useForm } from '../../hooks/useForm';
import Button from '../../components/atomic-design/atoms/button';
import CartItem from '../../components/atomic-design/organisms/cart/cart-item';
import Form from '../../components/atomic-design/organisms/form';
import EmptyList from '../../components/atomic-design/molecules/empty-list';
import { Col, Container, Row } from 'react-grid-system';
import Heading from '../../components/atomic-design/atoms/heading';
import ListDivider from '../../components/atomic-design/atoms/list-divider';
import { StockContainer } from '../../components/atomic-design/organisms/detail/detail-item/styles';
import { CartContext } from '../../context';
import Section from '../../components/atomic-design/atoms/section';

import {
  ContainerList,
  CartContent,
  TotalPrice,
  CartActions,
  BuyDataContainer,
  Adjust,
  HeaderCartContainer,
  CartGeneralInfo,
} from './styles';

const CartPage = () => {
  const navigate = useNavigate();

  const { cartList, cartUnities, cartTotalPrice, removeProductFromCart, clearCart, setOrder } =
    useContext(CartContext);

  const [formValues, handleInputChange] = useForm({
    userName: '',
    userEmail: '',
    userPhone: '',
    userConfirmPhone: '',
  });

  const { userName, userEmail, userPhone, userConfirmPhone } = formValues;

  const uploadNewOrder = (e) => {
    e.preventDefault();
    if (
      userName.trim() !== '' &&
      userEmail.trim() !== '' &&
      userPhone.trim() !== '' &&
      userConfirmPhone.trim() !== '' &&
      userPhone.trim() === userConfirmPhone.trim()
    ) {
      createOrder();
    } else {
      alert('Ocurrió un error. Alguno de los campos no es correcto.');
    }
  };

  const createOrder = () => {
    const date = new Date();
    const ref = collection(db, 'orders');
    const newOrder = {
      buyer: { ...formValues },
      cartList,
      date: date,
      total: cartTotalPrice,
    };
    addDoc(ref, newOrder).then((response) => {
      setOrder(response);
      clearCart();
      navigate(`/compra/${response.id}`);
    });
  };

  const emptyDescription = ['Seguí buscando en nuestra', <span>tienda los mejores vinos</span>];

  return (
    <Section>
      <CartContent className="animate__animated animate__fadeIn">
        {cartUnities > 0 ? (
          <>
            <Container component={Adjust}>
              <HeaderCartContainer>
                <CartGeneralInfo>
                  <Heading variant="h3">Mi Carrito</Heading>
                  <span> | </span>
                  <TotalPrice>
                    Precio TOTAL <span>{`$${cartTotalPrice}`}</span>
                  </TotalPrice>
                  <StockContainer>
                    Cantidad de productos (<span>{cartUnities && cartUnities}</span>)
                  </StockContainer>
                </CartGeneralInfo>
                <CartActions>
                  <Link to="/">
                    <Button variant="text">Volver al listado</Button>
                  </Link>
                  <span> | </span>
                  <Button variant="text" onClick={clearCart}>
                    Eliminar Carrito
                  </Button>
                </CartActions>
              </HeaderCartContainer>
              <ListDivider />
              <Row>
                <Col xs={6} sm={4} md={3} lg={8}>
                  <ContainerList>
                    {cartList.map((product) => (
                      <CartItem
                        key={product.id}
                        product={product}
                        removeProductFromCart={removeProductFromCart}
                      />
                    ))}
                  </ContainerList>
                </Col>
                <Col xs={6} sm={4} md={3} lg={4}>
                  <BuyDataContainer>
                    <h4>Ingresá los datos de tu compra</h4>
                    <Form
                      handleSubmit={(e) => uploadNewOrder(e)}
                      formValues={formValues}
                      handleInputChange={handleInputChange}
                    />
                  </BuyDataContainer>
                </Col>
              </Row>
            </Container>
          </>
        ) : (
          <EmptyList
            title={'Tu carrito está vacío'}
            description={emptyDescription}
            isButton={true}
            buttonTitle="Volver al listado"
            to="/"
          />
        )}
      </CartContent>
    </Section>
  );
};

export default CartPage;
