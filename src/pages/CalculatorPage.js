import Form from "../components/Calculator/Form";
import Counter from "../components/Calculator/Counter";
import { Fragment } from "react";
import Button from "../components/Button/button";
import { Link } from "react-router-dom";

const CalculatorPage = () => {
  return (
<Fragment>
  <Form />
  <Counter/>
  <Link to='/' >
  <Button title='Back'/>
  </Link>
</Fragment>
  );
};

export default CalculatorPage;