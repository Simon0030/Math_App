import Equation from "../components/Equation/EquationPageContent";
import { Link } from "react-router-dom";
import Button from "../components/Button/button";
import { Fragment } from "react";

const EquationPage = () => {
  return (
  <Fragment>
  <div className="app">
  <Equation />
  </div>
  <Link to='/' >
  <Button title='Back'/>
  </Link>
  </Fragment>
  );
};

export default EquationPage;
