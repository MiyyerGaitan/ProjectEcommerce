import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import { Feather, ShoppingCart } from 'react-feather';
import App from './components/App';
import {GlobalStyle, Menu, Header, Page, Hamburger} from './components/UiComponents'
import Burger from "./components/Burger";
import Cart from "./components/Cart";
import Form from './components/Form';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';

if (process.env.NODE_ENV === 'production')
    var url = window.location.origin;
else
    var url = 'http://192.168.1.54';

const store = createStore(cartReducer);

function Root() {
    
    const [menu, setMenu] = useState(false);

    return <><GlobalStyle />

    <BrowserRouter>

        <Header>
            <h1><Feather style={{vericalAlign:"-0.1em"}} /> Restaurant</h1>
            <h1><ShoppingCart style={{verticalAlign:"-0.1em"}} /> </h1>
            <Hamburger onClick={() => setMenu(!menu)} />
            <Menu className={menu ? "" : "menuHidden"}>
                <li><NavLink onClick={() => setMenu(false)} exact to="/">Home</NavLink></li>
                <li><NavLink onClick={() => setMenu(false)} exact to="/cart">Check-out</NavLink></li>
                <li><NavLink onClick={() => setMenu(false)} exact to="/form">Pay</NavLink></li>
            </Menu>

        </Header>
        <Switch>
            <Page>
            <Route exact path="/" component={Burger}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/form" component={Form}/>
            </Page>
        </Switch>
    </BrowserRouter>
</>;

}

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));