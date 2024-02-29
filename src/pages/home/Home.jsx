import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
   const { todos } = useSelector((state) => state.todo);
   console.log(todos);
   return <div>Home</div>;
};

export default Home;
