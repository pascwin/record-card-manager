import { Fragment } from "react"

import HeaderCartButton from "./HeaderCartButton"
import classes from "./Header.module.css"

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Palle'sRecordCardManager</h1>
                <HeaderCartButton onShowCart={props.onShowCart} show={props.show}/>
            </header>
        </Fragment>
    )
}

export default Header;