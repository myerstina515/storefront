import React from 'react';
import { connect } from 'react-redux';
import { setActiveCategory, filterProducts, decrementInv } from '../../store/categories';
// import { filterProducts } from '../../store/products';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';
import { addItem } from '../../store/simpleCart';

const mapDispatchToProps = { setActiveCategory, filterProducts, addItem, decrementInv };

// goal: make an app that displays two categories and allows you to click on one, which redirects you to "current category"


function Categories(props) {
  console.log('this is props', props.select);
  const selectCategory = (name) => {
    console.log('select category', name);
    // console.log(props.setActiveCategory(name));
    props.setActiveCategory(name);
    props.filterProducts(name);
    // console.log('active category:', name)
  }
  // console.log('what is this supposed to be?', props.select);
  const addToCart = (product) => {
    console.log('this is the product',product)
    console.log(props);
    props.addItem(product);
    props.decrementInv(product)
  }

  return (
    <div id="category-selector">
      {props.select.currentCategory.activeCategory === null
        ? (props.select.currentCategory.categories.map((category, idx) => (
          <div key={idx}>
            <Container maxWidth='sm' spacing={4} alignitems='stretch'>
              <Grid>
                <Grid item={12}>
                  <Card variant="outlined">
                    <CardHeader />
                    <CardContent>
                      <p>Name: {category.name}</p>
                      <button onClick={() => selectCategory(category.name)}>Select Category</button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </div>
        )))
        : (props.select.currentCategory.products.map((product, idx) => 
          <div key={idx}>
            <Container maxWidth='sm' spacing={4} alignitems='stretch'>
              <Grid>
                <Grid item={12}>
                  <Card variant="outlined">
                    <CardHeader />
                    <CardContent>
                      <p>Name: {product.name}</p>
                      <p>Price: {product.price}</p>
                      <p>In Stock: {product.inStock}</p>
                      <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>

          </div>)
        )}
    </div>

  )
}

const mapStateToProps = state => ({
  select: state
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);