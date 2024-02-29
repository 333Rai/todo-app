import styled from 'styled-components';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/home/Home';
const AppContent = () => {
   return (
      <>
         <Header />
      </>
   );
};
const App = () => {
   return (
      <Wrapper>
         <Provider store={store}>
            <BrowserRouter>
               <AppContent />
               <AppRoutes />
            </BrowserRouter>
         </Provider>
      </Wrapper>
   );
};
const Wrapper = styled.div`
   min-width: 100%;
   height: 100vh;
   margin: 0 auto;
   background-color: rgb(52, 13, 91);
`;

export default App;
