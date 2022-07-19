import classes from '../Calculator/Form.module.css';
import { Fragment, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { numberActions } from '../../store/number';




const Game = () => {
  const numberRef = useRef();
  const [flag, setFlag] = useState(false)
  const [enteredNumber, setEnteredNumber] = useState('');
  const [counter, setCounter] = useState(0)
  const [check, setCheck] = useState(0)
  const [bestUserScore, setBestUserScore] = useState(null)
  const score = useSelector((state) => state.number.number);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  const fetchMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch('https://math-app-fc08d-default-rtdb.firebaseio.com/scores.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      console.log('test')

      const data = await response.json();

      const loadedScore = data[userId].score;
      console.log(loadedScore)

      setBestUserScore(loadedScore);
    } catch (error) {
      return<p>Error</p>;
    }
    ;
  }, [userId]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler, counter]);
  

  const inputHandler = (event) => {
    setEnteredNumber(event.target.value)
    setFlag(false)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    setFlag(true)
  }

  useEffect(() => {
    if (parseInt(enteredNumber) > parseInt(score) && flag===true) {
      setCheck(1)
      
    } else if (parseInt(enteredNumber) < parseInt(score) && flag===true) {
      setCheck(2)
     
    } else if (parseInt(enteredNumber) === parseInt(score) && flag===true) {
      setCheck(3)
      
    }
  }, [enteredNumber, score, flag])

  const userData = {
    score: counter
  }

  const updateHandler = () => {
    const number = Math.floor(Math.random() * 1000) + 1;
    dispatch(numberActions.updateNumber(parseInt(number)));
    setCounter(0)
    setCheck(0)
    setFlag(false)
  };

  async function saveBestScore() {
    await fetch('https://math-app-fc08d-default-rtdb.firebaseio.com/scores/' + userId + '.json', {
      method: 'PATCH',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  if(parseInt(check)===3 && (parseInt(counter)< parseInt(bestUserScore) || bestUserScore==null) && parseInt(counter)>0) {
    setCheck(0)
    setBestUserScore(counter)
    saveBestScore()
    fetchMoviesHandler()
  }



  return (
    <Fragment>
    <div className={classes.div}>
    <h1>Your Best Score: {bestUserScore}</h1>
    </div>
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmissionHandler}>
          <div className={classes.control}>
            <label htmlFor='number'>Enter number</label>
            <input type='number' id='number' ref={numberRef} onChange={inputHandler}/>
          </div>
          <div className={classes.div}>
            <button onClick={() => setCounter(counter+1)}>Submit</button>
          </div>
        </form>
      </section>
    </main>
    <div className={classes.div}>
    {check===1 && <p>Try with less number</p>}
    {check===2 && <p>Try with bigger number</p>}
    {check===3 && <p>Congratulations, you won!</p>}
    <h2>Number of tries: {counter}</h2>
    </div>
    <div className={classes.div}>
        <button onClick={updateHandler}>New Game</button>
    </div>
    </Fragment>
  );
};

export default Game;