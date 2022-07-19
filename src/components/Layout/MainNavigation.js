import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './MainNavigation.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

const MainNavigation = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authActions.logout())
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Math App</div>
      </Link>
      <nav>
        <ul>
          {!isAuth && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isAuth && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isAuth && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
