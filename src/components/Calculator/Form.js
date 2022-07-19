import classes from './Form.module.css';
import { Fragment } from 'react';

export let number = 0

const Form = () => {
  const inputHandler = (event) => {
    number = event.target.value

    console.log(number)
  };

  

  return (
    <Fragment>
    <main className={classes.auth}>
      <section>
        <form >
          <div className={classes.control}>
            <label htmlFor='number'>Enter number</label>
            <input type='number' id='number' onChange={inputHandler}/>
          </div>
        </form>
      </section>
    </main>
    </Fragment>
  );
};

export default Form;