import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { todoActionTypes } from '../../helpers/constants';

const Create = () => {
   const { error, success } = useSelector((state) => state.todo);
   const [todoInput, setTodoInput] = useState('');
   const dispatch = useDispatch();
   const todoInputChangeHandler = (event) => {
      const { value } = event.target;
      setTodoInput(value);
      dispatch({ type: todoActionTypes.TODO_FAILED });
   };
   const submitHandler = (event) => {
      event.preventDefault();
      if (!todoInput.trim()) {
         dispatch({
            type: todoActionTypes.TODO_FAILED,
            payload: 'Напишите что нибудь!',
         });
         return;
      }
      const newTodo = {
         id: Date.now(),
         name: todoInput,
      };
      dispatch({ type: todoActionTypes.ADD_TODO_SUCCESS, payload: newTodo });
      setTimeout(() => {
         dispatch({
            type: todoActionTypes.ADD_TODO_SUCCESS_MESSAGE,
            payload: 'Успешно добавлен!',
         });
      }, 500);
   };
   return (
      <>
         {success && <Success>{success}</Success>}
         <Wrapper>
            <Title>Add a new task</Title>
            <ErrorBox>{error && <Error>{error}</Error>}</ErrorBox>
            <Form onSubmit={submitHandler}>
               <Input onChange={todoInputChangeHandler} type='text' />
               <Button>+Добавить</Button>
            </Form>
         </Wrapper>
      </>
   );
};
const Wrapper = styled.div`
   position: absolute;
   top: 20%;
   left: 50%;
   transform: translate(-50%, -20%);
   width: 255px;
   padding: 20px;
   border: 2px solid purple;
   background-color: #80008095;
   border-radius: 15px;
   height: 165px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;
const Title = styled.h3`
   color: white;
   font-size: 21px;
   text-align: center;
`;
const Success = styled.div`
   background-color: white;
   position: absolute;
   top: 65px;
   display: flex;
   align-items: center;
   font-size: 17px;
   padding-left: 10px;
   right: 0;
   width: 180px;
   height: 44px;
   border-radius: 5px;
   animation: successAnimation 333ms ease-out forwards;

   @keyframes successAnimation {
      from {
         opacity: 0;
         transform: translateX(10rem);
      }
      to {
         opacity: 1;
         transform: translateX(0);
      }
   }
`;
const ErrorBox = styled.div`
   height: 20px;
`;
const Error = styled.h4`
   color: red;
   font-size: 15px;
   text-align: center;
`;
const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
`;
const Input = styled.input`
   padding: 7px;
   border-radius: 3px;
   font-size: 15px;
   outline: 0;
   border: 0;

   &:focus {
      outline: 2px solid darkblue;
   }
`;
const Button = styled.button`
   margin-top: 10px;
   background-color: navy;
   color: white;
   padding: 10px 25px;
   font-weight: bold;
   transition: 55ms all ease-out;
   border-radius: 5px;
   &:active {
      background-color: #10108c;
   }
`;

export default Create;
