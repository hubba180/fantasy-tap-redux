import KegReducer from '../../reducers/KegReducer';

describe('KegReducer', () => {

  let action;
  const KegData = {
    name: 'Beer',
    brand: 'Beer Brand',
    alcContet: '10%',
    quantity: 124,
    price: 10.99,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(KegReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add new keg data to CurrentKegs', () => {
    const {id, name, brand, alcContent, quantity, price } = KegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      alcContent: alcContent,
      quantity: quantity,
      price: price,
      id: id
    };

    expect(KegReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        alcContent: alcContent,
        quantity: quantity,
        price: price,
        id: id
      }
    });
  });
  test('Should successfully delete keg data to CurrentKegs', () => {
    const {id, name, brand, alcContent, quantity, price } = KegData;
    action = {
      type: 'Delete_KEG',
      name: name,
      brand: brand,
      alcContent: alcContent,
      quantity: quantity,
      price: price,
      id: id
    };

    expect(KegReducer({}, action)).toEqual({});
  });
});