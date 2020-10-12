// fetch the order being claimed
export const fetchOrder = async orderId => {
  const order = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders?order_id=${orderId}&token=${process.env.NEXT_PUBLIC_TOKEN}`
  )
    .then(res => res.json())
    .catch(err => 'Order ID not found');

  return order;
};

// fetch customer by email
export const fetchCustomer = async email => {
  const customer = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/customers?email=${email}&token=${process.env.NEXT_PUBLIC_TOKEN}`
  ).then(res => res.json());

  return customer;
};

// create a customer
export const createCustomer = async address => {
  const createdCustomer = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/customers?token=${process.env.NEXT_PUBLIC_TOKEN}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(address)
    }
  ).then(res => res.json());

  return createdCustomer;
};

// create a survey and update order entry to claimed
export const createSurvey = async (survey, orderId) => {
  const createdSurvey = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/surveys?token=${process.env.NEXT_PUBLIC_TOKEN}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(survey)
    }
  )
    .then(res => res.json())
    .then(() => {
      // update order to claimed
      return fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}?token=${process.env.NEXT_PUBLIC_TOKEN}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            claimed: true
          })
        }
      ).then(() => 'Order claimed');
    });
};
