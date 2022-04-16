import { ADD_CART, REMOVE_CART, COLLAPSE_CART, ADD_CUPOM } from './constants';

export function addToCart(product) {
  const { id, name, valor, swatchId, image_url } = product;
  return {
    type: ADD_CART,
    payload: { id, name, valor, swatchId, image_url },
  };
}

export function removeToCart(id) {
  return {
    type: REMOVE_CART,
    payload: id,
  };
}

export function collapseCart() {
  return {
    type: COLLAPSE_CART,
  };
}

export function AddCupom(cupom) {
  return {
    type: ADD_CUPOM,
    payload: cupom,
  };
}
