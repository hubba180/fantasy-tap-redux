import KegReducer from '../../reducers/KegReducer';

describe('KegReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(KegReducer({}, { type: null })).toEqual({});
  });
});