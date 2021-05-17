//CORE COMPONENTS
import React from 'react';

//CREATED COMPONENTS FOR THIS PROJECT
import NavigationMenuOne from './components/navigation-menus/nav-menu-one/nav-menu-one.component';
import NavigationMenuTwo from './components/navigation-menus/nav-menu-two/nav-menu-two.component';
import HomePage from './components/home-page/home-page.component';
//STYLED COMPONENTS IMPORT
import { GlobalStyle } from './global.styles.jsx';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <NavigationMenuTwo />
      <HomePage />
    </div>
  );
}

export default App;
