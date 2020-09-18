export default (state = {}, action) => {
  const { id, brand, alcContent, quantity, price } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          brand: brand,
          alcContent: alcContent,
          quantity: quantity,
          price: price,
          id: id
        }
      });
    case 'DELETE_DEG':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};