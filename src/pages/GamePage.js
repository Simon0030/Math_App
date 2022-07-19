import Game from "../components/Game/Game";
import { Link } from "react-router-dom";
import Button from "../components/Button/button";
import { Fragment } from "react";

const GamePage = () => {
  return (
  <Fragment>
  <Game />
  <Link to='/' >
  <Button title='Back'/>
  </Link>
  </Fragment>
  );
};

export default GamePage;
