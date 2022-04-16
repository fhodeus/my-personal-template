import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Wrapper,
  ProductImage,
  ProductInfo,
  ProductContainer,
  ProductName,
  ProductValue,
  SKU,
} from './Wrapper';

import Button from '../../components/Button';
import ContentFlex from '../../components/ContentFlex';
import ContentBlock from '../../components/ContentBlock';
import ContainerBlock from '../../components/ContainerBlock';
import ButtonSelect from '../../components/ButtonSelect';
import FormatCurrency from '../../components/FormatCurrency';

import { addToCart } from '../../store/cart/actions';

const ProductSlider = ({ state, dispatch }) => {
  const [productSelected, setProductSelected] = useState({});

  const handleClickAdd = () => {
    if (!productSelected.id) return;
    dispatch(addToCart(productSelected));
    setProductSelected({});
  };

  return (
    <Wrapper>
      {state.products.map((product) => (
        <ProductContainer key={product.id}>
          <ProductImage>
            <img src={product.image_url} alt="product-item" />
          </ProductImage>
          <ProductInfo>
            <ContainerBlock width="80%" flex>
              <ContentFlex height="100%" column>
                <ContentBlock>
                  <ProductName>{product.name}</ProductName>
                  <SKU>SKU : {product.id}</SKU>
                  <ProductValue>
                    <FormatCurrency value={product.valor} />
                  </ProductValue>
                </ContentBlock>
                <ContentFlex>
                  {product.swatches.color.map((swatch) => (
                    <ButtonSelect
                      disabled={swatch.amount <= 0}
                      key={swatch.id}
                      onClick={() => handleClickAdd(product)}
                    >
                      {swatch.title}
                    </ButtonSelect>
                  ))}
                </ContentFlex>
                <ContentFlex>
                  {product.swatches.size.map((swatch) => (
                    <ButtonSelect
                      disabled={swatch.amount <= 0}
                      selected={swatch.value === productSelected.swatchId}
                      key={swatch.id}
                      onClick={() =>
                        setProductSelected({
                          ...product,
                          id: Math.random(),
                          swatchId: swatch.value,
                        })
                      }
                    >
                      {swatch.title}
                    </ButtonSelect>
                  ))}
                </ContentFlex>
                <ContentFlex>
                  <Button type="button" onClick={handleClickAdd}>
                    ADICIONAR AO CARRINHO
                  </Button>
                </ContentFlex>
              </ContentFlex>
            </ContainerBlock>
          </ProductInfo>
        </ProductContainer>
      ))}
    </Wrapper>
  );
};

ProductSlider.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

const mapStateToProps = (state) => ({ state: state.products });

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ProductSlider);
