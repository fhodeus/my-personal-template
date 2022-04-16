/* eslint-disable no-unused-vars */
const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: 'primeiro produto',
      valor: 10,
      image_url: 'https://via.placeholder.com/500',
      swatches: {
        color: [],
        size: [
          {
            id: `1-1`,
            title: 'P',
            value: 'P',
            amount: 0,
          },
          {
            id: `1-2`,
            title: 'M',
            value: 'M',
            amount: 1,
          },
          {
            id: `1-3`,
            title: 'G',
            value: 'G',
            amount: 1,
          },
          {
            id: `1-4`,
            title: 'XG',
            value: 'XG',
            amount: 1,
          },
        ],
      },
    },
    {
      id: 2,
      name: 'segundo produto',
      valor: 20,
      image_url: 'https://via.placeholder.com/500',
      swatches: {
        color: [],
        size: [
          {
            id: `2-1`,
            title: 'P',
            value: 'P',
            amount: 1,
          },
          {
            id: `2-2`,
            title: 'M',
            value: 'M',
            amount: 1,
          },
          {
            id: `2-3`,
            title: 'G',
            value: 'G',
            amount: 1,
          },
        ],
      },
    },
    {
      id: 3,
      name: 'terceiro produto',
      valor: 30,
      image_url: 'https://via.placeholder.com/500',
      swatches: {
        color: [],
        size: [
          {
            id: `3-1`,
            title: 'P',
            value: 'P',
            amount: 1,
          },
          {
            id: `3-2`,
            title: 'M',
            value: 'M',
            amount: 1,
          },
          {
            id: `3-3`,
            title: 'G',
            value: 'G',
            amount: 1,
          },
          {
            id: `3-4`,
            title: 'XG',
            value: 'XG',
            amount: 1,
          },
        ],
      },
    },
  ],
};

export default function reducer(state = INITIAL_STATE, action) {
  return state;
}
