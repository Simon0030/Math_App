import StartingPageContent from '../components/StartingPage/StartingPageContent';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import AppPageContent from '../components/AppPage/AppPageContent';

const HomePage = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
  <Fragment>
  {!isAuth && <StartingPageContent/>}
  {isAuth && <AppPageContent/>}
  </Fragment>
);
  
}

export default HomePage;
