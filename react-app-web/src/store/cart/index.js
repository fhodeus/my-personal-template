import { ADD_CART, REMOVE_CART, COLLAPSE_CART, ADD_CUPOM } from './constants';

const INITIAL_STATE = {
  total: 0,
  products: [],
  collapsed: false,
  cupons: [
    {
      id: 0,
      title: 'CUPOM PERCENTUAL',
      value: 'CUPOMPERCENTUAL',
      descricao:
        'O cupom Percentual aplica um desconto percentual em todos os produtos do carrinho.',
      desconto: 10,
      type: 'percentage',
    },
    {
      id: 1,
      title: 'CUPOM TOTAL',
      value: 'CUPOMTOTAL',
      descricao: 'O cupom Total aplica um desconto no valor de cada um dos itens do carrinho.',
      desconto: 5,
      type: 'amount',
    },
    {
      id: 2,
      title: 'CUPOM UNITARIO',
      value: 'CUPOMUNITARIO',
      descricao: `O cupom Unitario aplica um desconto no valor do produto de maior valor do carrinho. 
        O desconto nao sera aplicado caso o valor do produto seja maior que o valor do desconto ofertado.`,
      desconto: 25,
      type: 'unitary',
    },
  ],
  cupom: undefined,
};

/* eslint-disable default-case, no-param-reassign */
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CART:
      state.products.push({ ...action.payload });
      return {
        ...state,
        collapsed: true,
      };

    case REMOVE_CART:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };

    case COLLAPSE_CART:
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    case ADD_CUPOM:
      return {
        ...state,
        cupom: state.cupons.find((item) => item.value == action.payload),
      };
  }
  return state;
}
