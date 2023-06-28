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

const allProductsMock = [
  {
    id: 1,
    name: 'Excalibur',
    price: '10 peças de ouro',
    orderId: 1
  },
  {
    id: 2,
    name: 'Espada Justiceira',
    price: '20 peças de ouro',
    orderId: 1
  },
  {
    id: 3,
    name: 'Lira de Orfeu',
    price: '1 peça de ouro',
    orderId: 2
  },
  {
    id: 4,
    name: 'Armadura de Aquiles',
    price: '1 peça de ouro',
    orderId: 2
  },
  {
    id: 5,
    name: 'Harpa de Dagda',
    price: '15 peças de ouro',
    orderId: 3
  }
];

export default {
    reqBodyMock,
    dbResponseMock,
    realDbResponseMock,
    allProductsMock,
};