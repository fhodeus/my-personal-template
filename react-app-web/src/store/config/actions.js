import { CURRENCE_LOCATION, MODAL_CHECKOUT } from './constants';

export function changeLocale() {
  return {
    type: CURRENCE_LOCATION,
  };
}

export function openModal(open = true) {
  return {
    type: MODAL_CHECKOUT,
    payload: open,
  };
}
