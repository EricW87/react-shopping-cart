import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log(cart);
		console.log(item);
		if(cart.find(element => element.id === item.id)) //Can't add duplicates :(
			return;

		setCart([...cart, item]);
	};

	const removeItem = itemid => {
		// add the given item to the cart
		console.log(itemid);
		let cart_remove = cart.filter(element => element.id !== itemid);
		console.log(cart);
		console.log(cart_remove);
		setCart([...cart_remove]);
	};


	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value = {{cart, removeItem}}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products}/>

					<Route
						path="/cart"
						component={ShoppingCart}/>
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
