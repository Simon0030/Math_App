
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import EquationPage from './pages/EquationPage';
import CalculatorPage from './pages/CalculatorPage';
import GamePage from './pages/GamePage';


function App() {
  let isAuth = useSelector(state => state.auth.isAuthenticated);
  


  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!isAuth && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
          {isAuth && <UserProfile />}
          {!isAuth && <Redirect to='/auth' />}
        </Route>
        <Route path='/equation'>
          {isAuth && <EquationPage/>}
          {!isAuth && <Redirect to='/auth' />}
        </Route>
        <Route path='/calculator'>
          {isAuth && <CalculatorPage/>}
          {!isAuth && <Redirect to='/auth' />}
        </Route>
        <Route path='/game'>
          {isAuth && <GamePage/>}
          {!isAuth && <Redirect to='/auth' />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
