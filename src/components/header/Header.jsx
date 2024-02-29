import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Theme from '../theme/Theme';
import BurgerMenu from '../burger-menu/BurgerMenu';
import { Link } from 'react-router-dom';
const Header = () => {
   return (
      <HeaderWrapper>
         <Link to='/'>
            <HeaderLogo>TODOList</HeaderLogo>
         </Link>
         <HeaderNav>
            <Theme />
            <BurgerMenu />
         </HeaderNav>
      </HeaderWrapper>
   );
};
const HeaderWrapper = styled.div`
   padding: 15px;
   background-color: white;
   border-radius: 0 0 15px 15px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   & a {
      text-decoration: none;
      font-size: 20px;
   }
`;
const HeaderLogo = styled.h3`
   color: black;
`;
const HeaderNav = styled.div`
   width: 16%;
   display: flex;
   justify-content: space-between;
   /* background-color: rebeccapurple; */
   //
`;
export default Header;
