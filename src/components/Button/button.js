import classes from './button.module.css'

const Button = (props) => {
    return (
      <div className={classes.div}>
      <button className={classes.button} onClick={props.onClick}>
        {props.title}
      </button>
      </div>
    )
  }
  
  export default Button