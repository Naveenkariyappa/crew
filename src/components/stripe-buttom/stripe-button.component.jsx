import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

import React from 'react';

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IduqVSGd8rUymH6iFt89Gq2bdyDrWCttfNq6yqYO2ZKq6XEnjtQApErW2nhi6yYho6APZcCRab8hJqWQSKK2u9b00rdGwc3x8';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckOutButton;
