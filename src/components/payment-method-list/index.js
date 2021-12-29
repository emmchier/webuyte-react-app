import React from "react";
import { payments } from "../../domain/paymentList";

import {
  AmericanExpressIcon,
  MastercardIcon,
  MoreCreditCardIcon,
  VisaIcon,
} from "../../ui/icons";

import { List } from "./styles";

const PaymentMethodList = () => {
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
