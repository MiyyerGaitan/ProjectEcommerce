import React from "react";
import '../styles/test.css';
import { connect } from 'react-redux';
import { Component } from 'react';
import { addToCart } from './actions/cartActions';

class Burguer extends Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="flex-container">
                        <div class="flex-item-right" key={item.id}>
                        <h4>{item.title}</h4>
                        <img src={item.img} alt={item.title} width="300" height="200"/>
                        <p class="precio"> <span class="u-pull-right ">${item.price}</span></p>
                        <a onClick={()=>{this.handleClick(item.id)}}>Add to cart</a>
                </div>
                 </div>
            )
        })

        return(
            <div className="container">
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
  }

const mapStateToProps = (state)=>{
    return {
        items: state.items
         }
    }

const mapDispatchToProps= (dispatch)=>{
     return{
        addToCart: (id)=>{dispatch(addToCart(id))}
          }
    }    

export default connect(mapStateToProps,mapDispatchToProps)(Burguer)
