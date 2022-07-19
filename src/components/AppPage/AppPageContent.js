import classes from './AppPageContent.module.css';
import Button from '../Button/button';
import { Link } from 'react-router-dom';

const AppPageContent = () => {
  return (
    <section className={classes.starting}>
    <Link to='/calculator'>
      <Button title="Calculator"></Button>
    </Link>
    <Link to='/equation'>
      <Button title="Quadratic Equation"></Button>
    </Link>
    <Link to='/game'>
      <Button title="Game"></Button>
    </Link>
    </section>
  );
};

export default AppPageContent;