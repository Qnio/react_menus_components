//CORE LIBLARIES
import React from 'react';

//STYLED COMPONENTS IMPORT
import {
  NavigationContainer,
  NavigationInputCheckbox,
  NavigationIconBurger,
  NavigationLabelForCheckbox,
  NavigationMenuContainer,
  NavigationNavContainer,
  NavigationUlList,
  NavigationLiItem,
  NavigationLiElementLink,
} from './nav-menu-two.styles';

const NavigationMenuTwo = () => (
  <NavigationContainer>
    {/*we need to connect checkbox with label to have interactive menu button
      to connect checkbox with label we use 'id' element on checkbox and 'for'
      element on label
    */}
    <NavigationInputCheckbox type='checkbox' id='navi-toggle' />
    <NavigationLabelForCheckbox htmlFor='navi-toggle'>
      <NavigationIconBurger>&nbsp;</NavigationIconBurger>
    </NavigationLabelForCheckbox>

    {/* duilding div element that will be container and background for our
        navigation menu */}
    <NavigationMenuContainer>&nbsp;</NavigationMenuContainer>

    {/* Navigation element list for our menu, we use 'nav' html element */}
    <NavigationNavContainer>
      <NavigationUlList>
        <NavigationLiItem>
          <NavigationLiElementLink href='#'>Home</NavigationLiElementLink>
        </NavigationLiItem>
        <NavigationLiItem>
          <NavigationLiElementLink href='#'>About</NavigationLiElementLink>
        </NavigationLiItem>
        <NavigationLiItem>
          <NavigationLiElementLink href='#'>Portfolio</NavigationLiElementLink>
        </NavigationLiItem>
        <NavigationLiItem>
          <NavigationLiElementLink href='#'>
            Testimponials
          </NavigationLiElementLink>
        </NavigationLiItem>
        <NavigationLiItem>
          <NavigationLiElementLink href='#'>Contact</NavigationLiElementLink>
        </NavigationLiItem>
      </NavigationUlList>
    </NavigationNavContainer>
  </NavigationContainer>
);

export default NavigationMenuTwo;
