import styled from 'styled-components';

//shared styles imports
import {
  boxFrameWithShadow,
  centerElementToTheMiddle,
} from '../../../shared/shared.styles';

export const NavigationContainer = styled.div`
  font-size: 1.5rem;
`;

export const NavigationIconBurger = styled.span`
  position: relative;
  margin-top: 3rem;
  &,
  &::before,
  &::after {
    display: inline-block;
    width: 3rem;
    height: 2px;
    background-color: #333;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: -1rem;
  }
  &::after {
    top: 1rem;
  }
`;

{
  /* 'label' in this case will be our buton to triger the checkbox with action */
}
export const NavigationLabelForCheckbox = styled.label`
  display: block;
  //size
  width: 7rem;
  height: 7rem;

  //position
  position: fixed;
  top: 6rem;
  right: 6rem;
  z-index: 2000;

  background-color: white;

  ${boxFrameWithShadow}
  text-align: center;
  cursor: pointer;

  &:hover ${NavigationIconBurger}::before {
    top: -1.1rem;
  }
  &:hover ${NavigationIconBurger}::after {
    top: 1.1rem;
  }
`;

{
  /* this container will be our menu icon expanding to whole page */
}
export const NavigationMenuContainer = styled.div`
  //position feature
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  z-index: 1000;

  //size feature
  width: 6rem;
  height: 6rem;
  transition: transform 0.8s;
`;

export const NavigationNavContainer = styled.nav`
  //size
  height: 100vh;

  //position
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;

  //to hide element from view
  opacity: 0;
  width: 0;

  //animations features
  transition: all 0.8s;
`;

//checkbox and label triger functionality
export const NavigationInputCheckbox = styled.input`
  display: none;

  &:checked ~ ${NavigationMenuContainer} {
    transform: scale(80);
  }

  &:checked ~ ${NavigationNavContainer} {
    opacity: 1;
    width: 100%;
  }

  &:checked + ${NavigationLabelForCheckbox} ${NavigationIconBurger} {
    background-color: transparent;
  }

  &:checked + ${NavigationLabelForCheckbox} ${NavigationIconBurger}::before {
    top: 0;
    transform: rotate(135deg);
  }

  &:checked + ${NavigationLabelForCheckbox} ${NavigationIconBurger}::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

export const NavigationUlList = styled.ul`
  //function that center element in the middle of webpage
  ${centerElementToTheMiddle}
  text-align: center;
  list-style: none;
`;

export const NavigationLiItem = styled.li`
  margin: 1rem;
`;

export const NavigationLiElementLink = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 2rem;
    border: 2px solid white;

    //creating some linear gradient to be base for animation over hover
    background-image: linear-gradient(120deg, white 0%, white 50%, black 50%);
    background-size: 230%;
    transition: all 0.4s;
  }
  &:hover,
  &:active {
    background-position: 100%;
    color: white;
    ${boxFrameWithShadow}
    transform: translate(1rem)
  }
`;
