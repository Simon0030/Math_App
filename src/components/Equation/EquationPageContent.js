import { Fragment} from 'react/cjs/react.production.min';
import useInput from './use-input';



const isNumber = (value) => !isNaN(value) && value.trim() !== "";

let delta = null
  let x1= null
  let x2 =null

const Equation = (props) => {
  const {
    value: a,
    isValid: aIsValid,
    hasError: aHasError,
    valueChangeHandler: aChangeHandler,
    inputBlurHandler: aBlurHandler,
    reset: resetA,
  } = useInput(isNumber);
  const {
    value: b,
    isValid: bIsValid,
    hasError: bHasError,
    valueChangeHandler: bChangeHandler,
    inputBlurHandler: bBlurHandler,
    reset: resetB,
  } = useInput(isNumber);
  const {
    value: c,
    isValid: cIsValid,
    hasError: cHasError,
    valueChangeHandler: cChangeHandler,
    inputBlurHandler: cBlurHandler,
    reset: resetC,
  } = useInput(isNumber);

  let formIsValid = false;

  if (aIsValid && bIsValid && cIsValid) {
    formIsValid = true;
  }

  
  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(a, b, c);

    delta = (b*b - 4*a*c) 
    const root = Math.sqrt(delta)

    console.log(delta)

    
    x1 = ((-b-root)/(2*a))
    x2 = ((-b+root)/(2*a))

    resetA();
    resetB();
    resetC();
  };

  const firstNameClasses = aHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = bHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = cHasError ? 'form-control invalid' : 'form-control';
  const shouldDisplayNone = delta<0
  const shouldDisplayOne = delta ===0
  const shouldDisplayTwo = delta>0


  return (
    <Fragment>
    <h1>Solutions of the quadratic equation</h1>
    <form onSubmit={submitHandler}>
      <div>
        <div className={firstNameClasses}>
          <input
            type='text'
            id='name'
            value={a}
            onChange={aChangeHandler}
            onBlur={aBlurHandler}
          />
          <label htmlFor='name'>  x^2(coefficient a)</label>
          {aHasError && <p className="error-text">Please enter a value.</p>}
        </div>
        <div className={lastNameClasses}>
          <input
            type='text'
            id='name'
            value={b}
            onChange={bChangeHandler}
            onBlur={bBlurHandler}
          />
          <label htmlFor='name'>  x(coefficient b)</label>
          {bHasError && <p className="error-text">Please enter a value.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <input
          type='text'
          id='name'
          value={c}
          onChange={cChangeHandler}
          onBlur={cBlurHandler}
        />
        <label htmlFor='name'>(coefficient c)</label>
        {cHasError && <p className="error-text">Please enter a value.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
      {shouldDisplayNone && <h2 className='score-text'>No Solutions</h2>}
      {shouldDisplayOne && <h2 className='score-text'>x={x1}</h2>}
      {shouldDisplayTwo && <h2 className='score-text'>x1={x1}, x2={x2}</h2>}
    </form>
    </Fragment>
  );
};

export default Equation;