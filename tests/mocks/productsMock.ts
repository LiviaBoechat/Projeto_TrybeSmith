const nameMock = 'Escudo';
const priceMock = '90 moedas';
const orderIdMock = 4;

const reqBodyMock = { 
    name: nameMock, 
    price: priceMock, 
    orderId: orderIdMock 
};

const dbResponseMock = { 
  id: 9,
  name: nameMock,
  price: priceMock,
  orderId: orderIdMock ,
};

const realDbResponseMock = { 
    id: 9,
    name: nameMock,
    price: priceMock,
  };

export default {
    reqBodyMock,
    dbResponseMock,
    realDbResponseMock,
};