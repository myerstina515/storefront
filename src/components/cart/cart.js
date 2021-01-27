import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../../store/simpleCart';
import {incrementInv} from '../../store/categories';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';

const mapDispatchToProps = {removeItem, incrementInv};

function Cart(props){
console.log('Props from the cart page',props)

const handleRemove = item => {
  console.log(item);
}
  return(
    <div>
      {props.cart.length > 0 ? props.cart.map((item, idx) => (
        <div key={idx}>
          <Container maxWidth='sm' spacing={4} alignitems='stretch'>
              <Grid>
                <Grid item={4}>
                  <Card variant="outlined">
                    <CardHeader />
                    <CardContent>
                      <p>Name: {item.name}</p>
                      <p>Price: {item.price}</p>
                      <button onClick={() => handleRemove(item.name)}>Select Category</button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
        </div>
      ))
    : ''}
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state,
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);