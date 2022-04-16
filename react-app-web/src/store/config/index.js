import { CURRENCE_LOCATION, MODAL_CHECKOUT } from './constants';

const INITIAL_STATE = {
  locale: `BR`,
  modal: true,
};

/* eslint-disable default-case, no-param-reassign */
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CURRENCE_LOCATION:
      return {
        ...state,
        locale: state.locale === `BR` ? `US` : `BR`,
      };
    case MODAL_CHECKOUT:
      return {
        ...state,
        modal: action.payload,
      };
  }
  return state;
}
