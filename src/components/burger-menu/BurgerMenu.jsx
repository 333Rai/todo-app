import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BurgerMenu = () => {
   const [burgerMenu, setBurgerMenu] = useState(false);
   const burgerMenuChangeHandler = () => {
      setBurgerMenu((prevState) => !prevState);
   };
   return (
      <>
         <BurgerButton onClick={burgerMenuChangeHandler}>
            {burgerMenu ? (
               <span className='material-symbols-outlined'>close</span>
            ) : (
               <span className='material-symbols-outlined'>menu</span>
            )}
         </BurgerButton>

         {burgerMenu && (
            <Wrapper onClick={burgerMenuChangeHandler}>
               <BurgerContent onClick={(event) => event.stopPropagation()}>
                  <BurgerNav>
                     <NavItem>
                        <Link to='/create'>+Добавить</Link>
                     </NavItem>
                  </BurgerNav>
               </BurgerContent>
            </Wrapper>
         )}
      </>
   );
};
const Wrapper = styled.div`
   background-color: #0000003a;
   width: 100%;
   height: calc(100% - 55px);
   bottom: 0;
   left: 0;
   position: absolute;
   z-index: 99;
`;
const BurgerButton = styled.button`
   //
`;
const BurgerContent = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   background-color: white;
   box-shadow: -7px 7px 15px #00000084;
   border-radius: 10px;
   width: 111px;
   height: 130px;
   animation: burgerAnimation 333ms ease-out forwards;

   @keyframes burgerAnimation {
      from {
         opacity: 0;
         transform: translateY(-10rem);
      }
      to {
         opacity: 1;
         transform: translateY(0);
      }
   }
`;
const BurgerNav = styled.nav`
   //
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;
const NavItem = styled.li`
   list-style-type: none;
   font-size: 15px;
   & a {
      color: #000;
      font-weight: bold;
      text-decoration: none;
      font-size: 15px;
   }
`;

export default BurgerMenu;
