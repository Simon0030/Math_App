import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../../store/counter';
import classes from './Counter.module.css';
import { number } from './Form';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const addingHandler = () => {
    dispatch(counterActions.adding(parseInt(number)));
  };

  const subtractionHandler = () => {
    dispatch(counterActions.subtraction(parseInt(number)));
  };

  const multiplicationHandler = () => {
    dispatch(counterActions.multiplication(parseInt(number)));
  };

  const divisionHandler = () => {
    dispatch(counterActions.division(parseInt(number)));
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  return (
    <main className={classes.counter}>
      <h1>Score</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={addingHandler}>ADD</button>
        <button onClick={subtractionHandler}>SUBTRACT</button>
        <button onClick={multiplicationHandler}>MULTIPLY</button>
        <button onClick={divisionHandler}>DIVIDE</button>
      </div>
      <button onClick={resetHandler}>RESET</button>
    </main>
  );
};

export default Counter;
