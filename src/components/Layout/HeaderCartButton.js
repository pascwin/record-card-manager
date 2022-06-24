import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {

    
    return <button className={classes.button}>
        <span className={classes.icon}>
        </span>
        <span>
            Amount of Card's
        </span>
        <span className={classes.badge}>
            3
        </span>
    </button>
}

export default HeaderCartButton;