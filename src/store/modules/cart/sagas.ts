import { all, takeLatest, select } from 'redux-saga/effects';
import { ISate } from '../..';
import { addProductToCart } from './actions';

type CheckProductStockRequest = ReturnType<typeof addProductToCart>;

function* checkProductStock({payload}: CheckProductStockRequest) {

  const {product} = payload;

  const currentQuantity: number = yield select((state: ISate) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  console.log(currentQuantity);
  
  console.log('Adicionou ao carinho')
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
]);