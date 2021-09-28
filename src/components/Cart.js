import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe'
import '../styles/test.css';

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                                <div class="flex-container">
                                    <div class="flex-item-left">
                                        <img src={item.img} alt={item.img} width="200" height="150"/>
                                        <p>
                                        <h9>Price: ${item.price}       </h9>
                                        <h9>Quantity: {item.quantity}</h9>
                                        </p>
                                        <p>
                                            <Link to="/cart"><i onClick={()=>{this.handleAddQuantity(item.id)}}>+   /   </i></Link>
                                            <Link to="/cart"><i onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</i></Link>
                                        </p>
                                        <button onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>        
                                    </div>                                                        
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div>
                <div>
                    <h5>You have ordered:</h5>
                    <ul>
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)