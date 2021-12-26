import React, { useContext, useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import {
  AmericanExpressIcon,
  MastercardIcon,
  MoreCreditCardIcon,
  VisaIcon,
} from "../../ui/icons";
import { List } from "./styles";
import { CartContext } from "../../context/cartContext";
import { db } from "../../firebase";

const PaymentMethodList = () => {
  const { payments, setPayments } = useContext(CartContext);

  useEffect(() => {
    const items = collection(db, "payments");
    getDocs(items).then(({ docs }) => {
      const paymentMethods = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPayments(paymentMethods);
    });
  }, [payments, setPayments]);

  const getPaymentIcons = (paymentName) => {
    switch (paymentName) {
      case "visa":
        return <VisaIcon />;
      case "mastercard":
        return <MastercardIcon />;
      case "american":
        return <AmericanExpressIcon />;
      case "more":
        return <MoreCreditCardIcon />;
      default:
        return <MoreCreditCardIcon />;
    }
  };

  return (
    <List>
      {payments.map((payment) => (
        <li key={payment.paymentName}>
          {getPaymentIcons(payment.paymentName)}
        </li>
      ))}
    </List>
  );
};

export default PaymentMethodList;
