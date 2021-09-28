import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Form extends Component{
    
    render(){
        let addedItems = this.props.items;
        console.log(addedItems[0]);
        return(
            <div>
            <div>
            <ul id="carrito" class="list-group"></ul>
            <p><input type="text" id="fname" name="firstname" placeholder="Your name.."></input></p>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            <p><label>Total</label></p>
            <p><input type="text" value={`$${this.props.total}`} class="field left" disabled></input></p>
            <p><label>Total</label></p>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>Hamburguer</td>
                    <td>Maria Anders</td>
                </tr>
                <tr>
                    <td>Fries</td>
                    <td>Francisco Chang</td>
                </tr>
                <tr>
                    <td>Gaseosa</td>
                    <td>Roland Mendel</td>
                </tr>
            </table>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Form)
