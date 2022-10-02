import React from 'react';
import './App.css';
import AppHeader from './components/header/header';
import BurgerIngredients from './components/burgerIngredients/burgerIngredients';
import OrderList from './components/burgerConstructor/burgerConstructor';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <div style={{ display: 'inline-block' }}>
      <h1 className={`text text_type_main-large pl-15 pr-0 pb-5 pt-10`} style={{textAlign: 'start'}}>
                Соберите бургер
            </h1>
      <div style={{ display: 'flex' }}> <BurgerIngredients />
      <OrderList /> </div>
      </div>
    </div>
  );
}

export default App;
