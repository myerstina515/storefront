import React, {useState} from 'react';
import { connect } from 'react-redux';
import { setActiveCategory, filterProducts } from '../../store/categories';
// import { filterProducts } from '../../store/products';

const mapDispatchToProps = { setActiveCategory, filterProducts };

// goal: make an app that displays two categories and allows you to click on one, which redirects you to "current category"


function Categories(props){
  console.log('this is props',props.select.categories);
  const selectCategory = (name) => {
    // console.log('select category', name);
    // console.log(props.setActiveCategory(name));
    props.setActiveCategory(name);
    props.filterProducts(name);
    // console.log('active category:', name)
  }
  // console.log('what is this supposed to be?', props.select);
  return(
    <div id="category-selector">
      {(!props.select.categories.activeCategory)
      ? props.select.categories.map((category, idx) => (
        <div key={idx}>
          <p>Name: {category.name}</p>
          <button onClick={() => selectCategory(category.name)}>Select Category</button>
        </div>
      ))
      : props.select.categories.filterProducts((item) => {
        <div>
            <p>Price: {item.price}</p>
            <p>In Stock: {item.inStock}</p>
        </div>
      })}
    </div>
  
  )
}

const mapStateToProps = state => ({
  select: state.currentCategory,
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);